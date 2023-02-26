import { UserProvider } from '@auth0/nextjs-auth0/client';

import 'src/css/globals.css'

export const metadata = {
  title: 'Mentat',
  description: 'Mentat',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <UserProvider>
        <body>
          {children}
        </body>
      </UserProvider>
    </html>
  )
}
