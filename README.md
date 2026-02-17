<div align="center">

# 🛡️ RBAC Manager

![TypeScript](https://img.shields.io/badge/Language-TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Security](https://img.shields.io/badge/Focus-Security-red?style=for-the-badge)

<p>
  <strong>A modern, type-safe Role-Based Access Control engine.</strong><br>
  Implementing robust security patterns and dynamic permission management.
</p>

</div>

---

## 📋 About The Project

This repository hosts **RBAC-Manager**, a professional-grade access control system developed as part of the **Coda** curriculum. The project focuses on the implementation of the "Role-Based Access Control" (RBAC) model, ensuring that users only have access to resources necessary for their specific roles.

The application features a centralized security policy and a modern dashboard to visualize and simulate permission shifts in real-time.

> **Specific Goal:** Building a highly secure and scalable permission engine with a focus on "Deny by Default" principles and strict type safety.

---

## ⚙️ Key Concepts Mastered

Designing a security-first application requires a deep understanding of architectural patterns. This project demonstrates my mastery of:

* **🔐 RBAC Architecture:** Implementing a system where permissions are assigned to roles, and roles are assigned to users.
* **🛡️ Type-Safe Permissions:** Using TypeScript Enums and strict interfaces to eliminate invalid permission checks at compile-time.
* **🎨 Modern UI/UX:** Crafting a premium dashboard with CSS variables, backdrop-filters, and a hybrid dark mode.
* **🔄 Real-time Simulation:** Developing logic to hot-swap user roles and instantly visualize changes in the permission matrix.

---

## 🛠️ Tech Stack

| Tool | Usage |
| :--- | :--- |
| **TypeScript** | Core logic, Enums, and strict type definitions. |
| **CSS (Modern)** | Advanced styling with Flexbox, Grid, and Variables. |
| **Node.js / ts-node** | Environment for backend logic and automated testing. |
| **ES Modules** | Modern modular structure for both browser and server. |

---

## 🚀 How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/kenzotrindade/RBAC-Manager.git
2. Install dependencies:
   ```bash
   npm install
3. Run the logic tests:
   ```bash
   npx ts-node src/index.ts
4. Launch the dashboard:
   ```bash
   Use a local server (like Live Server in VS Code) to open index.html.
