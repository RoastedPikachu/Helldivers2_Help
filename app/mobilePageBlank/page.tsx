import React from "react";

const Page = () => {
  return (
    <>
      <section className="flex justify-center items-center w-screen h-screen">
        <div className="grid justify-items-center w-[80%]">
          <img
            src="/static/generalIcons/SkullIcon.svg"
            alt=""
            className="w-[100px] mmedium:w-[90px] msmall:w-[80px] h-[100px] mmedium:h-[90px] msmall:h-[80px]"
          />

          <h1 className="text-[#ffffff] text-[3.5rem] mmedium:text-[3.25rem] msmall:text-[3rem] text-center font-[Exo2] font-bold">
            Упс
          </h1>

          <h2 className="text-[#2cc388] text-[2rem] mmedium:text-[1.75rem] msmall:text-[1.5rem] text-center font-['Exo2'] font-bold">
            Похоже, что у вас телефон!
          </h2>

          <p className="mt-[15px] text-[#ffffff] text-[1.25rem] mmedium:text-[1.125rem] msmall:text-[1rem] text-center font-['Exo2'] font-medium  brightness-75">
            Пока что мы не успели сделать мобильную версию сайта, но вскоре она
            появится.
          </p>

          <div className="grid justify-items-center">
            <h3 className="mt-[20px] text-[#2cc388] text-[1.5rem] mmedium:text-[1.25rem] text-center font-['Exo2'] font-semibold">
              Пока что можете перейти по одной из ссылок:
            </h3>

            <div className="flex items-center mt-[20px]">
              <a
                href="https://t.me/helldivers_help_support"
                className="flex justify-center items-center p-[2.5px] w-[55px] h-[55px] border-2 border-[#2cc388] rounded-[7.5px]"
              >
                <img
                  src="/static/generalLogos/TelegramLogo.svg"
                  alt=""
                  className="w-[40px] h-[40px]"
                />
              </a>

              <a
                href="https://boosty.to/helldivers.help"
                className="flex justify-center items-center ml-[20px] p-[2.5px] w-[55px] h-[55px] bg-[#f06d2a] border-2 border-[#2cc388] rounded-[7.5px]"
              >
                <img
                  src="/static/generalLogos/BoostyLogo.png"
                  alt=""
                  className=""
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
