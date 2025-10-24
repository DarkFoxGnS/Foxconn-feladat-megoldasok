import { Header } from '@/components/layout/Header'
import { Layout } from '@/components/layout/Layout'
import { PostsPage } from '@/pages/PostsPage'

import { AppProvider } from './utils/AppProvider'

const App = () => {
  return (
    <AppProvider>
      <Layout>
        <Header className="mb-8" />
        <PostsPage />
      </Layout>
    </AppProvider>
  )
}

export { App }
