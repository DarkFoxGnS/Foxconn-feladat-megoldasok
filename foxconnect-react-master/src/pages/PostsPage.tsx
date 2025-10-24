import { useCreatePost } from '@/features/post/api/createPost'
import { usePosts } from '@/features/post/api/getPosts'
import { CreatePostDialog } from '@/features/post/components/CreatePostDialog'
import { PostList } from '@/features/post/components/PostList'

const PostsPage = () => {
  const { data: response, isFetching } = usePosts()

  const createPost = useCreatePost()

  return (
    <>
      <div className="flex justify-between items-end mb-2">
        <h5>Posts:</h5>
        <CreatePostDialog handleSubmit={createPost.mutateAsync} />
      </div>
      <PostList posts={response?.data || []} isLoading={isFetching} />
    </>
  )
}

export { PostsPage }
