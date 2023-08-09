import logo from "../../assets/logo.svg";


export default function RenderLogo(){

    return(
        <>
         <img src={logo} alt="Logo" />
        <h1 className="text-red-500 font-zcool-kuai-le font-normal text-2xl leading-tight">
          Sabores<br/>Compartilhados
        </h1>
        </>
    )
}