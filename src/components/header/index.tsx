import {useNavigate} from "react-router-dom"
import '../../index.css'
const Header = () => {
  const navigate = useNavigate()
  return (
    <header className="flex justify-around items-center">
     <h1>Receitas</h1>
      <nav>
        <ul className="flex gap-10">
          <li><a href="#" className="text-white hover:text-gray-300">Home</a></li>
          <li><a href="#" className="text-white hover:text-gray-300">Receitas</a></li>
          <li><a href="#" className="text-white hover:text-gray-300">Categorias</a></li>
        </ul>
      </nav>
      <div className="flex gap-2">
        <button onClick={()=>navigate('/signin')} className="px-4 py-2 bg-white text-blue-500 rounded-md">Sign In</button>
        <button onClick={()=>navigate('/signup')} className="px-4 py-2 bg-white text-blue-500 rounded-md">Sign Up</button>
      </div>
    </header>
  );
};

export default Header;
