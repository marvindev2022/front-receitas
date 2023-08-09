import backgroundImage from "../../assets/bg.png";
import line from "../../assets/Line 2.png";
import RenderButton from "../button";

export default function RenderHeroSection(): JSX.Element {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "100vw 100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="w-[100%] h-[650px] max-w-[1440px] flex flex-col  flex-shrink-0 py-[120px] px-[68px] max-lg:pl-[162px] pr-[68px] lg:pl-[68px]"
    >
      <div>
        <div className="w-[800px]">
          <strong className="text-red-500 font-zcool-kuai-le font-normal text-4xl leading-tight">
            Descubra, Compartilhe
          </strong>
          <br />
          <strong className="text-white font-poppins font-normal text-4xl leading-tight">
            e
          </strong>{" "}
          <strong className="text-red-500 font-zcool-kuai-le font-normal text-4xl leading-tight">
            Saboreie
          </strong>{" "}
          <strong className="text-white font-poppins font-normal text-4xl leading-tight">
            Receitas Incríveis!
          </strong>
        </div>
        <div className="flex items-center max-w-[362px] w-[100%] max-h-[96px] h-[100%] text-white">
          <span className="max-w-[103px] w-[100%] h-[83px]">
            <h2 className="text-white font-poppins text-2xl font-extrabold">
              +100k
            </h2>
            <p>receitas</p>
          </span>
          <span className="min-w-[53px] max-w-[53px] flex justify-center  h-[83px]">
            <img src={line} className="max-h-[45px]" alt="" />
          </span>
          <span className="max-w-[153px] h-[83px]">
            <h2 className="text-white font-poppins text-2xl font-extrabold">
              +20k
            </h2>
            <p>usuários ativos</p>
          </span>
        </div>
        <RenderButton />
      </div>
    </div>
  );
}
