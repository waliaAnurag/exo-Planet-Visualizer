import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { CardData } from "./utils"
import ErrorBounday from "../../Components/ErrorBoundary";
import Card from "./components/Card";

function Dashboard() {
  const { t } = useTranslation();
  const navigate = useNavigate();


  function navigateTo(screenPath: string) {
    navigate(screenPath)
  }
  return (
    <ErrorBounday useDefaultFallback={true}>
      <div className="w-full h-screen p-[11px] bg-landingPage text-headingFontColor">
        <div className="h-[95px]"/>
        <header className="flex flex-row justify-between gap-2">
          {
            CardData.map((item: any, index: number) => {
              return (
                <Card index={index} navigateTo={navigateTo} cardHeading={t(`${item.cardHeading}`)} totalDiscovered={item.totalDiscovered} 
                untill={item.untill} date={item.date} defaultOption={item.defaultOption}/>
             
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
