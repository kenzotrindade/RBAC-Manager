import { policy } from "./policy.js";
export function can(user, ressource, perm) {
    const userRole = user.role;
    const roleRule = policy[userRole];
    if (roleRule) {
        const ressourceRule = roleRule[ressource];
        return ressourceRule?.includes(perm) ?? false;
    }
    return false;
}
