import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {Button} from '@/components/ui/button'
import { Trash2} from 'lucide-react'
import {EditPostDialog} from '@/features/post/components/EditPostDialog'
import {DeletePostDialog} from '@/features/post/components/DeletePostDialog'

import { useDeletePost } from '../api/deletePost'
import { useEditPost } from '../api/editPost'
import type { Post } from '../postTypes'

type PostCardProps = {
  post: Post
}

const PostCard = ({ post }: PostCardProps) => {
	
	const deleteFunction = useDeletePost()
	const editFunction = useEditPost()
	
  return (
    <Card>
      <CardHeader>
        <CardTitle>{post.title}</CardTitle>
        <CardDescription>
          {post.createdBy} - {new Date(post.createdAt).toLocaleString()}
        </CardDescription>
      </CardHeader>
      <CardContent className="text-justify">{post.body}</CardContent>
	  <div className = "inline-flex justify-end gap-2 px-2">
		<EditPostDialog handleSubmit = {editFunction.mutateAsync} post={post} ></EditPostDialog>
		<DeletePostDialog handleSubmit = {deleteFunction.mutateAsync} post={post} ></DeletePostDialog>
	  </div>
    </Card>
  )
}

export { PostCard }
