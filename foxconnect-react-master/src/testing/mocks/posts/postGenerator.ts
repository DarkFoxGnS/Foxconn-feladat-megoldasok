import { randPost } from '@ngneat/falso'

import { db } from '@/testing/db'

import type { CreatePostSchema } from './postSchema'

const generatPost = () => {
  const fakePost = randPost()
  return {
    title: fakePost.title,
    body: fakePost.body,
  }
}

const createPost = async (userProperties?: CreatePostSchema) => {
  const postInput = { ...generatPost(), ...userProperties }
  await db.post.create(postInput)
  return postInput
}

export { createPost }
