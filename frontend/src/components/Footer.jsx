import LogoPescar from "../assets/pescarLogo.jpg";
import LogoFacebook from "../assets/logos/facebook.png";
import LogoInstagram from "../assets/logos/instagram.png";
import LogoLinkedin from "../assets/logos/linkedin.png";
import LogoTwitter from "../assets/logos/twitter.png";
import LogoYoutube from "../assets/logos/youtube.png";

export const Footer = () => {
    return (
        <div className='bottom-0 bg-slate-800 text-white w-full overflow-x-hidden lg:fixed lg:bottom-0'>
            <div style={{ height: '8vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <p className="font-bold hidden sm:block mx-2">Celebrando 20 años en línea </p>
                <div className="flex" >
                    <a rel="noreferrer" href="https://www.facebook.com/pescarargentina" target="_blank">
                        <img className="h-8 w-8 mx-2" src={LogoFacebook}></img>
                    </a>
                    <a rel="noreferrer" href="https://www.instagram.com/fundacionpescar/" target="_blank">
                    <img className="h-8 w-8 mx-2" src={LogoInstagram}></img>
                    </a>
                    <a rel="noreferrer" href="https://www.linkedin.com/company/fundacionpescar/" target="_blank">
                    <img className="h-8 w-8 mx-2" src={LogoLinkedin}></img>
                    </a>
                    <a rel="noreferrer" href="https://twitter.com/FundacionPescar" target="_blank">
                    <img className="h-8 w-8 mx-2" src={LogoTwitter}></img>
                    </a>
                    <a rel="noreferrer" href="https://www.youtube.com/user/fundacionpescarargen" target="_blank">
                    <img className="h-8 w-8 mx-2" src={LogoYoutube}></img>
                    </a>
                    <a rel="noreferrer" href="https://www.pescar.org.ar/" target="_blank">
                    <img className="h-8 w-8 mx-2" src={LogoPescar}></img>
                    </a>
                </div>
            </div>
        </div>
    )
}
