import "./App.css";
import SecPic3 from "./img/feature-3.jpg";

const Section3 = () => {
  return (
    <section className="flex justify-center items-center h-60v ">
      <div className=" flex flex-col justify-center items-center  mx-6 lg:flex-row">
        <div className=" h-[169px] lg:w-d475w lg:d319h flex justify-center items-center flex-col ">
          <div className=" text-2xl font-bold text-blue-1 lg:text-5xl ">
            彈性方案由你組合
          </div>
          <div className=" text-sm mt-3 font-semibold lg:text-base  text-center lg:text-left">
            就是享受不綁約的自由！ xarehub享聚落
            核心理念是提供最適合你與團隊的彈性空
            間選擇，自主管理時間、自助組合空間，讓你的時間使用 效益翻倍。
          </div>
        </div>
        <figure className="  mx-6">
          <img
            src={SecPic3}
            alt="section pic 1"
            className=" h-[169px] lg:h-d319h lg:w-d475w rounded-xl object-cover "
          />
        </figure>
      </div>
    </section>
  );
};

export default Section3;
