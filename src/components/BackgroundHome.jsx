"use client";

import { usePathname } from "next/navigation";

const BackgroundHome = () => {
  const pathname = usePathname();
  return (
    <>
      {pathname !== "/menu" && (
        <div className="relative h-full w-full bg-slate-950 left-0">
          <div className="fixed bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
          <div className="absolute bottom-0 right-[0] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        </div>
      )}
    </>
  );
};

export default BackgroundHome;
