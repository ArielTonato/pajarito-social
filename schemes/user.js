import zod from 'zod';

const UserScheme = zod.object({
    username: zod.string({
        message: 'El nombre de usuario es requerido',
    }).min(3, {
        message: 'El nombre de usuario debe tener al menos 3 caracteres',
    }).max(50,{
        message: 'El nombre de usuario debe tener menos de 50 caracteres',
    }).trim(),
    email: zod.string({
        message: 'El email es requerido',
        invalid_type_error: 'Debe ser un email valido',
    }).email({
        message: 'El email no es valido',
    }).trim(),
    password: zod.string().min(6, {
        message: 'La contraseña debe tener al menos 6 caracteres',
    }).trim(),
});

export function validateUser(user) {
    return UserScheme.safeParse(user);
}

export function validatePartialUser(user) {
    return UserScheme.partial().safeParse(user);
}