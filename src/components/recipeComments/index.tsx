import React from "react";

interface RecipeComment {
  name: string;
  author: string;
  text: string;
}

interface RenderRecipeCommentsProps {
  indexComments: number;
  setIndexComments: React.Dispatch<React.SetStateAction<number>>;
  selectPage: string; 
  recipeImage: string; 
}

const recipeComments:RecipeComment[] = [
    {
      name: "Risoto de Cogumelos",
      author: "Carolina Silva",
      text: "Essa receita de risoto é divina! Os cogumelos dão um sabor incrível, e a textura cremosa é perfeita. Recomendo a todos experimentarem!",
    },
    {
      name: "Bolo de Cenoura com Cobertura de Chocolate",
      author: "Pedro Santos",
      text: "O bolo de cenoura da minha avó é imbatível, mas essa receita chega muito perto! A cobertura de chocolate é de lamber os dedos.",
    },
    {
      name: "Salada de Frutas Frescas",
      author: "Mariana Souza",
      text: "Uma salada de frutas simples e deliciosa. Ótima opção para o café da manhã ou uma sobremesa saudável.",
    },
    {
      name: "Pão de Queijo",
      author: "Luiz Santos",
      text: "Sou mineiro e posso dizer que essa receita é autêntica! Os pães de queijo ficam macios por dentro e com uma casquinha crocante.",
    },
    {
      name: "Sopa de Legumes",
      author: "Ana Oliveira",
      text: "Uma sopa reconfortante para os dias frios. A combinação de legumes é perfeita, e o sabor é maravilhoso.",
    },
    {
      name: "Torta de Maçã",
      author: "Lucas Almeida",
      text: "Essa torta de maçã é simplesmente divina! A massa desmancha na boca, e o recheio é equilibrado em doçura. Uma delícia!",
    },
  ];
const RenderRecipeComments: React.FC<RenderRecipeCommentsProps> = ({
  indexComments,
  setIndexComments,
  selectPage,
  recipeImage,
}) => {
  const handleCommentChange = (direction: string) => {
    if (direction === "prev") {
      setIndexComments((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : recipeComments.length - 3
      );
    } else {
      setIndexComments((prevIndex) =>
        prevIndex < recipeComments.length - 3 ? prevIndex + 1 : 0
      );
    }
  };

  return (
    <div className="flex flex-col items-center justify-center max-w-[99vw] w-100% h-[258px]">
      <h2 className="text-[2rem] font-zcool-kuai-le font-normal ml-[-650px]">
        Receitas bem avaliadas
      </h2>
      <div className="flex gap-[22px] max-w-[1366px] w-[100%] h-[200px] justify-center">
        <img
          className="w-12"
          onClick={() => handleCommentChange("prev")}
          src={selectPage}
          alt=""
        />
        {recipeComments
          ?.slice(indexComments, indexComments + 3)
          .map((recipe, index) => (
            <div
              className="flex  max-w-[390px] w-[100%] max-h-[171px] h-[100%] p-5 items-center flex-shrink-0 rounded-3 border border-black gap-5 "
              key={index}
            >
              <img
                className="max-w-[101px] max-h-[101px]"
                src={recipeImage}
                alt=""
              />
              <div>
                <strong>{recipe.name}</strong>
                <h2>{"@" + recipe.author}</h2>
                <p className="max-w-[224px font-poppins] text-[11px] font-normal tex-#3B3F5C">
                  {recipe.text}
                </p>
              </div>
            </div>
          ))}
        <img
          onClick={() => handleCommentChange("next")}
          className="rotate-180 w-12"
          src={selectPage}
          alt=""
        />
      </div>
    </div>
  );
};

export default RenderRecipeComments;
