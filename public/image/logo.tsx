import Image from "next/image";

export const Logo = () => {
  return (
    <div className="flex flex-row">
      <Image
        src="/logo-cp.png"
        alt="logo"
        className="h-10 w-10"
        width={70}
        height={70}
      />
    </div>
  );
};
