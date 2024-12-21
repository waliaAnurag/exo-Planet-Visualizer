import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from "react-i18next";
import { useState } from 'react';

interface IProps{
  showModal:boolean;
  setShowModal:(status:boolean) =>void;
}
function TabelConfigurator({showModal,setShowModal}:IProps) {

  const {t } = useTranslation();
 
  return showModal ? (
    <div
        className="fixed z-50 bg-black bg-opacity-40 top-0 bottom-0 left-0 right-0 w-full h-full flex justify-center items-center"
    >

        <div className="modal bg-white rounded-lg p-4 w-[80%] h-[70%] overflow-y-auto overflow-x-hidden">
            <div className=" absolute bg-white w-[80%] left-[10%] top-[15%] pb-[20px] pt-[30px] font-display font-bold text-3xl text-center">
                {t("DASHBOARD.CONFIGURATOR.HEADING")}
            </div>
            <div className=" bg-indigo-50 rounded-full w-45 h-45 absolute top-[13%] z-400 left-[88.6%] cursor-pointer" onClick={() => setShowModal(false)}>
                <FontAwesomeIcon size="2x" icon={faCircleXmark} />
            </div>
            <div className="m-3 font-display text-xl">
                
            </div>
        </div>
    </div>
) : null
}

export default TabelConfigurator
