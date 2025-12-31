# CheeseRater.co.uk - Product Requirements Document

**Experience Qualities**:

**Experience Qualities**:
This is a multi-user platform with role-based access (admin/user), personalized data management, sophisticated filtering/discovery features, and CRUD op
## Essential Features
### Admin Authentication & Cheese Management

- **Progression**: Admin view → Add Cheese button → Form (name, origin, milk type, texture, fl


## Essential Features

### Admin Authentication & Cheese Management
- **Purpose**: Enables personal reflection and contributes to community knowledge
- **Progression**: Cheese detail view → Star rating selection → Tasting notes textarea → Submit →

- **Functionality**: Users can bookmark cheeses they want to try
- **Trigger**: Click bookmark icon on any cheese card

### Personal Collection Views
- **Purpose**: Provides satisfying overview of personal cheese journey
- **Progression**: Click navigation → Filtered grid view → Shows o

- **Functionality**: Browse cheeses by highest rated, origin country, milk type, texture, flavor profile
- **Trigger**: User selects filter chips or sort dropdown

### Cheese Rating & Review System
- **Purpose**: Provides comprehensive information for decision-making
- **Purpose**: Enables personal reflection and contributes to community knowledge


- **Empty States**: Show encouraging empty states for "no cheeses tried yet" and "wishlist empty" with call-to-action

- **Unauthenticated Adm
- **Functionality**: Users can bookmark cheeses they want to try
## Design Direction
- **Trigger**: Click bookmark icon on any cheese card
## Color Selection
A warm, earthy palette inspired by cheese itself—cream, aged paper, and rich golden tones with subtle sophistication.

### Personal Collection Views
- **Accent Color**: Vibrant saffron `oklch(0.72 0.16 75)` - Attention-grabbing 
- **Purpose**: Provides satisfying overview of personal cheese journey
  - Primary Foreground on Primary (Cream `oklch(0.98 0.01 85)` on Amber `o
## Font Selection
Typography should balance editorial refinement with approachable warmth—a serif for storytelling and char

  - H2 (Section Headers): Crimso
- **Functionality**: Browse cheeses by highest rated, origin country, milk type, texture, flavor profile
  - Buttons: Source Sans 3 SemiBold/15px/slight tracking - Confident a
- **Trigger**: User selects filter chips or sort dropdown



### Cheese Detail View
  - **Button**: Primary (add cheese, submit review), Secondary (filter toggles), Ghost (icon actions)
- **Purpose**: Provides comprehensive information for decision-making
  - **Tabs**: Switch between "All Cheeses", "My Ch
  - **Separator**: Subtle dividers between review entries
  - **Skeleton**: Loading states for cheese cards

  - **Filter Pills**:

- **States**:
- **Empty States**: Show encouraging empty states for "no cheeses tried yet" and "wishlist empty" with call-to-action
  - **Star Rating**: Unfilled outline, hover fills temporarily, selected fills with accent and sub

  - Star (Phosphor): Ratings (filled/outline variants)
  - Plus (Phosphor): Add cheese, add review actions
  - MagnifyingGlass (Phosphor): Search functionality
- **Long Tasting Notes**: Truncate in list views with "Read more" expansion

## Design Direction

The design should evoke the warmth of a rustic French fromagerie combined with modern editorial sophistication. Think aged paper textures meeting clean typography—a balance between old-world craftsmanship and contemporary clarity. The interface should feel like flipping through a well-loved cheese journal with premium paper stock, where each interaction feels tactile and considered. Users should feel they're part of a refined community of cheese enthusiasts.

## Color Selection

A warm, earthy palette inspired by cheese itself—cream, aged paper, and rich golden tones with subtle sophistication.

- **Primary Color**: Deep amber gold `oklch(0.55 0.12 70)` - Represents aged cheese rinds and premium quality, used for primary actions and key highlights
- **Secondary Colors**: 
  - Warm cream `oklch(0.96 0.02 85)` - Soft, inviting background that suggests fresh cheese and parchment
  - Rich brown `oklch(0.35 0.04 60)` - Earthy depth for secondary elements and grounding
- **Accent Color**: Vibrant saffron `oklch(0.72 0.16 75)` - Attention-grabbing for CTAs, ratings, and important interactions
- **Foreground/Background Pairings**: 
  - Primary on Background (Rich Brown `oklch(0.35 0.04 60)` on Cream `oklch(0.96 0.02 85)`): Ratio 8.2:1 ✓
  - Accent on Background (Saffron `oklch(0.72 0.16 75)` on Cream `oklch(0.96 0.02 85)`): Ratio 4.9:1 ✓
  - Primary Foreground on Primary (Cream `oklch(0.98 0.01 85)` on Amber `oklch(0.55 0.12 70)`): Ratio 6.1:1 ✓

## Font Selection

Typography should balance editorial refinement with approachable warmth—a serif for storytelling and character paired with a clean sans-serif for clarity.

- **Typographic Hierarchy**:
  - H1 (App Title/Logo): Crimson Pro SemiBold/32px/tight tracking - Editorial weight for brand presence
  - H2 (Section Headers): Crimson Pro SemiBold/24px/normal tracking - Clear hierarchy for main sections
  - H3 (Cheese Names): Crimson Pro Medium/20px/slight tracking - Distinctive identity for each cheese
  - Body Text (Descriptions): Source Sans 3 Regular/16px/relaxed line-height 1.6 - Readable for longer content
  - Labels (Metadata): Source Sans 3 Medium/14px/uppercase subtle tracking - Clear categorization
  - Buttons: Source Sans 3 SemiBold/15px/slight tracking - Confident action prompts
  - Reviews: Source Sans 3 Regular/15px/relaxed line-height 1.5 - Comfortable reading experience

## Animations

Animations should feel gentle and organic, like cheese aging—smooth transitions that guide rather than distract. Use subtle micro-interactions for feedback (star ratings filling, bookmark hearts pulsing) and elegant page transitions (cheese cards lifting on hover with soft shadows, filter panels sliding smoothly). Rating interactions should feel satisfying with a subtle scale-up on click. Keep timing relaxed (300-400ms) to match the contemplative nature of cheese tasting. Avoid jarring movements; everything should feel as smooth as aged brie.

## Component Selection

- **Components**:
  - **Card**: Primary component for cheese grid display with hover states
  - **Dialog**: Cheese detail view and admin cheese entry form
  - **Button**: Primary (add cheese, submit review), Secondary (filter toggles), Ghost (icon actions)
  - **Input/Textarea**: Nickname entry, cheese attributes, tasting notes with warm focus states
  - **Badge**: Cheese attributes (milk type, origin, texture) with color coding
  - **Avatar**: User identification in reviews with fallback to initials
  - **Tabs**: Switch between "All Cheeses", "My Cheeses", "Wishlist"
  - **Select**: Sort dropdown (highest rated, newest, A-Z)
  - **Separator**: Subtle dividers between review entries
  - **Scroll Area**: For long review lists and cheese grids
  - **Skeleton**: Loading states for cheese cards

- **Customizations**:
  - **Star Rating Component**: Custom 5-star input using Phosphor star icons with fill animation
  - **Filter Pills**: Toggle button group styled as rounded pills with active state in accent color
  - **Cheese Card**: Card with aspect-ratio image container, gradient overlay for text legibility
  - **Empty State Component**: Custom illustration area with encouraging copy

- **States**:
  - **Buttons**: Default has subtle shadow, hover lifts with increased shadow, active depresses slightly
  - **Cards**: Default flat, hover elevates with shadow and subtle scale (1.02), active state shows selected border
  - **Inputs**: Default with warm border, focus gets accent color ring with soft glow, filled shows success state
  - **Star Rating**: Unfilled outline, hover fills temporarily, selected fills with accent and subtle bounce
  - **Wishlist Icon**: Outline default, filled on saved with scale-up animation and color change

- **Icon Selection**:
  - Star (Phosphor): Ratings (filled/outline variants)
  - Heart (Phosphor): Wishlist toggle
  - Plus (Phosphor): Add cheese, add review actions
  - FunnelSimple (Phosphor): Filter panel toggle
  - MagnifyingGlass (Phosphor): Search functionality
  - CaretDown (Phosphor): Sort dropdown indicator

  - User (Phosphor): Profile/nickname settings
  - SignIn (Phosphor): Admin authentication


  - Page margins: px-6 md:px-12 (comfortable edge breathing room)
  - Section gaps: gap-8 md:gap-12 (clear content separation)
  - Card grid: gap-6 (balanced density for browsing)

  - Form fields: gap-4 (clear field relationships)
  - Button padding: px-6 py-3 (substantial touch targets)


  - **Navigation**: Bottom tab bar on mobile with icons, top header on desktop
  - **Cheese Grid**: Single column on mobile (full cards), 2 columns tablet, 3-4 columns desktop
  - **Filters**: Horizontal scrolling pill bar on mobile, multi-row grid on desktop

  - **Typography**: Reduce heading sizes by 20% on mobile, maintain readability
  - **Admin Form**: Stacked full-width inputs on mobile, two-column layout on desktop
