import Image from "next/image";
import Hero from "../components/Hero.js";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto overflow-hidden px-4 sm:px-8">
      <div className="max-w-7xl w-full">
        <Hero />
      </div>
    </main>
  );
}
