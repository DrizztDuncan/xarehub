import head from "./header-pic.jpg";
import frame from "./Background_01.svg";
import Navbar from "./navBar";
import HeaderInput from "./headerInput";
import Section1 from "./section1";
import Section2 from "./section2";
import Section3 from "./section3";
import Section4 from "./section4";
import Section5 from "./section5";
import TopBtn from "./topBtn";
import Footer from "./footer";
import Tri_1 from "./img/triangleBg.svg";
import Tri_2 from "./img/triangleBg_1.svg";
import "./App.css";
import SlideShow from "./slideshow";

function App() {
  return (
    <>
      <TopBtn />

      <img
        src={head}
        className=" absolute -z-50 h-[200px] lg:h-auto lg:w-full object-none lg:object-cover "
        alt="head-img"
      />
      <header className=" relative flex justify-center align-center">
        <Navbar />
      </header>

      <main className=" top-0 lg:top-20 w-100w block relative ">
        <img
          src={frame}
          className="absolute top-20 lg:-top-10 left-0 w-full overflow-hidden -z-40 "
          alt="frame"
        />
        <section className=" h-full lg:h-80v w-90w flex justify-start items-center flex-col mx-auto pt-20 lg:pt-32 ">
          <h1 className=" h-24 text-center text-white text-4.5xl font-black drop-shadow-[2px_2px_2px_rgba(0,0,0,1)]">
            找到你的理想空間
          </h1>
          <HeaderInput />

          <button className=" bg-blue-1 text-lg		 text-white font-bold  px-4 rounded-lg mt-4 w-1/4 h-10 focus:bg-blue-200 focus:text-black">
            搜尋
          </button>
        </section>
        <img
          src={Tri_1}
          className=" w-20 absolute left-0 top-1/3 lg:w-60 -z-10 "
          alt="bg triangle"
        />
        {/* background triangle */}
        <Section1 />
        <img
          src={Tri_2}
          className="  w-20 absolute right-0 top-1/2  lg:w-60 -z-10 "
          alt="bg triangle"
        />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <SlideShow />
      </main>
      <Footer />
    </>
  );
}

export default App;
