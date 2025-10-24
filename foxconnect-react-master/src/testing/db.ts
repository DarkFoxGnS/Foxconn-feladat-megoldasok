import { factory } from '@mswjs/data'
import type { InitialValues, ModelDictionary } from '@mswjs/data/lib/glossary'

import { createPost } from './mocks/posts/postGenerator'
import { type Model, models } from './models'

const DB_FILE = 'mocked-db.json'
const DB_KEY = 'foxconnect-reactmocked-msw-db'

const db = factory(models)

const loadDb = async () => {
  // If we are running in a Node.js environment
  if (typeof window === 'undefined') {
    const { readFile, writeFile } = await import('fs/promises')
    try {
      const data = await readFile(DB_FILE, 'utf8')
      return JSON.parse(data)
    } catch (error) {
      if (error && typeof error === 'object' && 'code' in error && error?.code === 'ENOENT') {
        const emptyDB = {}
        await writeFile(DB_FILE, JSON.stringify(emptyDB, null, 2))
        return emptyDB
      } else {
        console.error('Error loading mocked DB:', error)
        return null
      }
    }
  }
  // If we are running in a browser environment
  return Object.assign(JSON.parse(window.localStorage.getItem(DB_KEY) || '{}'))
}

const storeDb = async (data: string) => {
  // If we are running in a Node.js environment
  if (typeof window === 'undefined') {
    const { writeFile } = await import('fs/promises')
    await writeFile(DB_FILE, data)
  } else {
    // If we are running in a browser environment
    window.localStorage.setItem(DB_KEY, data)
  }
}

const persistDb = async (model: Model) => {
  if (process.env.NODE_ENV === 'test') return
  const data = await loadDb()
  data[model] = db[model].getAll()
  await storeDb(JSON.stringify(data))
}

const initializeDb = async () => {
  const database = await loadDb()
  Object.entries(db).forEach(([key, model]) => {
    const dataEntres = database[key]
    if (dataEntres) {
      dataEntres?.forEach((entry: InitialValues<ModelDictionary, KeyType>) => {
        model.create(entry)
      })
    }
  })

  if (Object.entries(database).length === 0) {
    for (let index = 0; index < 20; index++) {
      createPost()
    }
    await persistDb('post')
  }
}

const resetDb = () => {
  window.localStorage.clear()
}

export { db, loadDb, storeDb, persistDb, initializeDb, resetDb }
