import React from "react";
import Image from "next/image";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={"flex min-h-screen"}>
      <section
        className={
          "hidden w-1/2 items-center justify-center bg-brand p-10 lg:flex xl:w-2/5"
        }
      >
        <div
          className={
            "flex max-h-[800px] max-w-[430px] flex-col justify-center space-y-12"
          }
        >
          <Image
            src={"/assets/icons/logo-full 1.svg"}
            alt={"logo"}
            width={224}
            height={82}
            className={"h-auto"}
          />
          <div className={"space-y-5 text-white"}>
            <h1 className={"h1"}>
              Effortless file management, right at your fingertips.
            </h1>
            <p className={"body-1"}>
              Experience seamless file organization with just a tap.
              Effortlessly manage, access, and share all your files anytime,
              anywhere—bringing simplicity and control right to your fingertips.
            </p>
          </div>
          <Image
            src={"/assets/images/files.png"}
            alt={"files"}
            width={342}
            height={342}
            className={
              "hover:scale-120 transition-all hover:rotate-2 hover:scale-110"
            }
          />
        </div>
      </section>
      <section
        className={
          "flex flex-1 flex-col items-center bg-white p-4 py-10 lg:justify-center lg:p-10 lg:py-0"
        }
      >
        <div className={"mb-16 lg:hidden"}>
          <Image
            src={"/assets/icons/logo-full-brand.svg"}
            alt={"logo"}
            width={224}
            height={82}
            className={"h-auto w-[200px] lg:w-[250px]"}
          />
        </div>
      </section>
      {children}
    </div>
  );
};

export default Layout;
