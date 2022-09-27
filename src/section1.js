import "./App.css";
import SecPic1 from "./img/Pic1.png";

const Section1 = () => {
  return (
    <section className="flex justify-center items-center h-60v ">
      <div className=" flex flex-col justify-center items-center  mx-6 lg:flex-row">
        <div className="h-[169px] lg:w-d475w lg:d319h flex justify-center items-center flex-col ">
          <div className=" text-3xl font-bold text-blue-1 lg:text-5xl text-center">
            <a
              target="_blank"
              href="https://www.youtube.com/watch?v=4wfm2XjGyUM&list=PLBacOIBxGzbpm3nRPsyax5TkEtbSBKPi-&index=4"
              rel="noreferrer"
            >
              HOPEX - Insanity
            </a>
          </div>
          <div className=" text-sm mt-3 font-semibold lg:text-base text-center lg:text-left">
            🎧 Follow Nightblue on Apple Music ↪︎ http://bit.ly/NB3AppleMusic 🎧
            Follow Nightblue on Deezer ↪︎ http://bit.ly/NB3Deezer 🎧 Follow
            Nightblue on Spotify ↪︎ http://bit.ly/NB3Spotify 🎧 No Copyright
            Playlist ↪︎ http://bit.ly/NB3NoCopyrightPlaylist
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
