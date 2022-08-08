import "./App.css";
import SecPic1 from "./img/sec_pic_1.jpg";

const Section1 = () => {
  return (
    <section className="flex justify-center items-center h-80v lg:h-60v ">
      <div className=" flex flex-col justify-center mx-6 lg:flex-row">
        <div className="w-[302px] flex justify-center align-middle flex-col lg:w-d475w lg:d319h m-auto ">
          <div className=" text-2xl font-bold text-blue-1 lg:text-5xl text-center lg:text-left">
            共享中的獨享
          </div>
          <div className=" text-sm mt-3 font-semibold lg:text-base">
            首創訂閱制空間會籍：App 上隨時預約座位，享受工作、
            <br />
            學習、社交、創意空間零時差。
            <br />
            空間設計滿足共享環境中相互激盪想法，獨享單人亭中專
            <br />
            注自我實現。
          </div>
        </div>
        <figure className=" w-d475w mx-6 ">
          <img
            src={SecPic1}
            alt="section pic 1"
            className=" h-[169px] rounded-xl  object-cover	lg:h-d319h  m-auto "
          />
        </figure>
      </div>
    </section>
  );
};

export default Section1;
