import React, { useState } from "react";
import Card from "./Card";
import { FiChevronLeft, FiChevronRight  } from "react-icons/fi";

function Testimonial(props){
    let reviews=props.reviews;
const[index,setIndex]=useState(0);

    function leftShiftHandler(){
if(index -1 < 0){
setIndex(reviews.length -1);
}
else{
    setIndex(index-1);
}
    }
    function rightShiftHandler(){
if(index +1 >= reviews.length){
    setIndex(0);
}
else{
    setIndex(index+1);
}
    }
    function supriseHander(){
            setIndex(Math.floor(Math.random()*reviews.length));
    }
    return(
        <div className="w-[85vw] md:w-[700px] bg-white flex flex-col mt-10 p-10 justify-center transition-all duration-700 items-center hover:shadow-xl rounded-md">
            <Card  review = {reviews[index]} />



            <div className="flex text-3xl mt-12 gap-3 text-violet-400 font-bold mx-auto place-items-center  ">
                <button onClick={leftShiftHandler}
                className="cursor-pointer hover:text-violet-500">
                <FiChevronLeft />
                </button>
                <button className="cursor-pointer hover:text-violet-500" 
                 onClick={rightShiftHandler}>
                <FiChevronRight />
                </button>
            </div>


            <div className="mt-6">
                <button onClick={supriseHander}className="bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer text-lg text-white px-10 py-2 rounded-md font-bold  ">
                    Surprise Me
                </button>
            </div>


        </div>
    )
}

export default Testimonial;
