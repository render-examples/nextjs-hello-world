import ChatHistory from "@/components/ChatHistory";
import ChatLine from "@/components/ChatLine";
import Input from "@/components/Input";
import NoteCard from "@/components/NoteCard";
import SimilarityList from "@/components/SimilarityList";

export default async function MentatMind() {
  return (
    <main className='flex flex-row w-screen h-screen'>
      {/* @ts-expect-error Server Component */}
      <SimilarityList />
      <div className='flex justify-between w-full border-l-2 h-screen' style={{ flexDirection: 'column' }}>
        {/* @ts-expect-error Server Component */}
        <NoteCard />
        <div className='w-full h-full border-t-2'>
          <div className='flex max-w-2xl mx-auto h-full' style={{ flexDirection: 'column' }}>
            {/* @ts-expect-error Server Component */}
            <ChatHistory>
              <ChatLine text={"text1"} />
              <ChatLine text={"text2"} />
              <ChatLine text={"text3"} />
            </ChatHistory>
            <Input />
          </div>
        </div>
      </div>
    </main>
  )
}
