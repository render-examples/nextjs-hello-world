
export default async function NoteCard() {
  return (
    <div className="card bg-[#F4F4F4] h-96 m-8 mx-auto" style={{ width: 800, borderRadius: 0 }}>
      <div className="card-body">
        <h2 className="card-title text-[#333333] font-bold text-lg">Title</h2>
        <p className="text-[#333333]">body text</p>
      </div>
    </div>
  );
}
