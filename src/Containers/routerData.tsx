import { routerType } from "../types/router.types";
import Dashboard from "./dashboard";
import DetailContainer from "./detailContainer";
import LandingPage from "./landingPage";

const routerData:routerType[]=[
    {
        path:"",
        element : <LandingPage/>,
        title: "Home"
    },
    {
        path:"dashboard",
        element : <Dashboard/>,
        title: "Home"
    },
    {
        path:"dashboard/info",
        element : <DetailContainer/>,
        title: "Home"
    }
]

export default routerData;