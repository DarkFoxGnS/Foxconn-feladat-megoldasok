import { useMutation, useQueryClient } from '@tanstack/react-query'

import { apiClient } from '@/utils/api'
import type { MutationConfig } from '@/utils/query'

import type { Post } from '../postTypes'
import { getPostsOptions } from './getPosts'

const deletePost = async (id: string): Promise<Post> => {
  const response = await apiClient.delete('/posts/'+id)
  return response.data
}

type UseDeletePostOptions = {
  mutationConfig?: MutationConfig<typeof deletePost>
}

const useDeletePost = ({ mutationConfig }: UseDeletePostOptions = {}) => {
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
    mutationFn: deletePost,
  })
}

export {deletePost, useDeletePost }
