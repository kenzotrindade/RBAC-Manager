import { Ressources } from "../types/Ressource.js";
import { Perms } from "../types/Perm.js";
import { Roles } from "../types/Role.js";

export type UserPerm = {
  [key in Roles]?: Perms[];
};

export type RessourcePerm = {
  [key in Ressources]?: Perms[];
};

export type allPolicies = {
  [key in Roles]?: RessourcePerm;
};

export const policy: allPolicies = {
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
