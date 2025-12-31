import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { X } from '@phosphor-icons/react'
import { FilterState } from '@/lib/types'

interface FilterPanelProps {
  filters: FilterState
  onFilterChange: (filters: FilterState) => void
  availableFilters: {
    origins: string[]
    milkTypes: string[]
    textures: string[]
    flavorProfiles: string[]
  }
}

export function FilterPanel({ filters, onFilterChange, availableFilters }: FilterPanelProps) {
  const toggleFilter = (category: keyof FilterState, value: string) => {
    const currentValues = filters[category]
    const newValues = currentValues.includes(value)
      ? currentValues.filter(v => v !== value)
      : [...currentValues, value]
    
    onFilterChange({
      ...filters,
      [category]: newValues,
    })
  }

  const clearAllFilters = () => {
    onFilterChange({
      origin: [],
      milkType: [],
      texture: [],
      flavorProfile: [],
    })
  }

  const hasActiveFilters = Object.values(filters).some(arr => arr.length > 0)

  return (
    <div className="space-y-6 bg-card rounded-xl p-6 border">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-lg">Filters</h3>
        {hasActiveFilters && (
          <Button variant="ghost" size="sm" onClick={clearAllFilters}>
            Clear All
          </Button>
        )}
      </div>

      <div className="space-y-5">
        {availableFilters.origins.length > 0 && (
          <FilterSection
            title="Origin"
            values={availableFilters.origins}
            selected={filters.origin}
            onToggle={(value) => toggleFilter('origin', value)}
          />
        )}

        {availableFilters.milkTypes.length > 0 && (
          <FilterSection
            title="Milk Type"
            values={availableFilters.milkTypes}
            selected={filters.milkType}
            onToggle={(value) => toggleFilter('milkType', value)}
          />
        )}

        {availableFilters.textures.length > 0 && (
          <FilterSection
            title="Texture"
            values={availableFilters.textures}
            selected={filters.texture}
            onToggle={(value) => toggleFilter('texture', value)}
          />
        )}

        {availableFilters.flavorProfiles.length > 0 && (
          <FilterSection
            title="Flavor Profile"
            values={availableFilters.flavorProfiles}
            selected={filters.flavorProfile}
            onToggle={(value) => toggleFilter('flavorProfile', value)}
          />
        )}
      </div>
    </div>
  )
}

interface FilterSectionProps {
  title: string
  values: string[]
  selected: string[]
  onToggle: (value: string) => void
}

function FilterSection({ title, values, selected, onToggle }: FilterSectionProps) {
  return (
    <div className="space-y-2">
      <h4 className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
        {title}
      </h4>
      <div className="flex flex-wrap gap-2">
        {values.map(value => {
          const isSelected = selected.includes(value)
          return (
            <Badge
              key={value}
              variant={isSelected ? 'default' : 'outline'}
              className={`cursor-pointer transition-colors ${
                isSelected ? 'bg-accent text-accent-foreground' : 'hover:bg-muted'
              }`}
              onClick={() => onToggle(value)}
            >
              {value}
              {isSelected && <X size={14} className="ml-1" />}
            </Badge>
          )
        })}
      </div>
    </div>
  )
}
