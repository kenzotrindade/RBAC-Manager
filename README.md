RBAC Manager

A modern, type-safe Role-Based Access Control (RBAC) engine and dashboard. Built with TypeScript, this project demonstrates a robust permission management system with a high-end, 2026-inspired minimalist interface.
✨ Key Features

    Type-Safe Engine: Built with TypeScript Enums and strictly typed User interfaces.

    Dynamic Policy: Centralized security policy allowing for instant permission updates.

    Modern Dashboard: A premium, "Apple-esque" UI with smooth transitions and a clean aesthetic.

    Hybrid Dark Mode: Persistent theme switching using CSS variables and LocalStorage.

    Real-time Simulation: Hot-swapping users to visualize permission shifts across the system matrix.

🚀 Technical Stack

    Logic: TypeScript (Strict Mode)

    Styling: Modern CSS (Variables, Backdrop-filters, Grid/Flexbox)

    Build: Node.js & ts-node for backend testing

    Icons: Optimized inline SVGs for zero-latency rendering

⚙️ How to Run

1. Installation

Clone the repo and install dependencies:
Bash

npm install

2. Run Backend Tests

To test the RBAC logic directly in your terminal:
Bash

npx ts-node src/index.ts

3. Run the Dashboard

Since this project uses ES Modules, serve it via a local web server (like VS Code Live Server) to avoid CORS issues:

    Open index.html.

    Click Go Live or run npx serve ..

🛡 Security Logic

The system operates on a "Deny by Default" principle. Access is granted only if:

    The user's role exists in the policy.

    The specific resource is defined for that role.

    The requested permission is included in the resource's permission array.
