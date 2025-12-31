# CheeseRater.co.uk - Product Requirements Document

A sophisticated cheese rating and discovery platform connecting enthusiasts with artisan cheeses and enabling them to document their tasting journey.

**Experience Qualities**:
1. **Refined yet Approachable** - Like a boutique cheese shop that welcomes novices and connoisseurs alike
2. **Tactile and Warm** - Every interaction should feel as satisfying as unwrapping aged cheese from wax paper
3. **Discovery-Focused** - Encourages exploration through intuitive filtering and personalized collections

**Complexity Level**: Complex Application (advanced functionality, likely with multiple views)
This is a multi-user platform with role-based access (admin/user), personalized data management, sophisticated filtering/discovery features, and CRUD operations for both cheese entries and user reviews.

## Essential Features

### Admin Authentication & Cheese Management
- **Functionality**: Admins can add new cheeses to the catalog with comprehensive details
- **Purpose**: Curates a high-quality cheese database for community exploration
- **Trigger**: Owner status verified via Spark auth, "Add Cheese" button in header
- **Progression**: Admin view → Add Cheese button → Form (name, origin, milk type, texture, flavor profiles, description, image URL, purchase URL) → Submit → Toast confirmation → Cheese appears in grid
- **Success criteria**: Cheese appears immediately in main grid with all metadata, can be viewed in detail, and purchase link directs to external retailer

### Purchase Integration
- **Functionality**: Each cheese can have an associated purchase URL directing users to where they can buy it
- **Purpose**: Creates a seamless path from discovery to purchase, helping users act on their cheese interests
- **Trigger**: Admin enters purchase URL when adding cheese; users click "Buy This Cheese" button in detail view
- **Progression**: User views cheese detail → Sees prominent "Buy This Cheese" button → Clicks → Opens retailer site in new tab
- **Success criteria**: Purchase button only appears when URL exists, opens in new tab with proper security attributes, and "Available" badge shows on cards

### Cheese Search
- **Functionality**: Real-time search filtering by cheese name
- **Purpose**: Quick access to specific cheeses in large catalogs
- **Trigger**: User types in search bar at top of page
- **Progression**: User types → Results filter instantly → Clear button appears → Click X or clear search to reset
- **Success criteria**: Updates results immediately, works with other filters, shows appropriate empty state

### Cheese Rating & Review System
- **Functionality**: 5-star rating with optional tasting notes
- **Purpose**: Enables personal reflection and contributes to community knowledge
- **Trigger**: Click cheese card to view detail, then "Add Review" button
- **Progression**: Cheese detail view → Star rating selection → Tasting notes textarea → Submit → Updates average rating → Adds to tried collection → Removes from wishlist if present
- **Success criteria**: Rating persists, displays in cheese detail with user nickname and date, contributes to average rating calculation, users can edit their own reviews

### Wishlist & Tried Collections
- **Functionality**: Users can bookmark cheeses they want to try and automatically track ones they've reviewed
- **Purpose**: Provides satisfying overview of personal cheese journey
- **Trigger**: Click heart icon on any cheese card
- **Progression**: Click heart → Toggle wishlist status → Toast confirmation → Count updates in tab badge → Can view filtered in Wishlist tab → Automatically moves to "My Cheeses" upon rating
- **Success criteria**: Persists across sessions, shows accurate counts, properly filters views, transitions smoothly between states

### Nickname Management
- **Functionality**: Users set a display name for their reviews
- **Purpose**: Personalizes the experience while maintaining simplicity
- **Trigger**: Prompted after 1 second on first visit, or when attempting review without nickname
- **Progression**: Modal appears → Enter nickname → Confirms → Persists → Can edit by clicking name in header
- **Success criteria**: Required for reviews, displays on all user's reviews, can be updated anytime

### Discovery & Filtering
- **Functionality**: Browse cheeses by highest rated, origin country, milk type, texture, flavor profile
- **Purpose**: Helps users discover new cheeses matching their preferences
- **Trigger**: User selects filter chips or sort dropdown
- **Progression**: Select filter category → Choose options → Results filter instantly → Filter count badge updates → Clear individual or all filters → Returns to full catalog
- **Success criteria**: Filters combine intelligently (AND logic within category, OR across), available filter options update based on current results, performs smoothly with large catalogs

