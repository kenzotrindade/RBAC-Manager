import { basicUser, basicModerator, basicAdmin } from "./data/mock.js";
import { Ressources } from "./types/Ressource.js";
import { Perms } from "./types/Perm.js";
import { can } from "./core/access.js";
const state = {
    users: [basicUser, basicModerator, basicAdmin],
    activeUser: basicAdmin,
};
// ... imports existants ...
function render() {
    const userList = document.getElementById("user-list");
    const grid = document.getElementById("matrix-grid");
    const userInfo = document.getElementById("current-user-info");
    userInfo.innerHTML = `
        <span style="font-weight: 700;">${state.activeUser.name}</span>
        <span style="margin-left: 12px; color: var(--text-muted); font-weight: 500;">${state.activeUser.role}</span>
    `;
    userList.innerHTML = state.users
        .map((u) => `
        <div class="user-card ${state.activeUser.id === u.id ? "active" : ""}" 
             onclick="window.switchUser(${u.id})">
            <div style="font-weight: 600;">${u.name}</div>
            <div style="font-size: 0.75rem; opacity: 0.7; margin-top: 4px;">${u.role}</div>
        </div>
    `)
        .join("");
    grid.innerHTML = Object.values(Ressources)
        .map((res) => `
        <div class="res-box">
            <h3 style="margin-bottom: 2rem; font-size: 1.1rem; letter-spacing: -0.02em;">${res}</h3>
            <div class="perms-stack">
                ${Object.values(Perms)
        .map((p) => {
        const ok = can(state.activeUser, res, p);
        return `
                        <div class="perm-row" style="display: flex; justify-content: space-between; align-items: center; padding: 1rem 0; border-top: 1px solid var(--border);">
                            <span style="font-size: 0.85rem; font-weight: 500; opacity: 0.8;">${p}</span>
                            <span class="status-badge ${ok ? "allowed" : "denied"}">
                                ${ok ? "Granted" : "Denied"}
                            </span>
                        </div>
                    `;
    })
        .join("")}
            </div>
        </div>
    `)
        .join("");
}
function initTheme() {
    const toggle = document.getElementById("theme-toggle");
    const body = document.documentElement;
    const saved = localStorage.getItem("theme") || "light";
    body.setAttribute("data-theme", saved);
    toggle.addEventListener("click", () => {
        const next = body.getAttribute("data-theme") === "light" ? "dark" : "light";
        body.setAttribute("data-theme", next);
        localStorage.setItem("theme", next);
    });
}
window.switchUser = (id) => {
    state.activeUser = state.users.find((u) => u.id === id);
    render();
};
initTheme();
render();
