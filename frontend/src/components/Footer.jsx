import LogoPescar from "../assets/pescarLogo.jpg";

export const Footer = () => {
    return (
        <div className='bottom-0 bg-slate-800 text-white w-full overflow-x-hidden lg:fixed lg:bottom-0'>
            <div style={{ height: '8vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <p className="font-bold">Celebrando 20 años en línea </p>
                <div>
                    <img className="h-8 w-8" src={LogoPescar}></img>
                </div>
            </div>
        </div>
    )
}
