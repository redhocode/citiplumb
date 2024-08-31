import Image from "next/image";
import pp from "../../public/image/PP.jpg"
export default function Home() {
  return (
   <><h1>Hello world</h1><Image
      src={pp}
      alt="logo"
      className="object-cover"
      width={200}
      height={200} /></>
  );
}
