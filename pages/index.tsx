import Slice from "@/components/Slice";

export default function Home() {
  return  <main className="bg-primary h-screen relative overflow-hidden">
    
    <h1 className="fon-">Abdul Rahman Rehmtulla</h1>



      <section className="flex absolute  bottom-0 left-0 right-0 w-2/3 mx-auto">
        <Slice active={false} />
        <Slice active={false} />
        <Slice active={false} />
        <Slice active={false} />
        <Slice active={false} />

      </section>
  </main>
}