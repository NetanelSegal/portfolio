# Designer Workflow & Must-Do Steps

Follow this iterative process for every part of the design system (Foundations, Components, Patterns).

## The Research-Driven Workbench Flow
**CRITICAL RULE: This skill uses a Research-First and Preview-Based Approval process. You MUST NOT proceed to the next step or update the main Workbench file until the user has approved a design from the options provided.**

For each design step:
1.  **Research (Mandatory)**: Before proposing anything, use `google_web_search` or `web_fetch` to research current trends, accessibility standards, and best practices for the specific task (e.g., "modern typography scales 2024", "accessible button states", "color palettes for [Brand Vibe]").
2.  **Option Generation**: Create **3-5 distinct options** based on your research and the brand keywords.
3.  **Verification**: Verify the "Must-Do" checklist (see below).
4.  **HTML Preview & STOP**: 
    *   Create a temporary **`preview.html`** file (using the same base styles as the system) to display all 3-5 options side-by-side.
    *   Present the research findings and the link to `preview.html` to the user.
    *   **YOU MUST END YOUR TURN HERE.** Do not update the main Workbench yet.
5.  **Refinement & Integration (New Turn)**: 
    *   **ONLY** after the user provides feedback or a selection, finalize the choice.
    *   **Main Workbench Update**: Inject the approved styles/components into the main `index.html` and `style.css`.
6.  **Confirmation**: Show the updated Workbench result and move to the next logical step selection (Step 1).

## Design System Scope (Beyond Colors & Fonts)

A design system includes:

*   **Foundations**: Colors, typography, spacing, radius, motion, elevation/shadows, iconography
*   **Graphic elements**: Borders & dividers (lines, rules), decorative shapes (cubes, blobs, accent blocks), background patterns (gradients, mesh)
*   **Component styling**: Border styles (solid, dashed, accent), shadow/elevation per component
*   **Components**: Buttons, inputs, cards, tabs, chips, stats, avatar, badge, dropdown, modal, etc.
*   **Patterns**: Forms, empty states, loading, navigation

**Progress tracking**: Update the Progress Tracker in `docs/05-Design/design-system.md` when completing items.

**Preview**: Must show both (1) personal website/portfolio example and (2) dashboard components.

## Must-Do Checklist (Designer's Standard)
*   **Contrast Check**: Verify all text/background pairs pass WCAG 2.1 AA (4.5:1 ratio).
*   **Accessibility (a11y)**: Ensure focus states are visible and semantic HTML is used.
*   **Spacing Logic**: All dimensions must align with the 4px/8px grid.
*   **Typography Hierarchy**: Verify distinct weights and sizes for clear information architecture.
*   **Component Anatomy**: Ensure all interactive states (Hover, Focus, Active, Disabled) are defined.
*   **Hit Targets**: Interactive elements must have a minimum hit area of 44x44px.
