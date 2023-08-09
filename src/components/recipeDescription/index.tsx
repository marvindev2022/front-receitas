import data from "../../assets/data.svg";
import puzzy from "../../assets/puzzy.svg";
import ingredients from "../../assets/ingredients.svg";



export default function RenderRecipeDescription(){
    

    return(
        <div className="flex justify-center items-center flex-col">
        <h2 className="text-black text-center font-zcool-kuai-le text-[29.507px] font-normal  leading-[29.51px] max-w-[616px] mt-[-209px]">
          Encontre a Receita Perfeita com Nossa Pesquisa Avançada
        </h2>
        <div className="flex gap-8 w-[835px] h-[150px] items-baseline justify-center mt-12">
          <span className="text-black text-center font-zcool-kuai-le text-[20px] font-normal flex flex-col justify-center items-center">
            <img src={data} alt="" />
            <p className="w-[165px] h-[82px]">categorias</p>
          </span>
          <span className="text-black text-center font-zcool-kuai-le text-[20px] font-normal flex flex-col justify-center items-center">
            <img src={ingredients} alt="" />
            <p className="w-[165px] h-[82px]">ingredientes</p>
          </span>
          <span className="text-black text-center font-zcool-kuai-le text-[20px] font-normal flex flex-col justify-center items-center">
            <img src={puzzy} alt="" />
            <p className="w-[165px] h-[82px]">palavras-chave</p>
          </span>
        </div>
      </div>
    )
}