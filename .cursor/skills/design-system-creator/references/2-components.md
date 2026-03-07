# 2. The Component Library

This is the meat of the document. Each component should be documented with its visual states and code implementation.

## Hierarchy

*   **Atomic Components**: Buttons, inputs, checkboxes, toggles, radio buttons, select/dropdowns, badges, avatars.
*   **Molecules/Organisms**: Navigation bars, tabs, pagination, breadcrumbs, cards, modals, drawers, tooltips, popovers, alert banners, progress bars, skeleton loaders, data tables.

## Requirements per Component

Every component defined MUST include:
1.  **Anatomy**: A breakdown of the component’s parts (e.g., "This button consists of an icon-left, a label, and a container").
2.  **States**: Every interactive component needs to show its:
    *   `Default`
    *   `Hover`
    *   `Active` / `Pressed`
    *   `Focus` (visible focus rings are mandatory for accessibility)
    *   `Disabled`

## Output Example

When providing a component, provide both HTML and CSS relying on foundation variables:

```html
<button class="ds-btn ds-btn-primary">
  <span>Submit</span>
</button>
```

```css
.ds-btn {
  padding: var(--space-2) var(--space-4);
  font-family: var(--font-sans);
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all 0.2s ease;
}

.ds-btn-primary {
  background: var(--color-primary-500);
  color: white;
  border: none;
}

.ds-btn-primary:hover {
  background: var(--color-primary-600);
}

.ds-btn-primary:focus-visible {
  outline: 2px solid var(--color-primary-500);
  outline-offset: 2px;
}

.ds-btn-primary:disabled {
  background: var(--color-neutral-300);
  cursor: not-allowed;
}
```