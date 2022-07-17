import './App.css';
import SecPic1 from './img/sec_pic_1.jpg';


const Section1 = () => {

    return (
        
        <section className='flex justify-center '>
            
            <div className='flex justify-center '>
                <div className='w-d475w h-d319h'>
                    <div className=' text-5xl font-bold text-blue-1'>共享中的獨享</div>
                    <div className=' text-base '>
                        首創訂閱制空間會籍：App 上隨時預約座位，享受工作、學習、社交、創意空間零時差。
                        空間設計滿足共享環境中相互激盪想法，獨享單人亭中專注自我實現。
                    </div>
                </div>
                <figure className=' w-d475w '>
                    <img src={SecPic1} alt='section pic 1' className=' h-d319h rounded-xl  bg-cover' />
                </figure>
            </div>
        </section>
    )
}

export default Section1