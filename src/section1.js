import "./App.css";
import SecPic1 from "./img/sec_pic_1.jpg";

const Section1 = () => {
  return (
    <section className="flex justify-center items-center h-60v ">
      <div className=" flex flex-col justify-center items-center  mx-6 lg:flex-row">
        <div className="h-[169px] lg:w-d475w lg:d319h flex justify-center items-center flex-col ">
          <div className=" text-3xl font-bold text-blue-1 lg:text-5xl text-center lg:text-left">
            共享中的獨享
          </div>
          <div className=" text-sm mt-3 font-semibold lg:text-base">
            首創訂閱制空間會籍：App 上隨時預約座位，享受工作、
            學習、社交、創意空間零時差。
            空間設計滿足共享環境中相互激盪想法，獨享單人亭中專 注自我實現。
          </div>
        </div>
        <img
          src={SecPic1}
          alt="section pic 1"
          className=" w-[302px] rounded-xl  object-cover lg:w-d475w lg:d319h "
        />
      </div>
    </section>
  );
};

export default Section1;
