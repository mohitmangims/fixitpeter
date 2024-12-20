import Image from "next/image";
import Hello from "./Components/SampleComponent/Hello";
import Counter from "./Components/Counter/Counter";

export default function Home() {
  return (
    <div className="grid items-center justify-items-center ">
      <Hello name="World" />
      <Image
        className="dark:invert"
        src="/vercel.svg"
        alt="Vercel logomark"
        width={20}
        height={20}
      />
      <Counter/>
    </div>
  );
}
