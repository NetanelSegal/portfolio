# 1. Foundations

This section sets the tone and logic for everything else. It ensures that any new component or page feels like it belongs to the same brand.

## Key Areas to Define

*   **Design Principles**: High-level goals (e.g., "Minimalist but functional," "Accessible by default").
*   **Visual Language**:
    *   **Color Palette**: Define Primary, secondary, semantic (success, error, warning), and neutral scales. Assign these to CSS variables (e.g., `--color-primary-500`).
    *   **Typography**: Font families, weights, and a clear scale for headings and body text. Use fluid typography or clear responsive steps.
    *   **Iconography**: The style (solid, outline, duotone), stroke weight, and library used (e.g., Lucide, Phosphor).
    *   **Spacing & Grid**: The "8pt grid" rules, margins, and layout behavior. Define `--space-1` to `--space-8` variables.
    *   **Layout & Breakpoints**: Standard screen sizes (Mobile: 375px, Tablet: 768px, Desktop: 1280px) and container max-widths.
    *   **Border Radii**: Define the "softness" of the UI (e.g., `--radius-sm`, `--radius-md`, `--radius-lg`, `--radius-full`).
    *   **Elevation & Shadows**: How depth is handled (z-index and shadow styles). Provide layered shadow definitions.
    *   **Motion & Transitions**: Standard easing curves (e.g., `ease-in-out`, `ease-out`) and durations (e.g., `--duration-fast: 150ms`, `--duration-base: 300ms`) to ensure motion feels cohesive.
    *   **Iconography**: Style (solid, outline, duotone), stroke weight, library (e.g. Lucide, Phosphor).
    *   **Graphic elements**: Borders & dividers (lines, rules), decorative shapes (cubes, blobs, accent blocks), background patterns (gradients, mesh).

    ## Output Example

    When generating foundations, provide the corresponding CSS:

    ```css
    :root {
      /* Colors */
      --color-primary-500: #3b82f6;
      --color-neutral-100: #f3f4f6;

      /* Typography */
      --font-sans: 'Inter', system-ui, sans-serif;
      --text-base: 1rem;

      /* Spacing & Layout */
      --space-4: 1rem;
      --space-8: 2rem;
      --container-max-width: 1200px;

      /* Radii */
      --radius-md: 0.5rem;

      /* Motion */
      --transition-base: 200ms ease-in-out;

      /* Shadows */
      --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    }
    ```