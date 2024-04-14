import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Lottie from 'react-lottie';

import Button from "../../Components/buttons";

import MainLoader from "../../assets/lottieAssets/MainLoader.json"
import Astranaut from "../../assets/lottieAssets/SpaceMan.json"

function HomeScreen() {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: MainLoader,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    const newDefaultOptions = {
        loop: true,
        autoplay: true,
        animationData: Astranaut,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    }
    function navigateTo(screenPath:string){
        navigate(screenPath)
    }
    return (
        <div className='h-[100%] w-full left-0 overflow-auto'>

            <div className='desktop:flex desktop:h-7/10 tablet:h-auto tablet:pb-3 bg-landingPage'>
                <div className='tablet:my-10 tablet:mx-auto w-2/5 pl-3'>
                    <Lottie
                        options={defaultOptions}
                        height={'80%'}
                        width={'100%'}
                    />
                </div>
                <div className='w-3/5  h-1/2 desktop:m-[11%] tablet:my-10 tablet:mx-auto'>

                    <h2 className="font-display font-bold text-3xl text-headingFontColor leading-normal relative w-[max-content] font-mono before:absolute before:inset-0 before:bg-landingPage before:animate-typewriter after:absolute after:inset-0 after:w-[0.125em] after:animate-caret">
                        {t("LANDING_PAGE.MAIN_HEADING")}
                    </h2>
                    <h3 className="text-wrap font-display font-bold text-3xl text-headingFontColor leading-normal relative w-[max-content] font-mono before:absolute before:inset-0 before:bg-landingPage before:animate-typewriterSecond after:absolute after:inset-0 after:w-[0.125em] after:animate-caretFirst after:animation-delay-5000">
                        {t("LANDING_PAGE.APP_NAME")}
                    </h3>

                    <span className='text-lg opacity-0 text-headingFontColor font-display font-bold leading-normal animate-fadeInAnimation'>
                        {t("LANDING_PAGE.ABOUT_APP_ONE")}</span><br />
                    <span className='text-lg opacity-0 text-headingFontColor font-display font-bold leading-normal animate-fadeInAnimation'>
                        {t("LANDING_PAGE.ABOUT_APP_TWO")}
                    </span>
                </div>

            </div>
            <div className='w-full h-3/10'>
                <center className='my-10 mx-auto w-1/2'>
                    <Lottie
                        options={newDefaultOptions}
                        height={'80%'}
                        width={'100%'}
                    />
                </center>

                <div className='font-display font-bold text-3xl text-landingPage leading-normal mb-12 text-center w-full desktop:flex desktop:justify-center'>

                   {t("LANDING_PAGE.FINAL_CALL")}
                </div>
                <div className='my-2 mx-auto flex justify-center'>
                    <Button buttonText={t("LANDING_PAGE.BTN_TEXT")} buttonFunc={() => navigateTo("/dashboard")} buttonStyles={""}/>
                    
                </div>

            </div>
           
        </div>
    )
}

export default HomeScreen
