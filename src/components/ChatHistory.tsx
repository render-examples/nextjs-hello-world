export default async function ChatHistory({ children }: { children: React.ReactNode }) {
  return (
    <div className='w-full overflow-y-auto mt-4' style={{ flexGrow: 1 }}>
      {children}
    </div>
  )
}
