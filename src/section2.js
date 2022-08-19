import "./App.css";
import SecPic2 from "./img/feature-2.jpg";

const Section2 = () => {
  return (
    <section className="flex flex-col justify-center items-center h-60v lg:flex-row ">
      <img
        src={SecPic2}
        alt="section pic 1"
        className=" w-[302px] rounded-xl  object-cover lg:w-d475w lg:d319h "
      />
      <div className="flex justify-center mx-6">
        <div className="w-[302px] lg:w-d475w lg:d319h flex justify-center items-start lg:items-center align-middle flex-col">
          <div className=" text-2xl font-bold text-blue-1 lg:text-5xl mx-auto text-center ">
            共創空間的無限可能
          </div>
          <p className=" text-sm mt-3 font-semibold lg:text-base lg:text-right text-center ">
            空間就是舞台，每個發生都是漣漪起點。
            線上直播、線下交流，對外發表、內部培訓，團隊溝通、一人作業，xarehub享聚落
            一站式空間服務，你最聰明彈性的選擇！
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section2;
