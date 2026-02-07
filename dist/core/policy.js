import { Ressources } from "../types/Ressource.js";
import { Perms } from "../types/Perm.js";
import { Roles } from "../types/Role.js";
export const policy = {
    [Roles.ADMIN]: {
        [Ressources.ACCOUNT]: [
            Perms.READ,
            Perms.WRITE,
            Perms.DELETE,
            Perms.EXECUTE,
        ],
        [Ressources.DOCUMENT]: [
            Perms.READ,
            Perms.WRITE,
            Perms.DELETE,
            Perms.EXECUTE,
        ],
        [Ressources.SERVER]: [Perms.READ, Perms.WRITE, Perms.DELETE, Perms.EXECUTE],
    },
    [Roles.MODERATOR]: {
        [Ressources.ACCOUNT]: [Perms.READ, Perms.WRITE, Perms.DELETE],
        [Ressources.DOCUMENT]: [Perms.READ, Perms.WRITE, Perms.DELETE],
        [Ressources.SERVER]: [Perms.READ, Perms.WRITE, Perms.DELETE],
    },
    [Roles.USER]: {
        [Ressources.ACCOUNT]: [Perms.READ],
        [Ressources.DOCUMENT]: [Perms.READ],
        [Ressources.SERVER]: [Perms.READ],
    },
};
