import Search from "@/components/ui/search";

export default function SearchPage() {
  return (
    <main className="min-h-screen flex flex-col items-center">

      <section className="min-w-full">
        <Search showResults={true}></Search>
      </section>

    </main>
  )
}
