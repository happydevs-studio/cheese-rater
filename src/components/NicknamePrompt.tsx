import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useState } from 'react'

interface NicknamePromptProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onSubmit: (nickname: string) => void
  currentNickname?: string
}

export function NicknamePrompt({ open, onOpenChange, onSubmit, currentNickname }: NicknamePromptProps) {
  const [nickname, setNickname] = useState(currentNickname || '')

  const handleSubmit = () => {
    if (nickname.trim()) {
      onSubmit(nickname.trim())
      onOpenChange(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl">
            {currentNickname ? 'Change Your Nickname' : 'Set Your Nickname'}
          </DialogTitle>
          <DialogDescription>
            {currentNickname
              ? 'Update the nickname that appears on your reviews.'
              : 'Choose a nickname to display on your cheese reviews.'}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="user-nickname">Nickname</Label>
            <Input
              id="user-nickname"
              placeholder="e.g. CheeseConnoisseur"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault()
                  handleSubmit()
                }
              }}
              maxLength={30}
            />
          </div>

          <div className="flex gap-2">
            <Button onClick={handleSubmit} disabled={!nickname.trim()}>
              {currentNickname ? 'Update' : 'Save'}
            </Button>
            {currentNickname && (
              <Button variant="outline" onClick={() => onOpenChange(false)}>
                Cancel
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
