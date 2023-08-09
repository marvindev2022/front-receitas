import RenderButton from "../button";
import RenderLogo from "../logo/logo";
import block1 from "./../../assets/website de receitas/image_16-removebg-preview 5.svg";
import block2 from "./../../assets/website de receitas/image_16-removebg-preview 6.svg";
import line from "./../../assets/website de receitas/Vector 44.svg";

export default function RenderFooter() {
  return (
    <footer className="flex justify-center items-center max-w-[1390px] w-[100%] bg-black h-[331px] relative mt-[50px]">
      <img className="absolute top-0 left-0" src={block1} />
      <img className="absolute bottom-0 right-6 " src={block2} />
      <img className="absolute bottom-[3rem] left-80 -rotate-90" src={line} />
      <img className="absolute bottom-[8rem] right-80 " src={line} />
      <div className="flex flex-col">
        <span className="flex justify-center ">
          <RenderLogo />
        </span>
        <p className="text-white w-[789px] font-zcool-kuai-le h-[60px] font-normal text-center">
          Coloque sua criatividade em prática e faça parte de uma comunidade que
          celebra a diversidade de sabores e culturas culinárias.
        </p>
        <div className="flex justify-center items-center h-[5rem] gap-8 ">
          <RenderButton />
         
        </div>
      </div>
    </footer>
  );
}
