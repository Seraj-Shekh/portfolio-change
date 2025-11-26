# Portfolio Website - Clean Code Structure

## Overview
The codebase has been refactored to separate styling from components for better maintainability and cleaner code.

## File Structure

```
/app/frontend/src/
├── components/
│   ├── Navbar.js + Navbar.css
│   ├── Hero.js + Hero.css
│   ├── Services.js + Services.css
│   ├── Skills.js + Skills.css
│   ├── Projects.js + Projects.css
│   ├── Education.js + Education.css
│   ├── Contact.js + Contact.css
│   ├── Blog.js + Blog.css
│   └── Footer.js + Footer.css
├── pages/
│   ├── Home.js
│   ├── BlogList.js
│   └── BlogPost.js
├── context/
│   └── ThemeContext.js
├── data/
│   └── portfolio.js
└── App.js + App.css
```

## CSS Organization

### Each component has its own CSS file with:
- Semantic class names (e.g., `.hero-section`, `.hero-title`, `.hero-description`)
- Tailwind's `@apply` directive for utility composition
- Consistent naming conventions
- Easy to maintain and modify

### Example Structure:
```css
/* Component.css */
.component-section {
  @apply py-20 px-4 bg-white dark:bg-gray-900;
}

.component-title {
  @apply text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4;
}
```

## Benefits of This Structure

1. **Separation of Concerns**: Styles are separate from logic
2. **Maintainability**: Easy to find and modify styles
3. **Reusability**: CSS classes can be reused across components
4. **Readability**: JSX is cleaner without long className strings
5. **Performance**: No change in performance, still using Tailwind
6. **Consistency**: Naming conventions make code predictable

## Key Features

- ✅ Clean, semantic CSS class names
- ✅ Tailwind utilities via @apply
- ✅ Dark mode support
- ✅ Responsive design
- ✅ Consistent naming patterns
- ✅ Easy to maintain and extend

## How to Modify Styles

1. Find the component you want to modify (e.g., `Hero.js`)
2. Open the corresponding CSS file (`Hero.css`)
3. Modify the class using Tailwind utilities with @apply
4. Changes will hot-reload automatically

## Naming Conventions

- Section containers: `.{component}-section`
- Main containers: `.{component}-container`
- Headers: `.{component}-header`
- Titles: `.{component}-title`
- Descriptions: `.{component}-description`
- Sub-elements: `.{component}-{element}-{modifier}`

Example: `.hero-avatar-circle`, `.project-image-wrapper`
