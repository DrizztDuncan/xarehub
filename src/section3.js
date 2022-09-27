import "./App.css";
import SecPic3 from "./img/Pic3.png";

const Section3 = () => {
  return (
    <section className="flex justify-center items-center h-60v ">
      <div className=" flex flex-col justify-center items-center  mx-6 lg:flex-row">
        <div className=" h-[169px] lg:w-d475w lg:d319h flex justify-center items-center flex-col ">
          <div className=" text-2xl font-bold text-blue-1 lg:text-5xl ">
            Jade Key & BrillLion - Heartbreak (feat. ALYE)
          </div>
          <div className=" text-sm mt-3 font-semibold lg:text-base  text-center lg:text-left">
            🎧 Follow Nightblue on Apple Music ↪︎ http://bit.ly/NB3AppleMusic 🎧
            Follow Nightblue on Deezer ↪︎ http://bit.ly/NB3Deezer 🎧 Follow
            Nightblue on Spotify ↪︎ http://bit.ly/NB3Spotify 🎧 No Copyright
            Playlist ↪︎ http://bit.ly/NB3NoCopyrightPlaylist
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
