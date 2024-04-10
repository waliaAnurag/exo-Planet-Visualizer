import ExoplanetAnim from "../../assets/lottieAssets/exoPlanet.json"
import TessAnim from "../../assets/lottieAssets/tessAnim.json"
export const CardData: Array<any> = [
    {
        cardHeading: "DASHBOARD.CONFIMED_TOTAL",
        totalDiscovered: "5,602",
        untill: "untill",
        date: new Date(3 / 26 / 24),
        defaultOption: {
            loop: true,
            autoplay: true,
            animationData: ExoplanetAnim,
            rendererSettings: {
                preserveAspectRatio: "xMidYMid slice"
            }
        }
    },
    {
        cardHeading: "DASHBOARD.TESS_CONFIMED_TOTAL",
        totalDiscovered: "532",
        untill: "untill",
        date: new Date(3 / 26 / 24),
        defaultOption: {
            loop: true,
            autoplay: true,
            animationData: TessAnim,
            rendererSettings: {
                preserveAspectRatio: "xMidYMid slice"
            }
        }
    },
    {
        cardHeading: "DASHBOARD.CONFIMED_TOTAL",
        totalDiscovered: "5,602",
        untill: "untill",
        date: new Date(3 / 26 / 24),
        defaultOption: {
            loop: true,
            autoplay: true,
            animationData: ExoplanetAnim,
            rendererSettings: {
                preserveAspectRatio: "xMidYMid slice"
            }
        }
    }
]