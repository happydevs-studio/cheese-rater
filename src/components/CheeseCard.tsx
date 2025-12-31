import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Heart } from '@phosphor-icons/react'
import { Cheese, Review } from '@/lib/types'
import { StarDisplay } from './StarRating'
import { calculateAverageRating, getReviewCount } from '@/lib/cheese-utils'
import { motion } from 'framer-motion'

interface CheeseCardProps {
  cheese: Cheese
  reviews: Review[]
  isWishlisted: boolean
  onToggleWishlist: () => void
  onClick: () => void
}

export function CheeseCard({ cheese, reviews, isWishlisted, onToggleWishlist, onClick }: CheeseCardProps) {
  const averageRating = calculateAverageRating(cheese.id, reviews)
  const reviewCount = getReviewCount(cheese.id, reviews)

  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <Card 
        className="overflow-hidden cursor-pointer group relative hover:shadow-lg transition-shadow"
        onClick={onClick}
      >
        <div className="aspect-square relative bg-muted">
          {cheese.imageUrl ? (
            <img
              src={cheese.imageUrl}
              alt={cheese.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-6xl opacity-20">🧀</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          
          <motion.button
            onClick={(e) => {
              e.stopPropagation()
              onToggleWishlist()
            }}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            className="absolute top-3 right-3 z-10 bg-card/90 backdrop-blur-sm rounded-full p-2 shadow-md hover:bg-card transition-colors"
          >
            <Heart
              size={20}
              weight={isWishlisted ? 'fill' : 'regular'}
              className={isWishlisted ? 'text-accent' : 'text-foreground'}
            />
          </motion.button>
        </div>

        <div className="p-4 space-y-3">
          <div>
            <h3 className="font-semibold text-lg leading-tight mb-1">{cheese.name}</h3>
            <p className="text-sm text-muted-foreground">{cheese.origin}</p>
          </div>

          {reviewCount > 0 && (
            <StarDisplay value={averageRating} size={16} showCount count={reviewCount} />
          )}

          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="text-xs">
              {cheese.milkType}
            </Badge>
            <Badge variant="outline" className="text-xs">
              {cheese.texture}
            </Badge>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}
