import './App.css';
import SecPic3 from './img/feature-3.jpg';


const Section3 = () => {

    return (
        
        <section className='flex justify-center items-center h-60v'>
            
            <div className='flex justify-center mx-6'>
                <div className='w-d475w h-d319h flex justify-center items-center flex-col'>
                    <div className=' text-5xl font-bold text-blue-1'>彈性方案由你組合</div>
                    <div className=' text-base mt-3 font-semibold '>
                    就是享受不綁約的自由！<br />
                    xarehub享聚落 核心理念是提供最適合你與團隊的彈性空<br />
                    間選擇，自主管理時間、自助組合空間，讓你的時間使用<br />
                    效益翻倍。
                    </div>
                </div>
                <figure className=' w-d475w mx-6'>
                    <img src={SecPic3} alt='section pic 1' className=' h-[169px] md:h-d319h rounded-xl object-cover ' />
                </figure>
            </div>
        </section>
    )
}

export default Section3