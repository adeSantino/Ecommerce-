import Image from "next/image";
import Hero from "./components/Hero";
import Suggestion from "./components/Suggestion";
import Highlight from "./components/Highlight";
import Store from "./components/Store";

export default function Home() {
  return (
    <div>
     <Hero />
     <Suggestion />
     <Highlight />
     <Store />
    </div>
    
  );
}
