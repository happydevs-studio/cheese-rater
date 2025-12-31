import { Star } from '@phosphor-icons/react'
import { useState } from 'react'
import { motion } from 'framer-motion'

interface StarRatingProps {
  value: number
  onChange?: (rating: number) => void
  readonly?: boolean
  size?: number
}

export function StarRating({ value, onChange, readonly = false, size = 24 }: StarRatingProps) {
  const [hoverValue, setHoverValue] = useState(0)

  const displayValue = readonly ? value : (hoverValue || value)

  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <motion.button
          key={star}
          type="button"
          disabled={readonly}
          onClick={() => !readonly && onChange?.(star)}
          onMouseEnter={() => !readonly && setHoverValue(star)}
          onMouseLeave={() => !readonly && setHoverValue(0)}
          whileHover={!readonly ? { scale: 1.1 } : {}}
          whileTap={!readonly ? { scale: 0.95 } : {}}
          className={readonly ? 'cursor-default' : 'cursor-pointer'}
        >
          <Star
            size={size}
            weight={star <= displayValue ? 'fill' : 'regular'}
            className={star <= displayValue ? 'text-accent' : 'text-muted-foreground'}
          />
        </motion.button>
      ))}
    </div>
  )
}

interface StarDisplayProps {
  value: number
  size?: number
  showCount?: boolean
  count?: number
}

export function StarDisplay({ value, size = 20, showCount, count }: StarDisplayProps) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={size}
            weight={star <= Math.round(value) ? 'fill' : 'regular'}
            className={star <= Math.round(value) ? 'text-accent' : 'text-muted-foreground'}
          />
        ))}
      </div>
      {showCount && count !== undefined && (
        <span className="text-sm text-muted-foreground">({count})</span>
      )}
    </div>
  )
}
