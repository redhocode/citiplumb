import Image from "next/image";
import logo from "./logo-cp.png"
export const Logo = () => {
  return (
<div className="flex flex-row">
      <Image
        src={logo}
        alt="logo"
        width={300}
        height={300}
        />
        </div>
  );
};
