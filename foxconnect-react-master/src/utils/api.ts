import axios from 'axios'

import { env } from '@/config/env'

const apiClient = axios.create({
  baseURL: env.API_URL,
})

type QueryResponse<T> = {
  data: T
} & ({ successMessage: string; errorMessage: never } | { successMessage: never; errorMessage: string })

export type { QueryResponse }
export { apiClient }
