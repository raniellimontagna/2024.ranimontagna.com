import { ReactNode } from 'react'

// The document lives in [locale]/layout.tsx. This layout only exists so the
// redirect at / and the 404 page have a root layout above them.
export default function RootLayout({ children }: { children: ReactNode }) {
  return children
}
