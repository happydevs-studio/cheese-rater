import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Heart, Plus, ShoppingCart } from '@phosphor-icons/react'
import { Cheese, Review } from '@/lib/types'
import { StarRating, StarDisplay } from './StarRating'
import { calculateAverageRating, getReviewCount, getUserReview } from '@/lib/cheese-utils'
import { useState } from 'react'
import { motion } from 'framer-motion'

interface CheeseDetailProps {
  cheese: Cheese | null
  open: boolean
  onOpenChange: (open: boolean) => void
  reviews: Review[]
  userId: string
  userNickname: string | undefined
  isWishlisted: boolean
  onToggleWishlist: () => void
  onSubmitReview: (rating: number, notes: string) => void
  onUpdateReview: (reviewId: string, rating: number, notes: string) => void
  onNicknamePrompt: () => void
}

export function CheeseDetail({
  cheese,
  open,
  onOpenChange,
  reviews,
  userId,
  userNickname,
  isWishlisted,
  onToggleWishlist,
  onSubmitReview,
  onUpdateReview,
  onNicknamePrompt,
}: CheeseDetailProps) {
  const [rating, setRating] = useState(0)
  const [notes, setNotes] = useState('')
  const [showReviewForm, setShowReviewForm] = useState(false)

  if (!cheese) return null

  const averageRating = calculateAverageRating(cheese.id, reviews)
  const reviewCount = getReviewCount(cheese.id, reviews)
  const cheeseReviews = reviews.filter(r => r.cheeseId === cheese.id).sort((a, b) => b.createdAt - a.createdAt)
  const userReview = getUserReview(cheese.id, userId, reviews)

  const handleSubmit = () => {
    if (!userNickname) {
      onNicknamePrompt()
      return
    }

    if (rating === 0) return

    if (userReview) {
      onUpdateReview(userReview.id, rating, notes)
    } else {
      onSubmitReview(rating, notes)
    }

    setRating(0)
    setNotes('')
    setShowReviewForm(false)
  }

  const handleOpenReviewForm = () => {
    if (userReview) {
      setRating(userReview.rating)
      setNotes(userReview.notes)
    }
    setShowReviewForm(true)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] p-0">
        <div className="aspect-[16/9] relative bg-muted">
          {cheese.imageUrl ? (
            <img
              src={cheese.imageUrl}
              alt={cheese.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-9xl opacity-20">🧀</span>
            </div>
          )}
        </div>

        <ScrollArea className="max-h-[50vh]">
          <div className="p-6 space-y-6">
            <DialogHeader>
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <DialogTitle className="text-3xl mb-2">{cheese.name}</DialogTitle>
                  <p className="text-lg text-muted-foreground">{cheese.origin}</p>
                </div>
                <motion.button
                  onClick={onToggleWishlist}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-secondary hover:bg-secondary/80 rounded-full p-3 transition-colors"
                >
                  <Heart
                    size={24}
                    weight={isWishlisted ? 'fill' : 'regular'}
                    className={isWishlisted ? 'text-accent' : 'text-foreground'}
                  />
                </motion.button>
              </div>
            </DialogHeader>

            {reviewCount > 0 && (
              <div className="flex items-center gap-3">
                <StarDisplay value={averageRating} size={24} />
                <span className="text-lg font-medium">
                  {averageRating.toFixed(1)}
                </span>
                <span className="text-muted-foreground">
                  ({reviewCount} {reviewCount === 1 ? 'review' : 'reviews'})
                </span>
              </div>
            )}

            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="text-sm px-3 py-1">
                {cheese.milkType}
              </Badge>
              <Badge variant="outline" className="text-sm px-3 py-1">
                {cheese.texture}
              </Badge>
              {cheese.flavorProfile.map(flavor => (
                <Badge key={flavor} variant="outline" className="text-sm px-3 py-1">
                  {flavor}
                </Badge>
              ))}
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">About this cheese</h3>
              <p className="text-foreground/90 leading-relaxed">{cheese.description}</p>
            </div>

            {cheese.purchaseUrl && (
              <div>
                <Button
                  asChild
                  size="lg"
                  className="w-full"
                >
                  <a
                    href={cheese.purchaseUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ShoppingCart size={20} />
                    Buy This Cheese
                  </a>
                </Button>
              </div>
            )}

            <Separator />

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-lg">Reviews</h3>
                {!showReviewForm && (
                  <Button onClick={handleOpenReviewForm} size="sm">
                    <Plus size={18} />
                    {userReview ? 'Edit My Review' : 'Add Review'}
                  </Button>
                )}
              </div>

              {showReviewForm && (
                <div className="bg-muted/50 rounded-lg p-4 space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Your Rating</label>
                    <StarRating value={rating} onChange={setRating} size={28} />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Tasting Notes</label>
                    <Textarea
                      id="tasting-notes"
                      placeholder="Describe your experience with this cheese..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      rows={4}
                      className="resize-none"
                    />
                  </div>

                  <div className="flex gap-2">
                    <Button onClick={handleSubmit} disabled={rating === 0}>
                      {userReview ? 'Update Review' : 'Submit Review'}
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setShowReviewForm(false)
                        setRating(0)
                        setNotes('')
                      }}
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              )}

              {cheeseReviews.length === 0 && !showReviewForm && (
                <p className="text-center text-muted-foreground py-8">
                  No reviews yet. Be the first to share your thoughts!
                </p>
              )}

              <div className="space-y-4">
                {cheeseReviews.map(review => (
                  <div key={review.id} className="space-y-2">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="bg-primary text-primary-foreground text-xs">
                          {review.nickname.slice(0, 2).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <p className="font-medium text-sm">{review.nickname}</p>
                        <p className="text-xs text-muted-foreground">
                          {new Date(review.createdAt).toLocaleDateString('en-GB', {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric'
                          })}
                        </p>
                      </div>
                      <StarDisplay value={review.rating} size={16} />
                    </div>
                    {review.notes && (
                      <p className="text-sm text-foreground/90 leading-relaxed pl-11">
                        {review.notes}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}
