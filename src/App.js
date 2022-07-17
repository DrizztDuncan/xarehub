import head from './header-pic.jpg';
import frame from './Background_01.svg';
import Navbar from './navBar';
import HeaderInput from './headerInput';
import Section1 from './section1';
import Tri_1 from './img/triangleBg.svg';
import Tri_2 from './img/triangleBg_1.svg';
import './App.css';


function App() {
  return (
    <>
      <img src={head} className=" absolute -z-10 w-full " alt="head-img" />

      <header className=" relative flex justify-center align-center">  
         <Navbar />        
      </header>

      <main className= "absolute top-20 w-screen block bg-[url('./Background_01.svg')] bg-no-repeat bg-cover ">
     
      <section className=" h-screen w-60w flex justify-start items-center flex-col m-auto pt-32 ">
        <h1 className=" h-24 text-center text-white font-medium text-4.5xl ">找到你的理想空間</h1>
         <HeaderInput className=" h-11 w-60vw flex justify-evenly	 "/> 
         
         <button className=" bg-blue-1 text-white font-bold py-2 px-4 rounded-lg mt-2 w-1/4 h-10 ">
            搜尋
         </button>
      </section>
      <img src={Tri_1} className=" w-60 absolute left-0 top-1/3" alt="bg triangle" /> 
      {/* background triangle */}
      <Section1 />
      <img src={Tri_2} className=" w-60 absolute right-0 top-1/3" alt="bg triangle" /> 
      <section></section>
      
      </main>

      <footer></footer>

    </>
  
  );
}

export default App;
