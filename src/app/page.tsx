import Image from "next/image";
import { Greet } from "./components/Greet";
import { Counter } from "./components/Counter";

export default function Home() {
  return (
    <>
      <div> Main Page </div>
      <Greet />
      <Counter />
    </>
  );
}
