import Lottie from "react-lottie";
import { useTranslation } from "react-i18next";
import ExoplanetAnim from "../../assets/lottieAssets/exoPlanet.json"
import TessAnim from "../../assets/lottieAssets/tessAnim.json"
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: ExoplanetAnim,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  const defaultOptionsTess = {
    loop: true,
    autoplay: true,
    animationData: TessAnim,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  function navigateTo(screenPath:string){
    navigate(screenPath)
}
  return (
    <div className="w-full h-screen left-0 top-[57px] pt-16 p-[11px] bg-landingPage text-headingFontColor">
      <div className="flex justify-between flex-wrap">

        <div className={`flex justify-between cursor-pointer  w-[30%] h-auto bg-headingFontColor p-3 rounded-md border-solid border-2 border-indigo-500/100`} onClick={() => navigateTo('/dashboard/info')}>
          <div className="self-center">
            <div className="text-lg text-landingPage font-display font-bold leading-normal">
              {t("DASHBOARD.CONFIMED_TOTAL")}
            </div>
            <br />
            <div className="text-lg text-landingPage font-display font-bold leading-normal">5,602</div>
            <br />
            <div className="text-lg text-landingPage font-display font-bold leading-normal">
              untill 03/26/24
            </div>
          </div>
          <div>
            <Lottie
              options={defaultOptions}
              height={'100%'}
              width={'100%'}
            />
          </div>
        </div>
        <div className={`flex justify-between cursor-pointer  w-[30%] h-auto bg-headingFontColor p-3 rounded-md border-solid border-2 border-indigo-500/100`} onClick={() => navigateTo('/dashboard/info')}>
          <div className="self-center">
            <div className="text-lg text-landingPage font-display font-bold leading-normal">
              TESS Confirmed planets
            </div>
            <br />
            <div className="text-lg text-landingPage font-display font-bold leading-normal">5,602</div>
            <br />
            <div className="text-lg text-landingPage font-display font-bold leading-normal">
              untill 03/26/24
            </div>
          </div>
          <div>
            <Lottie
              options={defaultOptionsTess}
              height={'100%'}
              width={'100%'}
            />
          </div>
        </div>
        <div className={`flex justify-between cursor-pointer  w-[30%] h-auto bg-headingFontColor p-3 rounded-md border-solid border-2 border-indigo-500/100`} onClick={() => navigateTo('/dashboard/info')}>
          <div className="self-center w-[40%]">
            <div className="text-lg text-landingPage font-display font-bold leading-normal">
              TESS Project Candidates
            </div>
            <br />
            <div className="text-lg text-landingPage font-display font-bold leading-normal">5,602</div>
            <br />
            <div className="text-lg text-landingPage font-display font-bold leading-normal">
              untill 03/26/24
            </div>
          </div>
          <div className="w-[60%]">
            <Lottie
              options={defaultOptionsTess}
              height={'100%'}
              style={{ width: "100%" }}
              width={'100%'}
            />
          </div>
        </div>
      </div>
      <div className="mt-[16px] h-max rounded-md text-landingPage bg-headingFontColor">
       Charts
      </div>

     

    </div>
  )
}

export default Dashboard
