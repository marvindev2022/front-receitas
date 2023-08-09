import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { notifyError, notifySucess } from "../../utils/notifications";
import { setItem } from "../../utils/storage";
import arrow from "./../../assets/website de receitas/arrow.svg";

function SignUp() {
  const navigate = useNavigate();
  const [step, setStep] = useState<number>(1);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [name, setName] = useState<string>("");

  async function handleEmailVerification(e: FormEvent): Promise<any> {
    e.preventDefault();
    if (!email) return notifyError("O campo de email é obrigatório.");

    try {
      const { data } = await api.post("/users/validate/email", {
        email,
      });
      if (data.emailExists) {
        return notifyError("Email já cadastrado.");
      }

      setStep(2);
    } catch (error: any) {
      console.log(error);
      notifyError("Ocorreu um erro ao verificar o email.");
    }
  }

  async function handleSignUp(e: FormEvent): Promise<any> {
    e.preventDefault();
    if (!password || password.length < 6)
      return notifyError("A senha deve conter pelo menos 6 caracteres.");
    if (password !== confirmPassword)
      return notifyError("As senhas não coincidem.");

    try {
      const { data } = await api.post("/users/signup", {
        name,
        email,
        password,
      });
      setItem("token", data);
      navigate("/");
      notifySucess("Cadastro Realizado com sucesso!");
    } catch (error: any) {
      console.log(error);
      notifyError(error.response);
    }
  }

  return (
    <dialog
      id="dialog-signup"
      className="w-[100vw] h-[100vh]  bg-transparent  border-2 border-blue-600 fixed left-0 top-0"
    >
      <div className="max-w-[443px] max-h-[407px] absolute top-24 right-52 bg-white  p-[27px] z-50">
        <span className="w-[100%]  ">
          <img
            src={arrow}
            className="absolute rotate-180 cursor-pointer"
            onClick={() => {
              const modal = document.getElementById("dialog-signup");
              if (modal instanceof HTMLDialogElement) {
                modal.close();
              }
              document.body.classList.remove("modal-open");
            }}
          />
        </span>
        {step === 1 && (
          <form onSubmit={handleEmailVerification}>
            <h2 className="font-zcool-kuai-le  text-black font-normal text-[34px] text-center  ">
              Cadastrar
            </h2>
            <p className="text-center  text-[#ADADAD]  font-family-inter text-base font-normal leading-normal tracking-tighter">
              Seja Bem vindo ao Sabores Compartilhados!
            </p>
            <div className=" flex flex-col  items-start self-stretch">
              <label
                className="font-poppins font-normal text-[12px] text-bold"
                htmlFor="name"
              >
                Nome
              </label>
              <input
                className="border-2 border-[[#DEE2E6] flex gap-[0.5rem] max-w-[393px] w-[100%] h-[40px] placeholder-[#ADADAD]  pl-[8px]"
                type="text"
                name="name"
                value={name}
                placeholder="Seu Nome"
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className=" flex flex-col  items-start self-stretch mt-[18px] mb-[18px]">
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
            <button className="flex items-center justify-center w-[393px] h-[50px] bg-[#CE2425] pd-[8px]">
              <img src={arrow} />
            </button>
          </form>
        )}
        {step === 2 && (
          <form onSubmit={handleSignUp}>
            <h2 className="font-zcool-kuai-le  text-black font-normal text-[34px] text-center  ">
              Cadastrar
            </h2>
            <p className="text-center  text-[#ADADAD]  font-family-inter text-base font-normal leading-normal tracking-tighter">
              Seja Bem vindo ao Sabores Compartilhados!
            </p>
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
            <div className=" flex flex-col  items-start self-stretch mt-[18px] mb-[18px]">
              <label
                className="font-poppins font-normal text-[12px] text-bold"
                htmlFor="confirmPassword"
              >
                Confirmar Senha
              </label>
              <input
                className="border-2 border-[[#DEE2E6] flex gap-[0.5rem] max-w-[393px] w-[100%] h-[40px] placeholder-[#ADADAD]  pl-[8px]"
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                placeholder="******"
                minLength={6}
                required
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <button className="flex items-center justify-center w-[393px] h-[50px] bg-[#CE2425] pd-[8px]">
              <img src={arrow} />
            </button>
          </form>
        )}
        {step === 3 && (
          <span>
            Cadastro realizado com sucesso! Você pode fazer login agora.
          </span>
        )}
      </div>
    </dialog>
  );
}

export default SignUp;
