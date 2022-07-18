import './App.css';
import Sec4Pic1 from './img/Group355.svg';
import Sec4Pic2 from './img/Group356.svg';
import Sec4Pic3 from './img/Group357.svg';
import Sec4Pic4 from './img/Group358.svg';
import Sec4Arr from './img/Path248.svg';
import Sec4BG from './img/Background_2.svg';


const Section4 = () => {

    return (
        <section className='flex justify-center h-60v '>
            <img src={Sec4BG} alt='section pic 1' className='w-full h-full object-cover' />
            <div className='flex justify-center items-center mx-3'>
                <div>
                    <img src={Sec4Pic1} alt="" />
                    <div>選擇日期與空間條件</div>
                </div>
                <div className='flex justify-center items-center'>                    
                    <img src={Sec4Arr} alt="sec arrow" />
                </div>
            </div>

            <div className='flex justify-center items-center mx-3'>
                <div>
                    <img src={Sec4Pic2} alt="" />
                    <div>選擇日期與空間條件</div>
                </div>
                <div className='flex justify-center items-center'>                    
                    <img src={Sec4Arr} alt="sec arrow" />
                </div>
            </div>
            
            <div className='flex justify-center items-center mx-3'>
                <div>
                    <img src={Sec4Pic4} alt="" />
                    <div>選擇日期與空間條件</div>
                </div>
                <div className='flex justify-center items-center'>                    
                    <img src={Sec4Arr} alt="sec arrow" />
                </div>
            </div>

            <div className='flex justify-center items-center mx-3'>
                <div>
                    <img src={Sec4Pic3} alt="" />
                    <div>選擇日期與空間條件</div>
                </div>
                <div className='flex justify-center items-center'>
                </div>
            </div>
        </section>
        
    )
}

export default Section4