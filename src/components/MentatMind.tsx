import SimularityList from '@/components/SimularityList'
import NoteCard from '@/components/NoteCard'
import ChatHistory from '@/components/ChatHistory'
import Input from '@/components/Input'

export default async function MentatMind() {
  return (
    <div>
      {/* @ts-expect-error Server Component */}
      <SimularityList />
      <div>
        {/* @ts-expect-error Server Component */}
        <NoteCard />
        {/* @ts-expect-error Server Component */}
        <ChatHistory />
        <Input />
      </div>
    </div>
  )
}
