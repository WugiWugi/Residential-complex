import '../css/Start.css'
import img from '../assets/img.jpg'
import icon from '../assets/icon/award.svg'
import Features from '../assets/Features.png'
import district from '../assets/icon/start__logo.png'
import EstesLogoImg from '../assets/icon/Estes-header-logo.svg'

function Start() {
    return (
        <section className="start">
            <div className="start__container">

                <header className='header'>
                    <div className="header__container">
                        <img src={EstesLogoImg} alt="Estes Logo Img" />
                        <div className="header__contacts-container">
                            <p className="header__contacts">+7 495 845 19 34</p>
                        </div>
                    </div>
                </header>

                <div className="start__info">
                    <div className="start__info-container">
                        <img src={district} alt="district-img" className="district" />
                        <h1 className="start__title">Жизнь в зеленом оазисе<br />в статусном районе Москвы</h1>
                        <p className="start__subtitle">Жилой комплекс бизнес-класса в 20 минутах от Кремля</p>
                    </div>
                </div>

                <div className="start__images">
                    <div className="start__main-image">
                        <img src={img} alt="img" className="start__main-img" />
                        <img src={icon} alt="icon" className="start__main-icon" />
                        <div className="start__collages-img">
                            <div className="start__queue-container">
                                <div className="start__queue">1 очередь <span className="start__text-collor-green">2022</span></div>
                                <div className="start__queue">2 очередь <span className="start__text-collor-green">2023</span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="start__calages">
                    <img src={Features} alt="" />
                </div>
            </div>

        </section>
    )
}

export { Start }

