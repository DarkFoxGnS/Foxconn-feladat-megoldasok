import type { ComponentProps } from 'react'

const Header = (props: ComponentProps<'header'>) => {
  return (
    <header {...props}>
      <h1>Welcome to FoxConnect 🦊</h1>
      <h3>
        FoxConnect is a simple space to share what's on your mind. No likes, no followers, just clean and quiet posting. Drop your thoughts,
        share a vibe, and scroll in peace — fast, minimal, and distraction-free.
      </h3>
    </header>
  )
}

export { Header }
