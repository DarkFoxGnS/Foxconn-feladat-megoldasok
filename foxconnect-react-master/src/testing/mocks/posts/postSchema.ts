import { z } from 'zod'

const postSchema = z.object({
  title: z
    .string()
    .nonempty('Title is required')
    .min(3, { message: 'Title must be at least 3 characters long' })
    .max(100, { message: 'Title must be less than 100 characters' }),
  body: z
    .string()
    .nonempty('Body is required')
    .min(3, { message: 'Body must be at least 3 characters long' })
    .max(1000, { message: 'Body must be less than 1000 characters' }),
})

export type PostSchema = z.infer<typeof postSchema>
export { postSchema }
