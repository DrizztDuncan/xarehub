import "./App.css";
import SecPic2 from "./img/Pic2.png";

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
            <a
              target="_blank"
              href="https://www.youtube.com/watch?v=tFLhHY6zAgo&list=PLBacOIBxGzbpm3nRPsyax5TkEtbSBKPi-&index=71"
              rel="noreferrer"
            >
              Spektrum & Sara Skinner - Keep You
            </a>
          </div>
          <p className=" text-sm mt-3 font-semibold lg:text-base lg:text-right text-center ">
            🎵 Spektrum 🎵 ► https://soundcloud.com/iamspektrum ►
            https://www.facebook.com/iamspektrum ►
            https://twitter.com/iamspektrum ►
            https://www.instagram.com/iamspektrum/
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section2;
