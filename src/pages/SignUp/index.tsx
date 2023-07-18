import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../services/api";
import { notifyError, notifySucess } from "../../utils/notifications";
import "./styles.css";

interface DefaultFrom {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}
const defaultForm: DefaultFrom = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function SignUp() {
  const navigate = useNavigate();

  const [form, setForm] = useState({ ...defaultForm });

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    try {
      if (
        !form.name ||
        !form.email ||
        !form.password ||
        !form.confirmPassword
      ) {
        return notifyError("Todos os campos são obrigatórios.");
      }

      if (form.password !== form.confirmPassword) {
        return notifyError("As senhas precisam ser iguais.");
      }

      const {data } = await api.post("/users/signup", {
        email: form.email,
        name: form.name,
        password: form.password,
      });

      if (!data) {
        return notifyError(data);
      }

      notifySucess("Cadastro realizado.");

      navigate("/");
    } catch (error: any) {
      console.log(error)
      notifyError(error.response.data.mensagem);
    }
  }

  function handleChangeForm({ target }: any) {
    setForm({ ...form, [target.name]: target.value });
  }

  return (
    <div className="container-sign-up">
      <img src={""} alt="Logo" className="logo" />

      <div className="content-sign-up">
        <form onSubmit={handleSubmit}>
          <h2>Cadastre-se</h2>

          <div className="container-inputs">
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChangeForm}
            />
          </div>

          <div className="container-inputs">
            <label htmlFor="email">E-mail</label>
            <input
              type="text"
              name="email"
              value={form.email}
              onChange={handleChangeForm}
            />
          </div>

          <div className="container-inputs">
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChangeForm}
            />
          </div>

          <div className="container-inputs">
            <label htmlFor="confirm-password">Confirmação de senha</label>
            <input
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChangeForm}
            />
          </div>

          <button className="btn-purple btn-big">Cadastrar</button>

          <Link to="/">Já tem cadastro? Clique aqui!</Link>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
