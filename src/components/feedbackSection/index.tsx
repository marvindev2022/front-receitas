import feedbackImg from "./../../assets/bg-feedback.svg";
import onion from "./../../assets/website de receitas/Group 54.svg";
import leaft from "./../../assets/website de receitas/image 39.svg";
import pepper from "./../../assets/website de receitas/image 41.svg";
import block1 from "./../../assets/website de receitas/image_16-removebg-preview 5.svg";
import block2 from "./../../assets/website de receitas/image_16-removebg-preview 6.svg";
import yellow from "./../../assets/website de receitas/Rectangle 17.svg";
import red from "./../../assets/website de receitas/Rectangle 18.svg";
import sauce from "./../../assets/website de receitas/img8.svg";
export default function RenderFeedbacks() {
  return (
    <section className="flex w-[100%] max-w-[1440px] justify-center items-center gap-[150px] relative  border-red-700">
      <div
        style={{
          backgroundImage: `url(${feedbackImg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
        className="w-[545px] h-[561px]  "
      >
        <img src={onion} alt="" className="absolute top-[15rem] left-[-1rem]" />
        <img src={leaft} alt="" className="absolute top-[0rem] left-[30rem]" />
        <img
          src={red}
          alt=""
          className="absolute top-[22rem] left-[38rem]"
        />
        <img
          src={red}
          alt=""
          className="absolute top-[8rem] left-[44rem]"
        />
        <img src={block1} alt="" className="absolute top-[1rem] left-[0rem]" />
        <img
          src={block2}
          alt=""
          className="absolute top-[28rem] left-[38rem]"
        />
        <img
          src={yellow}
          alt=""
          className="absolute top-[18rem] left-[46rem]"
        />
        <img src={sauce} alt="" className="absolute top-[-4rem] right-[15rem]" />
        <img src={pepper} alt="" className="absolute top-[14rem] right-[2rem]" />
      </div>
      <div className="flex flex-col justify-end items-start  h-[561px] gap-2 ">
        <strong className="text-[#EB0029] font-zcool-kuai-le text-[1.5rem] font-normal">
          feedbacks
        </strong>
        <h1 className="w-[532px] h-[141px] flex-shrink-0 text-#000 font-poppins font-normal  text-[45px] ">
          O que nossos usuários estão dizendo
        </h1>
        <p className="w-[505px] h-[128px] flex-shrink-0 text-#000 font-poppins font-normal  text-[20px]">
          “Groceyish is the best. Besides the many and delicious meals, the
          platform is also very good, especially in the very fast contact and
          support. I highly recommend it to you all”.
        </p>
        <div className="w-[505px] flex gap-[10px] justify-start items-center  pb-[52px]">
          <img
            className="w-[64px] h-[64px] rounded-full"
            src="https://scontent-gig4-1.xx.fbcdn.net/v/t39.30808-6/346087374_248780904489604_1788490239312052550_n.jpg?_nc_cat=105&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeF6ort8evUhObIwCKXOggMEn_y7x-wmkvyf_LvH7CaS_JlYf40jAQoimHSym_NAbPy16QDs-i2Mw29M_y3e-zb1&_nc_ohc=7cxYjwVIl3MAX-AuFBB&_nc_ht=scontent-gig4-1.xx&oh=00_AfDaLebRzHMYXQcAdT2Jnm6rPIxWsa-0ClXB5ElExmz7JQ&oe=64BE35BE"
          />
          <span className="">
            <strong className="">Marcus Roza</strong>
            <p className="">Fullstack</p>
          </span>
        </div>
      </div>
    </section>
  );
}
