import { useMutation, useQueryClient } from '@tanstack/react-query'
import { z } from 'zod'

import { apiClient } from '@/utils/api'
import type { MutationConfig } from '@/utils/query'

import type { Post } from '../postTypes'
import { getPostsOptions } from './getPosts'

const editPostSchema = z.object({
  id:z.string(),
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

type EditPostSchema = z.infer<typeof editPostSchema>

const editPost = async (input: EditPostSchema): Promise<Post> => {
  const response = await apiClient.patch('/posts/'+input.id, input)
  return response.data
}

type UseEditPostOptions = {
  mutationConfig?: MutationConfig<typeof editPost>
}

const useEditPost = ({ mutationConfig }: UseEditPostOptions = {}) => {
  const queryClient = useQueryClient()

  const { onSuccess, ...restConfig } = mutationConfig || {}

  return useMutation({
    onSuccess: (data, ...args) => {
      queryClient.invalidateQueries({
        queryKey: getPostsOptions().queryKey,
      })

      onSuccess?.(data, ...args)
    },
    ...restConfig,
    mutationFn: editPost,
  })
}

export type { EditPostSchema }
export { editPostSchema, editPost, useEditPost }
