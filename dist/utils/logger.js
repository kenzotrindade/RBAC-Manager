export function logAccess(user, ressource, perm, isPerm) {
    if (isPerm) {
        console.log(`[${user.role}] - Action: [${perm}] on [${ressource}] -> ALLOWED`);
    }
    else {
        console.log(`[${user.role}] - Action: [${perm}] on [${ressource}] -> DENIED`);
    }
}
