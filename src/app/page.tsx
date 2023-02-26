import Header from 'src/components/Header'
import { getUser } from 'src/utils/auth'

export default async function Home() {
  const user = await getUser()

  return (
    <>
      <Header user={user} />
      <main>
      </main>
    </>
  )
}
