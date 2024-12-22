import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from "react-i18next";
import Dropdown from '../dropdown';

function Header() {
    const {t, i18n } = useTranslation();
    const location = useLocation();
    const changeLanguage = (language:string) => {
        console.log(language)
      i18n.changeLanguage(language);
    };
    
    const menuItemsList=[
      {disp: t("ENGLISH"),value:"en"}, {disp:t("HINDI"),value:"hn"}, {disp:t("KANNADA"),value:"knd"}, {disp:t("MARATHI"),value:"mr"}
    ]
    return (
        <header className='flex p-4 fixed top-0 left-0 z-[10343] w-full bg-landingPage justify-between items-center'>
            <h1 className='font-display font-bold text-lg text-headingFontColor leading-normal'>CosmoGraphica</h1>
            <div className='flex'>
                {location.pathname.includes("dashboard") && <Link className='self-center' to="/"><span className="cursor-pointer pl-3 pr-3 font-display font-bold text-lg text-headingFontColor leading-normal">{t("Home")}</span></Link>}
                {location.pathname.includes("info") && <Link className='self-center' to="/dashboard"><span className="cursor-pointer pl-3 pr-3 font-display font-bold text-lg text-headingFontColor leading-normal self-center">{t("DASHBOARD_HEADER")}</span></Link>}
                <span className="cursor-pointer pl-3 pr-3 font-display font-bold text-lg text-headingFontColor leading-normal self-center">{t("ABOUT_ME")}</span>
                <Dropdown menuItemLists={menuItemsList} dropdownCollapsedText={t("ENGLISH")} menuItemOnClick={(_, item) => changeLanguage(item)} />
            </div>
        </header>
    )
}

export default Header
