import frame from "./Background_01.svg";
import Navbar from "./navBar";
import landing from "./img/landing.png";
import HeaderInput from "./headerInput";
import Section1 from "./section1";
import Section2 from "./section2";
import Section3 from "./section3";
import Section4 from "./section4";
import Section5 from "./section5";
import TopBtn from "./topBtn";
import Footer from "./footer";
import "./App.css";
import SlideShow from "./slideshow";

function App() {
  return (
    <>
      <TopBtn />

      <header className=" relative flex justify-center align-center">
        <Navbar />
      </header>
      <img src={landing} alt="" className="w-100w" />
      <main className=" top-0 lg:top-20 w-100w block relative ">
        <img
          src={frame}
          className="absolute top-20 lg:-top-10 left-0 w-full overflow-hidden -z-40 "
          alt="frame"
        />
        <section className=" h-full lg:h-80v w-90w flex justify-start items-center flex-col mx-auto pt-20 lg:pt-48 ">
          <h1 className=" h-24 text-center pt-4 lg:pt-0 text-white text-4xl lg:text-5xl font-black drop-shadow-[2px_2px_2px_rgba(0,0,0,1)]">
            BRINGING YOU ONLY THE BEST EDM - TRAP
          </h1>
          <HeaderInput />

          <button className=" bg-blue-1 text-lg		 text-white font-bold  px-4 rounded-lg mt-4 w-1/4 h-10 focus:bg-blue-200 focus:text-black">
            search
          </button>
        </section>

        <Section1 />
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
