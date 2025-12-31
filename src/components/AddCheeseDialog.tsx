import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { X, Plus } from '@phosphor-icons/react'
import { useState } from 'react'
import { Cheese } from '@/lib/types'

interface AddCheeseDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onSubmit: (cheese: Omit<Cheese, 'id' | 'createdAt'>) => void
}

export function AddCheeseDialog({ open, onOpenChange, onSubmit }: AddCheeseDialogProps) {
  const [name, setName] = useState('')
  const [origin, setOrigin] = useState('')
  const [milkType, setMilkType] = useState('')
  const [texture, setTexture] = useState('')
  const [description, setDescription] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [purchaseUrl, setPurchaseUrl] = useState('')
  const [flavorInput, setFlavorInput] = useState('')
  const [flavorProfile, setFlavorProfile] = useState<string[]>([])

  const handleAddFlavor = () => {
    if (flavorInput.trim() && !flavorProfile.includes(flavorInput.trim())) {
      setFlavorProfile([...flavorProfile, flavorInput.trim()])
      setFlavorInput('')
    }
  }

  const handleRemoveFlavor = (flavor: string) => {
    setFlavorProfile(flavorProfile.filter(f => f !== flavor))
  }

  const handleSubmit = () => {
    if (!name || !origin || !milkType || !texture || !description) {
      return
    }

    onSubmit({
      name,
      origin,
      milkType,
      texture,
      flavorProfile,
      description,
      imageUrl: imageUrl || undefined,
      purchaseUrl: purchaseUrl || undefined,
    })

    setName('')
    setOrigin('')
    setMilkType('')
    setTexture('')
    setDescription('')
    setImageUrl('')
    setPurchaseUrl('')
    setFlavorProfile([])
    setFlavorInput('')
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Add New Cheese</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="cheese-name">Cheese Name *</Label>
              <Input
                id="cheese-name"
                placeholder="e.g. Aged Cheddar"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="cheese-origin">Origin *</Label>
              <Input
                id="cheese-origin"
                placeholder="e.g. England"
                value={origin}
                onChange={(e) => setOrigin(e.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="cheese-milk-type">Milk Type *</Label>
              <Input
                id="cheese-milk-type"
                placeholder="e.g. Cow's Milk"
                value={milkType}
                onChange={(e) => setMilkType(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="cheese-texture">Texture *</Label>
              <Input
                id="cheese-texture"
                placeholder="e.g. Hard, Soft, Semi-Soft"
                value={texture}
                onChange={(e) => setTexture(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="cheese-flavor">Flavor Profile</Label>
            <div className="flex gap-2">
              <Input
                id="cheese-flavor"
                placeholder="e.g. Nutty"
                value={flavorInput}
                onChange={(e) => setFlavorInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault()
                    handleAddFlavor()
                  }
                }}
              />
              <Button type="button" variant="outline" onClick={handleAddFlavor}>
                <Plus size={18} />
              </Button>
            </div>
            {flavorProfile.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {flavorProfile.map(flavor => (
                  <Badge key={flavor} variant="secondary" className="gap-1">
                    {flavor}
                    <button
                      type="button"
                      onClick={() => handleRemoveFlavor(flavor)}
                      className="hover:text-destructive"
                    >
                      <X size={14} />
                    </button>
                  </Badge>
                ))}
              </div>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="cheese-description">Description *</Label>
            <Textarea
              id="cheese-description"
              placeholder="Describe the cheese, its characteristics, and production method..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              className="resize-none"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="cheese-image">Image URL (optional)</Label>
            <Input
              id="cheese-image"
              type="url"
              placeholder="https://example.com/cheese-image.jpg"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="cheese-purchase-url">Where to Buy URL (optional)</Label>
            <Input
              id="cheese-purchase-url"
              type="url"
              placeholder="https://example.com/buy-cheese"
              value={purchaseUrl}
              onChange={(e) => setPurchaseUrl(e.target.value)}
            />
          </div>

          <div className="flex gap-2 pt-4">
            <Button
              onClick={handleSubmit}
              disabled={!name || !origin || !milkType || !texture || !description}
            >
              Add Cheese
            </Button>
            <Button variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
