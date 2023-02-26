import { UserProvider } from '@auth0/nextjs-auth0/client';

import 'src/css/globals.css'
import Header from 'src/components/Header'
import { getUser } from 'src/utils/auth'

export const metadata = {
  title: 'Mentat',
  description: 'Mentat',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const user = await getUser()

  return (
    <html lang="en">
      <UserProvider>
        <body>
          <Header user={user} />
          {children}
        </body>
      </UserProvider>
    </html>
  )
}
