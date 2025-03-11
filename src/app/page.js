import Image from "next/image";
import "./globals.css";
import "./start.css"
import Tranzaction from "@/components/maintr";
import Header from "@/components/header-top";
export default function Home() {
  return (
    <main className="w-full h-auto ">
      <Header></Header>
      <Tranzaction></Tranzaction>
    </main>
  );
}
/* Navbar */
/* Abstract Design */

// position: absolute;
// left: 689px;
// top: -310px;

// transform: matrix(-1, 0, 0, 1, 0, 0);

// /* Inside auto layout */
// flex: none;
// order: 3;
// flex-grow: 0;
// z-index: 3;
