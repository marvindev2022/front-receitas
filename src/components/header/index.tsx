import profile from "../../assets/profile.svg";
import search from "../../assets/search.svg";
import "../../index.css";
import { loadRecipes } from "../../utils/requisitions";
import { clear, getItem } from "../../utils/storage";
import RenderLogo from "../logo/logo";
import { useEffect, useState } from "react";
const token = getItem("token");
const user = JSON.parse(getItem("user") ?? "null");
const Header = () => {
  const [allRecipes, setAllRecipes] = useState([]);
  const [categorySelected, setCategorySelected] = useState();
  const handleCategorySelect = (e: any) => {
    setCategorySelected(e.target.value);
  };
  useEffect(() => {
    async function fetchAllRecipes() {
      const allRecipes = await loadRecipes();
      setAllRecipes(allRecipes);
    }
    fetchAllRecipes();
  }, []);
  return (
    <header className="p-1 w-screen h-58 flex justify-around items-center">
      <div className="flex justify-center items-center gap-2">
        <RenderLogo />
      </div>
      <div className="flex">
        <div className="flex items-center  border border-black bg-gray-200 rounded-l-md">
          <select
            value={categorySelected}
            onChange={handleCategorySelect}
            className="p-2 bg-gray-200 focus:outline-none"
          >
            <option value="Todos">Todos</option>
            <option value="Bolos">Bolos</option>
            <option value="Sobremesas">Sobremesas</option>
            <option value="Carnes">Carnes</option>
            <option value="Aves">Aves</option>
            <option value="Peixes">Peixes</option>
            <option value="Frutos do Mar">Frutos do Mar</option>
            <option value="Outros">Outros</option>
          </select>
          <p className="w-10  flex justify-center items-center">|</p>
          <input
            type="text"
            placeholder="Buscar receitas"
            className=" py-1 border bg-gray-200 focus:outline-none"
          />
        </div>
        <div className="flex justify-center items-center gap-9 w-14 h-11 bg-red-500 rounded-r-md">
          <img src={search} alt="Search" className="w-6 h-6 flex-shrink-0" />
        </div>
      </div>
      {!token && (
        <div className="flex gap-2">
          <div className="w-39 h-39 border-2 border-black rounded-full flex items-center justify-center">
            <img src={profile} alt="Profile" />
          </div>
          <div>
            <select className="p-2 bg-white">
              <option value="login">
                <strong>Entrar</strong>
              </option>
              <option value="register">Cadastrar</option>
              <option value="contact">Contato</option>
            </select>
          </div>
        </div>
      )}
      {token && (
        <div className="flex gap-2">
          <div className="w-39 h-39 border-2 border-black rounded-full flex items-center justify-center">
            <img src={profile} alt="Profile" />
          </div>
          <div>
            <span>{user.name}</span>
            <select className="p-2 bg-white border-none! w-[10px] focus:outline-none">
              <option value="welcome"></option>
              <option value="Editar Usuário">Editar Usuário</option>
              <option value="Minhas Receitas">Minhas Receitas</option>
              <option value="Meus Favoritos">Meus Favoritos</option>
              <option
                value="logout"
                onSelect={() => {
                  clear();
                }}
              >
                Sair
              </option>
            </select>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
