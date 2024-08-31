import Image from "next/image";

export default function Home() {
  return (
   <><h1>Hello world</h1><Image
      src="/public/image/logo-cp.png"
      alt="logo"
      className="h-10 w-10"
      width={200}
      height={200} /></>
  );
}
