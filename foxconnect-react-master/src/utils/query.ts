/* eslint-disable @typescript-eslint/no-explicit-any */
import { type DefaultOptions, type UseMutationOptions } from '@tanstack/react-query'

const queryConfig = {
  queries: {
    refetchOnWindowFocus: false,
    retry: false,
    staleTime: 1000 * 60,
  },
} satisfies DefaultOptions

type ApiFnReturnType<FnType extends (...args: any[]) => Promise<any>> = Awaited<ReturnType<FnType>>

type QueryConfig<T extends (...args: any[]) => any> = Omit<ReturnType<T>, 'queryKey' | 'queryFn'>

type MutationConfig<MutationFnType extends (...args: any[]) => Promise<any> | any> = UseMutationOptions<
  ApiFnReturnType<MutationFnType>,
  Error,
  Parameters<MutationFnType>[0]
>

export type { ApiFnReturnType, QueryConfig, MutationConfig }
export { queryConfig }
