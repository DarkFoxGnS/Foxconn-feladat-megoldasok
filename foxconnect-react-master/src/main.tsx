import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { enableMocking } from '@/testing/index.ts'

import { App } from './App.tsx'

import '@/assets/index.css'

const root = document.getElementById('root')
if (!root) throw new Error('No root element found')

enableMocking().then(() => {
  createRoot(root).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
})
