import Image from "next/image";

import Another from "./component/another";
import Formula from "./comp/formula";
import Heroo from "./comp/heroo";
import Solution from "./comp/solution";
import Supply from "./comp/supply";

export default function Home() {
  return (
    <main className="bg-[#F2F0F1] ">
      <Heroo />
      <Formula />
      <Solution />
      <Supply />

      <Footer />
    </main>
  );
}
