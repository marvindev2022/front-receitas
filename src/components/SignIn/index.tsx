import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { notifyError, notifySucess } from "../../utils/notifications";
import { setItem } from "../../utils/storage";
import arrow from "./../../assets/website de receitas/arrow.svg";

function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  async function handleSubmit(e: FormEvent): Promise<any> {
    e.preventDefault();
    if (!email || !password)
      return notifyError("Todos os campos são obrigatórios.");

    try {
      const { data } = await api.post("/users/signin", {
        email,
        password,
      });
      const user = data;
      setItem("token", data.token);
      setItem("user", JSON.stringify({ id: user.id, name: user.name }));
      navigate("/");
      notifySucess("Logado");
    } catch (error: any) {
      console.log(error);
      notifyError(error.response);
    }
  }
  // document.body.classList.add("modal-open");
  return (
    <dialog
      id="dialog-signin"
      className="w-[100vw] h-[100vh]  bg-transparent  border-2 border-blue-600 fixed left-0 top-0"
    >
      <div className="max-w-[443px] max-h-[407px] absolute top-24 right-52 bg-white  p-[27px] ">
        <span className="w-[100%]  ">
          <img
            src={arrow}
            className="absolute rotate-180 cursor-pointer"
            onClick={() => {
              const modal = document.getElementById("dialog-signin");
              if (modal instanceof HTMLDialogElement) {
                modal.close();
              }
              document.body.classList.remove("modal-open");
            }}
          />
        </span>
        <form onSubmit={handleSubmit}>
          <h2 className="font-zcool-kuai-le  text-black font-normal text-[34px] text-center  ">
            Entrar
          </h2>
          <p className="text-center  text-[#ADADAD]  font-family-inter text-base font-normal leading-normal tracking-tighter">
            Seja Bem vindo ao Sabores Compartilados!
          </p>
          <div className=" flex flex-col  items-start self-stretch">
            <label
              className="font-poppins font-normal text-[12px] text-bold"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="border-2 border-[[#DEE2E6] flex gap-[0.5rem] max-w-[393px] w-[100%] h-[40px] placeholder-[#ADADAD]  pl-[8px]"
              type="text"
              name="email"
              value={email}
              placeholder="nome@email.com"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className=" flex flex-col  items-start self-stretch mt-[18px] mb-[18px]">
            <label
              className="font-poppins font-normal text-[12px] text-bold"
              htmlFor="password"
            >
              Senha
            </label>
            <input
              className="border-2 border-[[#DEE2E6] flex gap-[0.5rem] max-w-[393px] w-[100%] h-[40px] placeholder-[#ADADAD]  pl-[8px]"
              type="password"
              name="password"
              value={password}
              placeholder="******"
              minLength={6}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="flex items-center justify-center w-[393px] h-[50px] bg-[#CE2425] pd-[8px]">
            <img src={arrow} />
          </button>
          <p className="text-center p-2 text-[16px] font-poppins">
            Não possui conta ainda?{"  "}
            <a
              onClick={() => {
                const modalSignup = document.getElementById("dialog-signup");
                const modal = document.getElementById("dialog-signip");
                if (modalSignup instanceof HTMLDialogElement) {
                  modalSignup.show();
                }
                if (modal instanceof HTMLDialogElement) {
                  modal.close();
                }
              }}
              className="text-red-500 underline"
            >
              <strong> Cadastrar</strong>
            </a>
          </p>
        </form>
      </div>
    </dialog>
  );
}

export default SignIn;
