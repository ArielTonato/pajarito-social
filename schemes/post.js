import zod from 'zod';

const postSchema = zod.object({
    email_user: zod.string().email(),
    post: zod.string().min(1).max(255,{
        message: 'El post debe tener entre 1 y 255 caracteres',
    }),
});

export function validatePost(post){
    return postSchema.safeParse(post);
}