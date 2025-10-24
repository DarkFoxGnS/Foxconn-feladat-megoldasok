import { queryOptions, useQuery } from '@tanstack/react-query'

import { apiClient, type QueryResponse } from '@/utils/api'
import type { QueryConfig } from '@/utils/query'

import type { Post } from '../postTypes'

const getPosts = async (): Promise<QueryResponse<Post[]>> => {
  const response = await apiClient.get('/posts')
  return response.data
}

const getPostsOptions = () => {
  return queryOptions({
    queryKey: ['posts'],
    queryFn: () => getPosts(),
  })
}

type UsePostsProps = {
  queryConfig?: QueryConfig<typeof getPostsOptions>
}

const usePosts = ({ queryConfig }: UsePostsProps = {}) => {
  return useQuery({
    ...getPostsOptions(),
    ...queryConfig,
  })
}

export { getPosts, getPostsOptions, usePosts }
