import type { ReactNode } from 'react'

const Layout = ({ children }: { children: ReactNode }) => {
  return <div className="max-w-2xl mx-auto py-8">{children}</div>
}

export { Layout }
