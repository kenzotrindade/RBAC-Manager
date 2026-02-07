import { User } from "../types/User.js";
import { Ressources } from "../types/Ressource.js";
import { Perms } from "../types/Perm.js";
import { policy } from "./policy.js";

export function can(user: User, ressource: Ressources, perm: Perms): boolean {
  const userRole = user.role;
  const roleRule = policy[userRole];
  if (roleRule) {
    const ressourceRule = roleRule[ressource];
    return ressourceRule?.includes(perm) ?? false;
  }
  return false;
}
