import { HttpResponse } from 'msw'

const networkDelay = (): Promise<void> => {
  const delayTime = import.meta.env.TEST ? 200 : Math.floor(Math.random() * 700) + 300
  return new Promise((resolv) => setTimeout(resolv, delayTime))
}

const getErrorMessage = (error: unknown): string => {
  if (error instanceof Error) {
    return error.message
  }

  return 'Unexpected error occurred'
}

const errorResponse = (errorMessage: string, code?: number) => {
  return HttpResponse.json({ errorMessage }, { status: code || 500 })
}

const successResponse = (data: object, successMessage?: string) => {
  return HttpResponse.json({ ...data, successMessage })
}

export { networkDelay, getErrorMessage, errorResponse, successResponse }
