import { postModel } from './mocks/posts/postModel'

const models = {
  post: postModel,
}

type Model = keyof typeof models

export type { Model }
export { models }
