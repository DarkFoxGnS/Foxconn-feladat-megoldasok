import { http } from 'msw'

import { env } from '@/config/env'
import { db, persistDb } from '@/testing/db'
import { errorResponse, getErrorMessage, networkDelay, successResponse } from '@/testing/utils'

import { postSchema } from './postSchema'

const createPost = http.post(`${env.API_URL}/posts`, async ({ request }) => {
  await networkDelay()

  try {
    const input = await request.json()
    const { data, error } = postSchema.safeParse(input)
    if (error) {
      return errorResponse(error.message, 400)
    }

    const result = db.post.create(data)
    await persistDb('post')
    return successResponse({ data: result }, 'Post created successfully')
  } catch (error) {
    return errorResponse(getErrorMessage(error), 500)
  }
})

const getPosts = http.get(`${env.API_URL}/posts`, async () => {
  await networkDelay()

  try {
    const result = db.post.findMany({
      // @ts-expect-error: mock DB doesn't support typed orderBy
      orderBy: {
        createdAt: 'desc',
      },
    })

    return successResponse({
      data: result,
    })
  } catch (error) {
    return errorResponse(getErrorMessage(error), 500)
  }
})

const updatePost = http.patch(`${env.API_URL}/posts/:id`, async ({ request, params }) => {
  await networkDelay()

  try {
    const postId = params.id
    const post = db.post.findFirst({
      where: {
        id: {
          equals: postId,
        },
      },
    })

    if (!post) {
      return errorResponse('Post not found', 404)
    }

    const input = await request.json()
    const { data, error } = postSchema.safeParse(input)
    if (error) {
      return errorResponse(error.message, 400)
    }

    const updatedPost = db.post.update({
      where: {
        id: {
          equals: postId,
        },
      },
      data,
    })

    await persistDb('post')

    return successResponse({ data: updatedPost }, 'Post updated successfully')
  } catch (error) {
    return errorResponse(getErrorMessage(error), 500)
  }
})

const deletePost = http.delete(`${env.API_URL}/posts/:id`, async ({ params }) => {
  await networkDelay()

  try {
    const postId = params.id
    const post = db.post.findFirst({
      where: {
        id: {
          equals: postId,
        },
      },
    })
    if (!post) {
      return errorResponse('Post not found', 404)
    }

    db.post.delete({
      where: {
        id: {
          equals: postId,
        },
      },
    })

    await persistDb('post')

    return successResponse({ data: post }, 'Post deleted successfully')
  } catch (error) {
    return errorResponse(getErrorMessage(error), 500)
  }
})

export const postHandlers = [createPost, getPosts, updatePost, deletePost]
