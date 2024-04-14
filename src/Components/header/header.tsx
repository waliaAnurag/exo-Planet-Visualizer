import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from "react-i18next";

function Header() {
    const {t, i18n } = useTranslation();
    const location = useLocation();
    const changeLanguage = (language:string) => {
      i18n.changeLanguage(language);
    };
    
    return (
        <div className='flex p-4 fixed top-0 z-[10343] w-full overflow-hidden bg-landingPage justify-end'>
            {location.pathname.includes("dashboard") && <Link to="/"><div className="cursor-pointer pl-3 pr-3 font-display font-bold text-lg text-headingFontColor leading-normal">{ t("Home") }</div></Link>}
            {location.pathname.includes("info") && <Link to="/dashboard"><div className="cursor-pointer pl-3 pr-3 font-display font-bold text-lg text-headingFontColor leading-normal">{ t("DASHBOARD_HEADER") }</div></Link>}
            <div className="cursor-pointer pl-3 pr-3 font-display font-bold text-lg text-headingFontColor leading-normal">{t("ABOUT_ME")}</div>
            <div className="cursor-pointer pl-3 pr-3 font-display font-bold text-lg text-headingFontColor leading-normal">
                <select
                    name="languages"
                    id="languages"
                    onChange={(e) => changeLanguage(e.target.value)}
                >
                    <option value="en">{t("ENGLISH")}</option>
                    <option value="hn">{t("HINDI")}</option>
                    <option value="knd">{t("KANNADA")}</option>
                    <option value="mr">{t("MARATHI")}</option>
                </select>
            </div>
        </div>
    )
}

export default Header
