import './App.css';
import SecPic2 from './img/feature-2.jpg';


const Section2 = () => {

    return (
        
        <section className='flex flex-col justify-center items-center h-60v md:flex-row '>
            <figure className=' w-d475w mx-6'>
                        <img src={SecPic2} alt='section pic 1' className=' w-[302px] rounded-xl  object-cover md:w-d475w md:d319h ' />
                </figure>
            <div className='flex justify-center mx-6'>
                <div className='w-d475w h-d319h flex justify-center align-middle flex-col'>
                    <div className=' text-5xl font-bold text-blue-1'>共創空間的無限可能</div>
                    <div className=' text-base mt-3 font-semibold'>
                    空間就是舞台，每個發生都是漣漪起點。
線上直播、線下交流，對外發表、內部培訓，團隊溝通、一人作業，xarehub享聚落 一站式空間服務，你最聰明彈性的選擇！
                </div>        
                </div>
            </div>
        </section>
    )
}

export default Section2