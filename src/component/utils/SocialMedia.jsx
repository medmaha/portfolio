import "./socialMedia.css"
import { useContext } from "react"
import { GlobalContext } from "../../Portfolio"
import WhatsappContact from "./WhatsappContact"

export default function SocialMedia() {
    const { toggleModal } = useContext(GlobalContext)

    const myEmail = "toure925@outlook.com"

    return (
        <>
            <div className="fixed z-10 primary-bg top-[65px] left-[0] w-full max-w-[35px] md:max-w-[50px] h-[calc(100vh-65px)]">
                <ul className="h-full flex justify-center gap-10 flex-col ">
                    <li className="flex justify-center">
                        <a
                            className=""
                            href="https://github.com/medmaha"
                            data-github
                            target="_blank"
                            rel="noreferrer"
                            title="Github"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 1984 2048"
                                width="24"
                                height="24"
                                className="fill-slate-800 dark:fill-slate-100"
                            >
                                <path
                                    transform="scale(4 4) translate(0 0)"
                                    d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                                />
                            </svg>
                        </a>
                    </li>
                    <li className="  flex justify-center">
                        <a
                            className=""
                            href="https://www.linkedin.com/in/medmaha/"
                            target="_blank"
                            rel="noreferrer"
                            data-linkedin
                            title="Linkedin"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 44 40"
                            >
                                <g
                                    fill="none"
                                    fillRule="evenodd"
                                    stroke="none"
                                    strokeWidth="1"
                                >
                                    <g
                                        fill="#007EBB"
                                        transform="translate(-702.000000, -265.000000)"
                                    >
                                        <path d="M746,305 L736.2754,305 L736.2754,290.9384 C736.2754,287.257796 734.754233,284.74515 731.409219,284.74515 C728.850659,284.74515 727.427799,286.440738 726.765522,288.074854 C726.517168,288.661395 726.555974,289.478453 726.555974,290.295511 L726.555974,305 L716.921919,305 C716.921919,305 717.046096,280.091247 716.921919,277.827047 L726.555974,277.827047 L726.555974,282.091631 C727.125118,280.226996 730.203669,277.565794 735.116416,277.565794 C741.21143,277.565794 746,281.474355 746,289.890824 L746,305 L746,305 Z M707.17921,274.428187 L707.117121,274.428187 C704.0127,274.428187 702,272.350964 702,269.717936 C702,267.033681 704.072201,265 707.238711,265 C710.402634,265 712.348071,267.028559 712.41016,269.710252 C712.41016,272.34328 710.402634,274.428187 707.17921,274.428187 L707.17921,274.428187 L707.17921,274.428187 Z M703.109831,277.827047 L711.685795,277.827047 L711.685795,305 L703.109831,305 L703.109831,277.827047 L703.109831,277.827047 Z" />
                                    </g>
                                </g>
                            </svg>
                        </a>
                    </li>
                    <li className="  flex justify-center">
                        <a
                            className=""
                            href="https://twitter.com/MahamedToure4"
                            data-twitter
                            title="Twitter"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 48 40"
                            >
                                <g
                                    fill="none"
                                    fillRule="evenodd"
                                    stroke="none"
                                    strokeWidth="1"
                                >
                                    <g
                                        fill="#00AAEC"
                                        transform="translate(-300.000000, -164.000000)"
                                    >
                                        <path d="M348,168.735283 C346.236309,169.538462 344.337383,170.081618 342.345483,170.324305 C344.379644,169.076201 345.940482,167.097147 346.675823,164.739617 C344.771263,165.895269 342.666667,166.736006 340.418384,167.18671 C338.626519,165.224991 336.065504,164 333.231203,164 C327.796443,164 323.387216,168.521488 323.387216,174.097508 C323.387216,174.88913 323.471738,175.657638 323.640782,176.397255 C315.456242,175.975442 308.201444,171.959552 303.341433,165.843265 C302.493397,167.339834 302.008804,169.076201 302.008804,170.925244 C302.008804,174.426869 303.747139,177.518238 306.389857,179.329722 C304.778306,179.280607 303.256911,178.821235 301.9271,178.070061 L301.9271,178.194294 C301.9271,183.08848 305.322064,187.17082 309.8299,188.095341 C309.004402,188.33225 308.133826,188.450704 307.235077,188.450704 C306.601162,188.450704 305.981335,188.390033 305.381229,188.271578 C306.634971,192.28169 310.269414,195.2026 314.580032,195.280607 C311.210424,197.99061 306.961789,199.605634 302.349709,199.605634 C301.555203,199.605634 300.769149,199.559408 300,199.466956 C304.358514,202.327194 309.53689,204 315.095615,204 C333.211481,204 343.114633,188.615385 343.114633,175.270495 C343.114633,174.831347 343.106181,174.392199 343.089276,173.961719 C345.013559,172.537378 346.684275,170.760563 348,168.735283" />
                                    </g>
                                </g>
                            </svg>
                        </a>
                    </li>
                    <li className="  flex justify-center">
                        <a
                            className=""
                            href="https://www.instagram.com/mahamedtoure4/"
                            data-instagram
                            rel="noreferrer"
                            title="Instagram"
                            target="_blank"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 48 48"
                            >
                                <defs>
                                    <linearGradient
                                        id="kYYaRNa"
                                        x1="32.629%"
                                        x2="65.396%"
                                        y1="-8.021%"
                                        y2="101.596%"
                                    >
                                        <stop offset="0%" stopColor="#4367DC" />
                                        <stop
                                            offset="4.289%"
                                            stopColor="#4C62D6"
                                        />
                                        <stop
                                            offset="11.42%"
                                            stopColor="#6654C7"
                                        />
                                        <stop
                                            offset="20.45%"
                                            stopColor="#8F3DAE"
                                        />
                                        <stop
                                            offset="23.41%"
                                            stopColor="#9E35A5"
                                        />
                                        <stop
                                            offset="45.12%"
                                            stopColor="#D42F7F"
                                        />
                                        <stop
                                            offset="82.42%"
                                            stopColor="#D73578"
                                        />
                                    </linearGradient>
                                    <linearGradient
                                        id="kYYaRNb"
                                        x1="73.858%"
                                        x2="22.723%"
                                        y1="9.887%"
                                        y2="95.862%"
                                    >
                                        <stop
                                            offset="33.04%"
                                            stopColor="#D42F7F"
                                        />
                                        <stop
                                            offset="100%"
                                            stopColor="#F7772E"
                                        />
                                    </linearGradient>
                                    <linearGradient
                                        id="kYYaRNc"
                                        x1="62.351%"
                                        x2="30.133%"
                                        y1="20.607%"
                                        y2="97.45%"
                                    >
                                        <stop
                                            offset="0%"
                                            stopColor="#9E35A5"
                                            stopOpacity="0"
                                        />
                                        <stop
                                            offset="45.12%"
                                            stopColor="#D42F7F"
                                            stopOpacity=".5"
                                        />
                                        <stop
                                            offset="75.24%"
                                            stopColor="#F7772E"
                                        />
                                        <stop
                                            offset="100%"
                                            stopColor="#FEF780"
                                        />
                                    </linearGradient>
                                </defs>
                                <g fill="none" fillRule="nonzero">
                                    <path
                                        fill="url(#kYYaRNa)"
                                        d="M47.7901639,14.1377049 C47.6721311,11.5934426 47.2655738,9.84918033 46.6754098,8.32786885 C46.0590164,6.75409836 45.2459016,5.41639344 43.9213115,4.09180328 C42.5967213,2.76721311 41.2590164,1.94098361 39.6852459,1.33770492 C38.1639344,0.747540984 36.4196721,0.340983607 33.8754098,0.22295082 C31.3180328,0.104918033 30.504918,0.0786885246 24.0131148,0.0786885246 C17.5081967,0.0786885246 16.695082,0.104918033 14.1508197,0.22295082 C11.6065574,0.340983607 9.86229508,0.747540984 8.34098361,1.33770492 C6.76721311,1.95409836 5.4295082,2.76721311 4.10491803,4.09180328 C2.78032787,5.41639344 1.95409836,6.75409836 1.35081967,8.32786885 C0.760655738,9.84918033 0.354098361,11.5934426 0.236065574,14.1377049 C0.118032787,16.695082 0.0918032787,17.5081967 0.0918032787,24 C0.0918032787,30.504918 0.118032787,31.3180328 0.236065574,33.8622951 C0.354098361,36.4065574 0.760655738,38.1508197 1.35081967,39.6721311 C1.96721311,41.2459016 2.78032787,42.5836066 4.10491803,43.9081967 C5.4295082,45.2327869 6.76721311,46.0590164 8.34098361,46.6622951 C9.86229508,47.252459 11.6065574,47.6590164 14.1508197,47.7770492 C16.7081967,47.895082 17.5213115,47.9213115 24.0131148,47.9213115 C30.5180328,47.9213115 31.3311475,47.895082 33.8754098,47.7770492 C36.4196721,47.6590164 38.1639344,47.252459 39.6852459,46.6622951 C41.2590164,46.0459016 42.5967213,45.2327869 43.9213115,43.9081967 C45.2459016,42.5836066 46.0721311,41.2459016 46.6754098,39.6721311 C47.2655738,38.1508197 47.6721311,36.4065574 47.7901639,33.8622951 C47.9081967,31.304918 47.9344262,30.4918033 47.9344262,24 C47.9344262,17.5081967 47.9081967,16.6819672 47.7901639,14.1377049 Z M43.4885246,33.6655738 C43.3836066,36 42.9901639,37.2721311 42.6622951,38.1114754 C42.2295082,39.2262295 41.704918,40.0262295 40.8655738,40.8655738 C40.0262295,41.704918 39.2262295,42.2163934 38.1114754,42.6622951 C37.2721311,42.9901639 36,43.3836066 33.6655738,43.4885246 C31.147541,43.6065574 30.3868852,43.6327869 24,43.6327869 C17.6131148,43.6327869 16.852459,43.6065574 14.3344262,43.4885246 C12,43.3836066 10.7278689,42.9901639 9.88852459,42.6622951 C8.77377049,42.2295082 7.97377049,41.704918 7.13442623,40.8655738 C6.29508197,40.0262295 5.78360656,39.2262295 5.33770492,38.1114754 C5.00983607,37.2721311 4.61639344,36 4.51147541,33.6655738 C4.39344262,31.147541 4.36721311,30.3868852 4.36721311,24 C4.36721311,17.6131148 4.39344262,16.852459 4.51147541,14.3344262 C4.61639344,12 5.00983607,10.7278689 5.33770492,9.88852459 C5.7704918,8.77377049 6.29508197,7.97377049 7.13442623,7.13442623 C7.97377049,6.29508197 8.77377049,5.78360656 9.88852459,5.33770492 C10.7278689,5.00983607 12,4.61639344 14.3344262,4.51147541 C16.852459,4.39344262 17.6131148,4.36721311 24,4.36721311 C30.3868852,4.36721311 31.147541,4.39344262 33.6655738,4.51147541 C36,4.61639344 37.2721311,5.00983607 38.1114754,5.33770492 C39.2262295,5.7704918 40.0262295,6.29508197 40.8655738,7.13442623 C41.704918,7.97377049 42.2163934,8.77377049 42.6622951,9.88852459 C42.9901639,10.7278689 43.3836066,12 43.4885246,14.3344262 C43.6065574,16.852459 43.6327869,17.6131148 43.6327869,24 C43.6327869,30.3868852 43.5934426,31.147541 43.4885246,33.6655738 Z"
                                    />
                                    <path
                                        fill="url(#kYYaRNb)"
                                        d="M24,11.7114754 C17.2065574,11.7114754 11.7114754,17.2196721 11.7114754,24 C11.7114754,30.7934426 17.2196721,36.2885246 24,36.2885246 C30.7803279,36.2885246 36.2885246,30.7803279 36.2885246,24 C36.2885246,17.2065574 30.7934426,11.7114754 24,11.7114754 Z M24,31.9737705 C19.5934426,31.9737705 16.0262295,28.4065574 16.0262295,24 C16.0262295,19.5934426 19.5934426,16.0262295 24,16.0262295 C28.4065574,16.0262295 31.9737705,19.5934426 31.9737705,24 C31.9737705,28.4065574 28.4065574,31.9737705 24,31.9737705 Z"
                                    />
                                    <circle
                                        cx="36.774"
                                        cy="11.226"
                                        r="2.872"
                                        fill="#BC30A0"
                                    />
                                    <path
                                        fill="url(#kYYaRNc)"
                                        d="M0.0655737705,24 C0.0655737705,30.504918 0.0918032787,31.3180328 0.209836066,33.8622951 C0.327868852,36.4065574 0.73442623,38.1508197 1.32459016,39.6721311 C1.94098361,41.2459016 2.75409836,42.5836066 4.07868852,43.9081967 C5.40327869,45.2327869 6.74098361,46.0590164 8.3147541,46.6622951 C9.83606557,47.252459 11.5803279,47.6590164 14.1245902,47.7770492 C16.6819672,47.895082 17.495082,47.9213115 23.9868852,47.9213115 C30.4918033,47.9213115 31.304918,47.895082 33.8491803,47.7770492 C36.3934426,47.6590164 38.1377049,47.252459 39.6590164,46.6622951 C41.2327869,46.0459016 42.5704918,45.2327869 43.895082,43.9081967 C45.2196721,42.5836066 46.0459016,41.2459016 46.6491803,39.6721311 C47.2393443,38.1508197 47.6459016,36.4065574 47.7639344,33.8622951 C47.8819672,31.304918 47.9081967,30.4918033 47.9081967,24 C47.9081967,17.495082 47.8819672,16.6819672 47.7639344,14.1377049 C47.6459016,11.5934426 47.2393443,9.84918033 46.6491803,8.32786885 C46.0327869,6.75409836 45.2196721,5.41639344 43.895082,4.09180328 C42.5704918,2.76721311 41.2327869,1.94098361 39.6590164,1.33770492 C38.1377049,0.747540984 36.3934426,0.340983607 33.8491803,0.22295082 C31.2918033,0.104918033 30.4786885,0.0786885246 23.9868852,0.0786885246 C17.4819672,0.0786885246 16.6688525,0.104918033 14.1245902,0.22295082 C11.5803279,0.340983607 9.83606557,0.747540984 8.3147541,1.33770492 C6.74098361,1.95409836 5.40327869,2.76721311 4.07868852,4.09180328 C2.75409836,5.41639344 1.92786885,6.75409836 1.32459016,8.32786885 C0.73442623,9.84918033 0.327868852,11.5934426 0.209836066,14.1377049 C0.0918032787,16.6819672 0.0655737705,17.495082 0.0655737705,24 Z M4.38032787,24 C4.38032787,17.6131148 4.40655738,16.852459 4.52459016,14.3344262 C4.6295082,12 5.02295082,10.7278689 5.35081967,9.88852459 C5.78360656,8.77377049 6.30819672,7.97377049 7.14754098,7.13442623 C7.98688525,6.29508197 8.78688525,5.78360656 9.90163934,5.33770492 C10.7409836,5.00983607 12.0131148,4.61639344 14.347541,4.51147541 C16.8655738,4.39344262 17.6262295,4.36721311 24.0131148,4.36721311 C30.4,4.36721311 31.1606557,4.39344262 33.6786885,4.51147541 C36.0131148,4.61639344 37.2852459,5.00983607 38.1245902,5.33770492 C39.2393443,5.7704918 40.0393443,6.29508197 40.8786885,7.13442623 C41.7180328,7.97377049 42.2295082,8.77377049 42.6754098,9.88852459 C43.0032787,10.7278689 43.3967213,12 43.5016393,14.3344262 C43.6196721,16.852459 43.6459016,17.6131148 43.6459016,24 C43.6459016,30.3868852 43.6196721,31.147541 43.5016393,33.6655738 C43.3967213,36 43.0032787,37.2721311 42.6754098,38.1114754 C42.242623,39.2262295 41.7180328,40.0262295 40.8786885,40.8655738 C40.0393443,41.704918 39.2393443,42.2163934 38.1245902,42.6622951 C37.2852459,42.9901639 36.0131148,43.3836066 33.6786885,43.4885246 C31.1606557,43.6065574 30.4,43.6327869 24.0131148,43.6327869 C17.6262295,43.6327869 16.8655738,43.6065574 14.347541,43.4885246 C12.0131148,43.3836066 10.7409836,42.9901639 9.90163934,42.6622951 C8.78688525,42.2295082 7.98688525,41.704918 7.14754098,40.8655738 C6.30819672,40.0262295 5.79672131,39.2262295 5.35081967,38.1114754 C5.02295082,37.2721311 4.6295082,36 4.52459016,33.6655738 C4.40655738,31.147541 4.38032787,30.3868852 4.38032787,24 Z"
                                    />
                                </g>
                            </svg>
                        </a>
                    </li>
                    <li className="  flex justify-center">
                        <a
                            className=""
                            href="https://www.facebook.com/mahamedtoure4/"
                            data-facebook
                            title="Facebook"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 48 48"
                            >
                                <g
                                    fill="none"
                                    fillRule="evenodd"
                                    stroke="none"
                                    strokeWidth="1"
                                >
                                    <g
                                        fill="#4460A0"
                                        transform="translate(-200.000000, -160.000000)"
                                    >
                                        <path d="M225.638355,208 L202.649232,208 C201.185673,208 200,206.813592 200,205.350603 L200,162.649211 C200,161.18585 201.185859,160 202.649232,160 L245.350955,160 C246.813955,160 248,161.18585 248,162.649211 L248,205.350603 C248,206.813778 246.813769,208 245.350955,208 L233.119305,208 L233.119305,189.411755 L239.358521,189.411755 L240.292755,182.167586 L233.119305,182.167586 L233.119305,177.542641 C233.119305,175.445287 233.701712,174.01601 236.70929,174.01601 L240.545311,174.014333 L240.545311,167.535091 C239.881886,167.446808 237.604784,167.24957 234.955552,167.24957 C229.424834,167.24957 225.638355,170.625526 225.638355,176.825209 L225.638355,182.167586 L219.383122,182.167586 L219.383122,189.411755 L225.638355,189.411755 L225.638355,208 L225.638355,208 Z" />
                                    </g>
                                </g>
                            </svg>
                        </a>
                    </li>
                    <li className=" flex justify-center">
                        <button
                            className=""
                            href="#"
                            onClick={() => {
                                toggleModal((prev) => !prev)
                            }}
                            data-whatsapp
                            title="Whatsapp"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 48 48"
                            >
                                <g
                                    fill="none"
                                    fillRule="evenodd"
                                    stroke="none"
                                    strokeWidth="1"
                                >
                                    <g
                                        fill="#67C15E"
                                        transform="translate(-700.000000, -360.000000)"
                                    >
                                        <path d="M723.993033,360 C710.762252,360 700,370.765287 700,383.999801 C700,389.248451 701.692661,394.116025 704.570026,398.066947 L701.579605,406.983798 L710.804449,404.035539 C714.598605,406.546975 719.126434,408 724.006967,408 C737.237748,408 748,397.234315 748,384.000199 C748,370.765685 737.237748,360.000398 724.006967,360.000398 L723.993033,360.000398 L723.993033,360 Z M717.29285,372.190836 C716.827488,371.07628 716.474784,371.034071 715.769774,371.005401 C715.529728,370.991464 715.262214,370.977527 714.96564,370.977527 C714.04845,370.977527 713.089462,371.245514 712.511043,371.838033 C711.806033,372.557577 710.056843,374.23638 710.056843,377.679202 C710.056843,381.122023 712.567571,384.451756 712.905944,384.917648 C713.258648,385.382743 717.800808,392.55031 724.853297,395.471492 C730.368379,397.757149 732.00491,397.545307 733.260074,397.27732 C735.093658,396.882308 737.393002,395.527239 737.971421,393.891043 C738.54984,392.25405 738.54984,390.857171 738.380255,390.560912 C738.211068,390.264652 737.745308,390.095816 737.040298,389.742615 C736.335288,389.389811 732.90737,387.696673 732.25849,387.470894 C731.623543,387.231179 731.017259,387.315995 730.537963,387.99333 C729.860819,388.938653 729.198006,389.89831 728.661785,390.476494 C728.238619,390.928051 727.547144,390.984595 726.969123,390.744481 C726.193254,390.420348 724.021298,389.657798 721.340985,387.273388 C719.267356,385.42535 717.856938,383.125756 717.448104,382.434484 C717.038871,381.729275 717.405907,381.319529 717.729948,380.938852 C718.082653,380.501232 718.421026,380.191036 718.77373,379.781688 C719.126434,379.372738 719.323884,379.160897 719.549599,378.681068 C719.789645,378.215575 719.62006,377.735746 719.450874,377.382942 C719.281687,377.030139 717.871269,373.587317 717.29285,372.190836 Z" />
                                    </g>
                                </g>
                            </svg>
                        </button>
                    </li>
                    <li className="  flex justify-center">
                        <a
                            className=""
                            target="_blank"
                            rel="noreferrer"
                            href={`mailto:${myEmail}`}
                            data-email
                            title="Whatsapp"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-blue-600 dark:fill-slate-100"
                            >
                                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}
