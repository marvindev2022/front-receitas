import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { notifyError } from "../../utils/notifications";
import { getItem, setItem } from "../../utils/storage";
import "./styles.css";

function SignIn(): JSX.Element {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  useEffect(() => {
    const token = getItem("token");
    if (token) navigate("/main");
  }, [navigate]);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email || !password)
      return notifyError("Todos os campos são obrigatórios.");

    try {
      const { data } = await api.post("/users/signin", {
        email,
        password,
      });

      
      setItem("token", data);
      navigate("/main");
    } catch (error: any) {
      console.log(error);
      notifyError(error.response.message);
    }
  }

  return (
    <div className="container-sign-in">
      <img src={""} alt="Logo" className="logo" />

      <div className="content-sign-in">
       
        <div className="right">
          <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <div className="container-inputs">
              <label htmlFor="email">E-mail</label>
              <input
                type="text"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="container-inputs">
              <label htmlFor="password">Senha</label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="btn-purple btn-big">Entrar</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
