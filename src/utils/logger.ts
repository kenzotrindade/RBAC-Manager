import { User } from "../types/User.js";
import { Ressources } from "../types/Ressource.js";
import { Perms } from "../types/Perm.js";

export function logAccess(
  user: User,
  ressource: Ressources,
  perm: Perms,
  isPerm: boolean): void {
  if (isPerm) {
    console.log(
      `[${user.role}] - Action: [${perm}] on [${ressource}] -> ALLOWED`,
    );
  } else {
    console.log(
      `[${user.role}] - Action: [${perm}] on [${ressource}] -> DENIED`,
    );
  }
}