'use client'

import { useEffect } from 'react'

// Unknown paths go back to the home page, as the old catch-all route did
export default function NotFound() {
  useEffect(() => {
    window.location.replace('/')
  }, [])

  return (
    <html lang="pt">
      <body />
    </html>
  )
}
