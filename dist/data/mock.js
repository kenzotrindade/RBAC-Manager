import { Roles } from "../types/Role.js";
export const basicUser = {
    id: 1,
    name: "User",
    email: "user@gmail.com",
    password: "myuserpassword",
    role: Roles.USER,
};
export const basicModerator = {
    id: 2,
    name: "Moderator",
    email: "moderator@gmail.com",
    password: "mymoderatorpassword",
    role: Roles.MODERATOR,
};
export const basicAdmin = {
    id: 3,
    name: "Admin",
    email: "admin@gmail.com",
    password: "myadminpassword",
    role: Roles.ADMIN,
};