### Cheese Detail View
- **Functionality**: Modal with full cheese information, reviews, and rating interface
- **Purpose**: Provides comprehensive information for decision-making
- **Trigger**: Click any cheese card
- **Progression**: Card click → Modal slides up → Shows image, details, purchase button (if available), reviews → Can rate, wishlist, or close
- **Success criteria**: Loads instantly, displays all information clearly, reviews sorted by date, shows user's own review prominently if exists

## Edge Case Handling

- **Empty States**: Show encouraging empty states for "no cheeses tried yet" and "wishlist empty" with call-to-action
- **No Search Results**: Clear messaging with option to reset search or filters
- **Unauthenticated Admin**: Hide add cheese button, show read-only experience
- **Missing Cheese Images**: Fallback to cheese emoji placeholder with consistent styling
- **No Purchase URL**: Hide buy button entirely, no broken links or disabled states
- **Long Tasting Notes**: Truncate in list views with "Read more" expansion
- **Duplicate Flavor Tags**: Prevent adding same flavor twice during cheese creation
- **Empty Filter Categories**: Hide filter sections with no available options

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
  - **Button**: Primary (add cheese, submit review, buy cheese), Secondary (filter toggles), Ghost (icon actions)
  - **Input/Textarea**: Nickname entry, cheese attributes, search, tasting notes with warm focus states
  - **Badge**: Cheese attributes (milk type, origin, texture, availability) with color coding
  - **Avatar**: User identification in reviews with fallback to initials
  - **Tabs**: Switch between "All Cheeses", "My Cheeses", "Wishlist"
  - **Select**: Sort dropdown (highest rated, newest, A-Z)
  - **Separator**: Subtle dividers between review entries
  - **Scroll Area**: For long review lists in detail modal
  - **Label**: Form field labels with semantic clarity

- **Customizations**:
  - **Star Rating Component**: Custom 5-star input using Phosphor star icons with fill animation
  - **Filter Panel**: Multi-section accordion with checkbox groups for each attribute type
  - **Cheese Card**: Card with aspect-ratio image container, gradient overlay on hover for depth
  - **Empty State Component**: Custom illustration area with emoji, encouraging copy, and CTA button
  - **Purchase Button**: Full-width prominent CTA in cheese detail with shopping cart icon

- **States**:
  - **Buttons**: Default has subtle shadow, hover lifts with increased shadow, active depresses slightly
  - **Cards**: Default flat, hover elevates with shadow and subtle scale (1.02), active state shows selected border
  - **Inputs**: Default with warm border, focus gets accent color ring with soft glow, filled shows success state
  - **Star Rating**: Unfilled outline, hover fills temporarily, selected fills with accent and subtle bounce
  - **Wishlist Icon**: Outline default, filled on saved with scale-up animation and color change
  - **Purchase Badge**: Appears on cards with shopping cart icon when URL exists, using primary color

- **Icon Selection**:
  - Star (Phosphor): Ratings (filled/outline variants)
  - Heart (Phosphor): Wishlist toggle
  - Plus (Phosphor): Add cheese, add review actions
  - FunnelSimple (Phosphor): Filter panel toggle
  - MagnifyingGlass (Phosphor): Search functionality
  - X (Phosphor): Clear search, remove filter chips
  - ShoppingCart (Phosphor): Purchase availability and buy button
  - User (Phosphor): Profile/nickname settings

- **Spacing**:
  - Page margins: px-6 md:px-12 (comfortable edge breathing room)
  - Section gaps: gap-8 (clear content separation)
  - Card grid: gap-6 (balanced density for browsing)
  - Form fields: gap-4 (clear field relationships)
  - Button padding: px-6 py-3 (substantial touch targets)

- **Mobile**:
  - **Navigation**: Top header remains consistent across devices
  - **Cheese Grid**: Single column on mobile (full cards), 2 columns tablet, 3 columns desktop
  - **Filters**: Hidden behind toggle button on mobile, always visible sidebar on desktop
  - **Search**: Full width on mobile with clear button
  - **Typography**: Maintain hierarchy, adjust sizes proportionally
  - **Admin Form**: Stacked full-width inputs on mobile, two-column layout on desktop
  - **Detail Modal**: Full-height on mobile, max-height with scroll on desktop
