---
name: web-ui-review
description: Review UI code for Web Interface Guidelines compliance. Use when asked to "review my UI", "check accessibility", "audit design", "review UX", or "check my site against best practices".
---

# Web Interface Guidelines Review

This skill performs a comprehensive audit of web interfaces based on the Vercel Web Interface Guidelines.

## How to Perform a Review

1.  **Fetch Guidelines:** Use `web_fetch` to retrieve the latest rules from:
    `https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md`
2.  **Read Target Files:** Identify and read the UI files (components, CSS, HTML) to be reviewed.
3.  **Analyze Compliance:** Check the code against the fetched rules.
4.  **Report Findings:**
    *   Use the `file:line` format for specific issues.
    *   Provide a brief explanation of the violation.
    *   Suggest a concrete fix.

## Core Review Areas
*   **Accessibility (A11y):** ARIA labels, focus states, color contrast, semantic HTML.
*   **Interaction Design:** Hover/active states, loading indicators, touch targets.
*   **Visual Consistency:** Spacing (padding/margin), typography scales, color usage.
*   **Performance:** Image optimization, layout shifts (CLS), unnecessary DOM depth.

If no specific files are provided, ask the user: "Which files or components would you like me to review against the Web Interface Guidelines?"
