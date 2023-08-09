import Header from "../components/header";
import selectPage from "./../assets/selectPage.svg";
import recipeImage from "./../assets/recipe.svg";
import RenderRecipeComments from "../components/recipeComments/index";
import RenderRecipeDescription from "../components/recipeDescription/index";
import RenderRecipeCategories from "../components/recipeCategories/index";
import RenderHeroSection from "../components/heroSection/index";
import RenderFeedbacks from "../components/feedbackSection";
import RenderFooter from "../components/footer";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp/index";
import { loadRecipes } from "../utils/requisitions";
import { useState } from "react";

function RenderHome(): JSX.Element {
  const [indexPage, setIndexPage] = useState(0);
  const [indexComments, setIndexComments] = useState(0);
  
  return (
    <main className="container mx-auto">
      <div className="w-screen  min-h-screen flex flex-col items-center border-2mx-auto ">
        <Header  />
        <div className="relative w-100% border-2 border-red-600">
          <SignIn />
          <SignUp />
        </div>
        <section className="w-[100%] min-h-[100vh] max-w-[1440px] flex flex-col">
          <RenderHeroSection />
          <RenderRecipeDescription />
          <section className="flex gap-[72px] flex-col">
            <RenderRecipeCategories
              selectPage={selectPage}
              indexPage={indexPage}
              setIndexPage={setIndexPage}
            />
            <RenderRecipeComments
              indexComments={indexComments}
              setIndexComments={setIndexComments}
              selectPage={selectPage}
              recipeImage={recipeImage}
            />
            <RenderFeedbacks />
          </section>
        </section>

        <RenderFooter />
      </div>
    </main>
  );
}

export default RenderHome;
