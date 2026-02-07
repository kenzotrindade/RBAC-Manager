import { Roles } from "./Role.js";

export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
  role: Roles.ADMIN | Roles.MODERATOR | Roles.USER;
};

type PublicUser<T> = {
  [key in keyof T as Exclude<key, "password">]: T[key];
};

type UserUpdate<T> = {
  [key in keyof T]+?: T[key];
};

type UserCredentials<T> = {
  [key in keyof T as Extract<key, "email" | "password">]: T[key];
};
