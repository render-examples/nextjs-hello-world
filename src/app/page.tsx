import MentatMind from "@/components/MentatMind"
import Header from "@/components/Header"
import { getUser } from "@/utils/auth"
import { Suspense } from "react"

export default async function Home() {
  const user = await getUser()

  return (
    <>
      <Header user={user} />
			{user.email !== 'anonymous' 
			?
			  // @ts-expect-error Server Component
        <MentatMind />
        : null}
    </>
  )
}
