import { useEffect, useState } from "react";
import { loadCategories } from "../../utils/requisitions";

interface Category {
  name: string;
  url: string;
}

interface RenderRecipeCategoriesProps {
    selectPage: string; 
    indexPage: number;
    setIndexPage: React.Dispatch<React.SetStateAction<number>>; 
}
  
  export default function RenderRecipeCategories({
    selectPage,
    indexPage,
    setIndexPage,
  }: RenderRecipeCategoriesProps)  {
 const [allCategories,setAllCategories] = useState<Category[]>([])


 useEffect(()=>{
  async function fetchCategories(){
   const allCategories = await loadCategories()
   setAllCategories(allCategories)
  }
  fetchCategories()
 },[])
  const handlePageChange = (direction: string) => {
    if (direction === "prev") {
      setIndexPage((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : allCategories.length - 7
      );
    } else {
      setIndexPage((prevIndex) =>
        prevIndex < allCategories.length - 7 ? prevIndex + 1 : 0
      );
    }
  };
  return (
    <div className="flex flex-col items-center justify-center max-w-[99vw] w-100% h-[258px]">
      <h2 className="text-[2rem] font-zcool-kuai-le font-normal ml-[-850px]">
        Categorias
      </h2>
      <div className="flex gap-[22px] max-w-[1366px] w-[100%] h-[200px] justify-center">
        <img
          className="w-12"
          onClick={() => handlePageChange("prev")}
          src={selectPage}
          alt=""
        />
        {allCategories?.slice(indexPage, indexPage + 7).map((category, index) => (
          <div
            className="flex flex-col max-w-[153px] w-[100%] max-h-[194px] h-[100%] p-5 items-center flex-shrink-0 rounded-3 border border-black gap-5"
            key={index}
          >
            <img className="max-w-[101px]  max-h-[101px]  w-full h-full object-cover  rounded-[1px]" src={category.url} alt="" />
            <h2 className="">{category.name}</h2>
          </div>
        ))}
        <img
          onClick={() => handlePageChange("next")}
          className="rotate-180 w-12"
          src={selectPage}
          alt=""
        />
      </div>
    </div>
  );
}
