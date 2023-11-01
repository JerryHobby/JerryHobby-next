import {z} from 'zod';

const schema = z.object(
    {
        name: z.string().min(3),
        email: z.string().email(),
        password: z.string().min(10).optional(),
    }
)

export default schema;

