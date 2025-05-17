import '../css/Footer.css'
import Estes from '../assets/icon/Estes-footer-logo.svg'
import map from '../assets/footer-map.png'
import district from '../assets/icon/start__logo.png'

function Footer() {
    return (
        <div className="footer__bacground">
            <div className="container">

                <div className="footer__text-block">
                    <h2 className="footer__title">Жилой комплекс «West Garden» —<br />все преимущества жизни на природе</h2>
                    <img src={district} alt="district img" className='district' />
                </div>

                <div className="footer__container">

                    <div className="footer__information-block">
                        <div className="footer__logo-container">
                            <img src={Estes} alt="Estes logo img" />
                        </div>
                        <div className="footer__location-information">
                            <p className="footer__location-office">Офис продаж</p>
                            <p className="footer__location-name">Москва, Локал наб. 2/4,<br />строение 17, офис 308</p>
                        </div>
                        <div className="footer__phone-information">
                            <p className="footer__phone">Телефон</p>
                            <p className="footer__phone-number">+7 495 805 19 34 <span className="working">работаем</span></p>
                        </div>
                    </div>

                    <div className="footer__map">
                        <img src={map} alt="map img" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export { Footer }