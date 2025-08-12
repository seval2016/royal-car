// Design System Constants
export const COLORS = {
  // Brand Colors
  BRAND_YELLOW: '#ffcd00',
  BRAND_DARK: '#333333',
  
  // Gray Scale
  GRAY_LIGHT: '#777777',
  GRAY_MEDIUM: '#999999', 
  GRAY_DARK: '#444444',
  
  // Common Colors
  WHITE: '#ffffff',
  BLACK: '#000000',
} as const;

export const FONT_SIZES = {
  XS_CUSTOM: '0.625rem',    // 10px
  SM_CUSTOM: '0.6875rem',   // 11px
  BASE_CUSTOM: '0.8125rem', // 13px
} as const;

export const SPACING = {
  SECTION_PADDING: {
    MOBILE: 'py-12',
    SMALL: 'sm:py-16', 
    MEDIUM: 'md:py-20',
    LARGE: 'lg:py-24',
  },
  CONTAINER_PADDING: {
    MOBILE: 'px-4',
    SMALL: 'sm:px-6',
    LARGE: 'lg:px-8',
  },
  GRID_GAP: {
    MOBILE: 'gap-3',
    SMALL: 'sm:gap-4',
    MEDIUM: 'md:gap-5', 
    LARGE: 'lg:gap-6',
  },
  CARD_PADDING: {
    MOBILE: 'p-3',
    SMALL: 'sm:p-4',
    MEDIUM: 'md:p-5',
    LARGE: 'lg:p-6',
  },
} as const;

export const IMAGE_SIZES = {
  CAR_IMAGE: {
    MOBILE: 'w-[100px] h-[100px]',
    SMALL: 'sm:w-[110px] sm:h-[110px]',
    MEDIUM: 'md:w-[120px] md:h-[120px]',
  },
} as const;

export const TYPOGRAPHY = {
  CAR_NAME: {
    MOBILE: 'text-lg',
    SMALL: 'sm:text-xl',
  },
} as const;

export const LAYOUT = {
  GRID_COLUMNS: {
    MOBILE: 'grid-cols-1',
    SMALL: 'sm:grid-cols-2',
    LARGE: 'lg:grid-cols-3',
  },
  FLEX_DIRECTION: {
    ROW: 'flex-row',
    COLUMN: 'flex-col',
  },
} as const;

export const TRANSITIONS = {
  COLORS: 'transition-colors duration-200',
  ALL: 'transition-all duration-300',
} as const;

export const HOVER_EFFECTS = {
  YELLOW_TEXT: 'hover:text-yellow-400',
  YELLOW_BG: 'hover:bg-yellow-400 hover:text-white',
} as const;
