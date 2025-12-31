import { Cheese, Review } from './types'

export function calculateAverageRating(cheeseId: string, reviews: Review[]): number {
  const cheeseReviews = reviews.filter(r => r.cheeseId === cheeseId)
  if (cheeseReviews.length === 0) return 0
  
  const sum = cheeseReviews.reduce((acc, r) => acc + r.rating, 0)
  return sum / cheeseReviews.length
}

export function getReviewCount(cheeseId: string, reviews: Review[]): number {
  return reviews.filter(r => r.cheeseId === cheeseId).length
}

export function getUserReview(cheeseId: string, userId: string, reviews: Review[]): Review | undefined {
  return reviews.find(r => r.cheeseId === cheeseId && r.userId === userId)
}

export function sortCheeses(
  cheeses: Cheese[],
  reviews: Review[],
  sortBy: 'rating' | 'name' | 'newest'
): Cheese[] {
  const sorted = [...cheeses]
  
  switch (sortBy) {
    case 'rating':
      return sorted.sort((a, b) => 
        calculateAverageRating(b.id, reviews) - calculateAverageRating(a.id, reviews)
      )
    case 'name':
      return sorted.sort((a, b) => a.name.localeCompare(b.name))
    case 'newest':
      return sorted.sort((a, b) => b.createdAt - a.createdAt)
    default:
      return sorted
  }
}

export function filterCheeses(
  cheeses: Cheese[],
  filters: {
    origin: string[]
    milkType: string[]
    texture: string[]
    flavorProfile: string[]
  }
): Cheese[] {
  return cheeses.filter(cheese => {
    if (filters.origin.length > 0 && !filters.origin.includes(cheese.origin)) {
      return false
    }
    if (filters.milkType.length > 0 && !filters.milkType.includes(cheese.milkType)) {
      return false
    }
    if (filters.texture.length > 0 && !filters.texture.includes(cheese.texture)) {
      return false
    }
    if (filters.flavorProfile.length > 0) {
      const hasMatchingFlavor = filters.flavorProfile.some(flavor =>
        cheese.flavorProfile.includes(flavor)
      )
      if (!hasMatchingFlavor) return false
    }
    return true
  })
}

export function getUniqueValues(cheeses: Cheese[], key: keyof Cheese): string[] {
  const values = new Set<string>()
  
  cheeses.forEach(cheese => {
    const value = cheese[key]
    if (Array.isArray(value)) {
      value.forEach(v => values.add(v))
    } else if (typeof value === 'string') {
      values.add(value)
    }
  })
  
  return Array.from(values).sort()
}

export function searchCheeses(cheeses: Cheese[], query: string): Cheese[] {
  if (!query.trim()) return cheeses
  
  const lowerQuery = query.toLowerCase().trim()
  return cheeses.filter(cheese =>
    cheese.name.toLowerCase().includes(lowerQuery)
  )
}

export function generateUserId(): string {
  const stored = localStorage.getItem('cheese-user-id')
  if (stored) return stored
  
  const newId = `user-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
  localStorage.setItem('cheese-user-id', newId)
  return newId
}
