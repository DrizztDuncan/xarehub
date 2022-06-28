import head from './header-pic.jpg';
import frame from './Background_01.svg';
import Navbar from './navBar';
import HeaderInput from './headerInput';
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
      </section>

      <section></section>
      <section></section>
      
      </main>

      <footer></footer>
      
      {/* <img src={frame} className=" relative top-10 w-full object-cover" alt="frame_1" /> */}
    </>
  
  );
}

export default App;
