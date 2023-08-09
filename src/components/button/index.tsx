export default function RenderButton() {
  return (
   <nav className="flex gap-[1rem]"> <button
   onClick={() => {
     document.querySelector("#dialog-signin")?.show();
     window.scrollTo({ top: 0, behavior: 'smooth' });
   }}
   className="button-container w-40 min-h-[50px] text-center bg-red-600 text-white font-zcool-kuai-le font-normal text-[18px] leading-[29.7px] tracking[-0.2%]"
 >
   Entre agora
 </button>

<button
onClick={() => {
const modal = document.getElementById("dialog-signup");
if (modal instanceof HTMLDialogElement) {
 modal.show();
}
window.scrollTo({ top: 0, behavior: 'smooth' });
}}
className="button-container w-40 min-h-[50px] text-center hover:border-2 bg-red-600text-white font-zcool-kuai-le font-normal text-[18px] text-white leading-[29.7px] tracking[-0.2%]"
>
Cadastrar
</button></nav>
  );
}
