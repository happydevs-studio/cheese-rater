export interface Cheese {
  id: string
  name: string
  origin: string
  milkType: string
  texture: string
  flavorProfile: string[]
  description: string
  imageUrl?: string
  purchaseUrl?: string
  createdAt: number
}

export interface Review {
  id: string
  cheeseId: string
  userId: string
  nickname: string
  rating: number
  notes: string
  createdAt: number
}

export interface UserProfile {
  nickname: string
  triedCheeses: string[]
  wishlist: string[]
}

export type ViewMode = 'all' | 'tried' | 'wishlist'

export type SortOption = 'rating' | 'name' | 'newest'

export interface FilterState {
  origin: string[]
  milkType: string[]
  texture: string[]
  flavorProfile: string[]
}
