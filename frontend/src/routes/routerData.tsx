import { routerType } from "./types/router.types";
import Dashboard from "../Containers/dashboard";
import DetailContainer from "../Containers/detailContainer";
import LandingPage from "../Containers/landingPage";

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