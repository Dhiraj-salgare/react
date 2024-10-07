import Card from "./Card";
import { useState } from "react";
import{FiChevronLeft,FiChevronRight} from 'react-icons/fi'

function Testimonial(props){

    

    let reviews =props.reviews;

    const[ind,setind]=useState(0);

    function leftShifthandler(){
        if(ind-1 < 0){
            setind(reviews.length-1)
        }
        else{
              setind(ind-1)
        }


    }

    function rightShifthandler(){

        if(ind+1>=reviews.length)
        {
            setind(0);
        }

        else{
        
        setind(ind+1)
        }
    }

    function surpriseHandler(){
        let rand=Math.floor(Math.random()*reviews.length)// we need from 0 to review length
        setind(rand);

    }
    return (
        <div className="w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-md">
           <Card review={reviews[ind]} reviews={reviews}></Card>

           <div className='flex text-3xl mt-5 gap-3 text-violet-400 font-bold mx-auto'>
                <button onClick={leftShifthandler} className='cursor-pointer hover:text-violet-500'>
                   <FiChevronLeft/>
                </button>
                <button  onClick={rightShifthandler} className='cursor-pointer hover:text-violet-500'>
                    <FiChevronRight/>
                </button>
            </div>

            <div className="mt-6">
                <button onClick={surpriseHandler}className='bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg'>Surprise me</button>
            </div>
        </div>
    )
}


export default Testimonial;
