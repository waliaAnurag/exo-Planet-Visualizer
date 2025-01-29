import React from "react";
import Lottie from "react-lottie";
import ErrorAnim from "../../assets/lottieAssets/defaultError.json"

function ErrorDefault() {
    return (
        <div className="pt-10 h-auto">
            <div className="text-center">Ooops !! Something got broken...</div>
            <Lottie
                options={{
                    loop: true,
                    autoplay: true,
                    animationData: ErrorAnim,
                   
                }}
                height={'30%'}
                width={'30%'}
            />
        </div>
    )
}

export default ErrorDefault
