import './App.css';
import SecPic1 from './img/sec_pic_1.jpg';


const Section1 = () => {

    return (
        
        <section className='flex justify-center items-center h-60v'>
            
            <div className='flex justify-center mx-6'>
                <div className='w-d475w h-d319h flex justify-center align-middle flex-col'>
                    <div className=' text-5xl font-bold text-blue-1'>共享中的獨享</div>
                    <div className=' text-base mt-3 font-semibold'>
                        首創訂閱制空間會籍：App 上隨時預約座位，享受工作、<br />
                        學習、社交、創意空間零時差。<br />                        
                        空間設計滿足共享環境中相互激盪想法，獨享單人亭中專<br />
                        注自我實現。
                    </div>
                </div>
                <figure className=' w-d475w mx-6'>
                    <img src={SecPic1} alt='section pic 1' className=' h-d319h rounded-xl  object-cover	' />
                </figure>
            </div>
        </section>
    )
}

export default Section1