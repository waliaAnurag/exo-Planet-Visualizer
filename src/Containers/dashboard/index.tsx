import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Lottie from "react-lottie";
import { CardData } from "./utils"
import ErrorBounday from "../../Components/ErrorBoundary";

function Dashboard() {
  const { t } = useTranslation();
  const navigate = useNavigate();


  function navigateTo(screenPath: string) {
    navigate(screenPath)
  }
  return (
    <ErrorBounday useDefaultFallback={true}>
      <div className="w-full h-screen p-[11px] bg-landingPage text-headingFontColor">
        <div className="h-[95px]" />
        <header className="flex flex-row justify-between gap-2">
          {
            CardData.map((item: any, index: number) => {
              return (
                <section key={index} className={`flex justify-between cursor-pointer h-auto bg-headingFontColor p-3 rounded-md border-solid border-2 border-indigo-500/100 w-[40%]`} onClick={() => navigateTo('/dashboard/info')}>
                  <section className="self-center w-[40%]">
                    <h2 className="text-lg text-landingPage font-display font-bold leading-normal">
                      {t(item.cardHeading)}
                    </h2>
                    <br />
                    <span className="text-lg text-landingPage font-display font-bold leading-normal">{item.totalDiscovered}</span>
                    <br />
                    <span className="text-lg text-landingPage font-display font-bold leading-normal">
                      {item.untill} <br /> {item.date}
                    </span>
                  </section>
                  <section className="w-[65%]">
                    <Lottie
                      options={item.defaultOption}
                      height={'80%'}
                      width={'100%'}
                    />
                  </section>
                </section>
              )
            })
          }

        </header>
        <div className="mt-[12px] p-[12px] bg-headingFontColor rounded-md border-solid border-2 border-indigo-500/100">

        </div>
      </div>
    </ErrorBounday>
  )
}

export default Dashboard
