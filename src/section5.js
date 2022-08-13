import "./App.css";

const Section5 = () => {
  return (
    <section className="flex flex-col justify-center items-center h-50v lg:h-40v">
      <h1 className=" text-blue-1 text-3xl lg:text-5xl font-bold ">
        xarehub享聚落 空間
      </h1>
      <p className=" font-semibold text-center w-60w lg:w-80w block text-lg">
        帶著你的創意力、想像力、執行力，登上你心中的那座山，
        <br />
        xarehub享聚落以不同的面貌支持你！
        <br />
        空間我們準備好了，等你來實現！
      </p>
      <button className=" bg-blue-1 text-lg	 text-white font-bold py-1 px-4 rounded-lg mt-2 w-60 h-10 focus:bg-blue-200 focus:text-black">
        查詢更多空間
      </button>
    </section>
  );
};

export default Section5;
