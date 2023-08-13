export default function Home() {
  return (
    <div className="relative h-full flex items-center justify-center bg-gradient-to-r from-blue-600 to-teal-500">
      <div className="absolute h-96 w-96 left-1/2 top-1/2 bg-sky-700 rounded-full" />
      <div className="absolute h-96 w-96 right-1/2 bottom-1/2 bg-red-500 rounded-full" />


      <div className="z-10 bg-white/40 p-8 rounded-md shadow-md border border-white/60 backdrop-blur-[2px]">
        <h1 className="text-8xl font-semibold">Formulário</h1>
        <div className="h-px bg-white/60 mt-4" />
      </div>
    </div>
  )
}
