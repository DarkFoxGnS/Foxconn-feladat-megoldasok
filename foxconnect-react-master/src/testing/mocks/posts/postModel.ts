import { primaryKey } from '@mswjs/data'
import type { ModelDefinition } from '@mswjs/data/lib/glossary'
import { randAnimal, randColor } from '@ngneat/falso'
import { nanoid } from 'nanoid'

const postModel: ModelDefinition = {
  id: primaryKey(nanoid),
  title: String,
  body: String,
  createdAt: Date.now,
  createdBy: () => `${randColor()} ${randAnimal()}`,
}

type PostEntity = {
  id: string
  title: string
  body: string
  createdAt: number
  createdBy: string
}

export type { PostEntity }
export { postModel }
