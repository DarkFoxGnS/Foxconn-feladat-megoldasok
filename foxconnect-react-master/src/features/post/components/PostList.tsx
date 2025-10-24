import { LoaderCircle } from 'lucide-react'

import type { Post } from '../postTypes'
import { PostCard } from './PostCard'

type PostListProps = {
  posts: Post[]
  isLoading: boolean
}

const PostList = ({ posts, isLoading }: PostListProps) => {
  return (
    <div className="space-y-4">
      {isLoading ? (
        <LoaderCircle className="animate-spin mx-auto" />
      ) : !posts.length ? (
        'No post found'
      ) : (
        posts.map((post) => <PostCard key={post.id} post={post} />)
      )}
    </div>
  )
}

export { PostList }
