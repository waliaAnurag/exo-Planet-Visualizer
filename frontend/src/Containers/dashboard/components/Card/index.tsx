import React from "react";
import Lottie from 'react-lottie';

interface IDefaultOp{
    loop: boolean;
    autoplay: boolean;
    animationData: any;
    rendererSettings: {
        preserveAspectRatio: string;
    }
}
interface IProps{
    index : number | string;
    navigateTo : (path:string)=>void;
    cardHeading : string;
    totalDiscovered : string;
    untill : string;
    date : string;
    defaultOption:IDefaultOp
}
function Card({index, navigateTo, cardHeading, totalDiscovered, untill, date, defaultOption}:IProps) {
    return (
        <section key={index} className={`flex justify-between cursor-pointer h-auto bg-headingFontColor p-3 rounded-md border-solid border-2 border-indigo-500/100 w-[40%]`} onClick={() => navigateTo('/dashboard/info')}>
            <section className="self-center w-[40%]">
                <h2 className="text-lg text-landingPage font-display font-bold leading-normal">
                    {cardHeading}
                </h2>
                <br />
                <h4 className="text-lg text-landingPage font-display font-bold leading-normal">{totalDiscovered}</h4>
                <br />
                <h4 className="text-lg text-landingPage font-display font-bold leading-normal">
                    {untill} <br /> {date}
                </h4>
            </section>
            <section className="w-[65%]">
                <Lottie
                    options={defaultOption}
                    height={'80%'}
                    width={'100%'}
                />
            </section>
        </section>
    )
}

export default Card
