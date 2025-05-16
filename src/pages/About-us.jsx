import '../css/About-us.css'
import inteco from '../assets/inteco 1.jpg'
import logos from '../assets/icon/logos.svg'

function AboutUs() {

    return (

        <section className="about-us">
<div className="container">
            <div className="about-us__advantages">

                <img src={inteco} alt="Inteco Building img" className="about-us__advantages-img" />

                <div className="about-us__advantages-container">
                    <div className='about-us__information-block'>
                        <h2 className="about-us__advantages-title">Девелопер<br />ИНТЕКО</h2>

                        <p className="about-us__advantages-text">Реализует лучшие проекты в сфере <br />недвижимости на основе анализа<br />и прогноза предпочтений человека</p>

                        <ul className="about-us__advantages-information-list">

                            <li className="about-us__advantages-information-list-item">
                                20 лет
                                <ul className="about-us__advantages-information-sublist">
                                    <li className="about-us__advantages-information-sublist-item">
                                        на рынке недвижимости<br />Москвыи регионов
                                    </li>
                                </ul>
                            </li>

                            <li className="about-us__advantages-information-list-item">
                                80+ проектов
                                <ul className="about-us__advantages-information-sublist">
                                    <li className="about-us__advantages-information-sublist-item">Жилых домов сдано в москве</li>
                                </ul>
                            </li>

                            <li className="about-us__advantages-information-list-item">
                                5 000 000 м²
                                <ul className="about-us__advantages-information-sublist">
                                    <li className="about-us__advantages-information-sublist-item">общая площадь готовых<br />объектов</li>
                                </ul>
                            </li>

                            <li className="about-us__advantages-information-list-item">
                                500 сотрудников
                                <ul className="about-us__advantages-information-sublist">
                                    <li className="about-us__advantages-information-sublist-item">в штате компании</li>
                                </ul>
                            </li>

                        </ul>
                    </div>


                    <ul className="about-us__advantages-documentation-list">

                        <li className="about-us__advantages-documentation-list-item">
                            Документы West Garden
                            <ul className="about-us__advantages-documentation-sublist">

                                <li className="about-us__advantages-documentation-sublist-item">Проектная документация</li>
                                <li className="about-us__advantages-documentation-sublist-item">Разрешение на строительство</li>
                                <li className="about-us__advantages-documentation-sublist-item">Проектная декларация (1 очередь)</li>
                                <li className="about-us__advantages-documentation-sublist-item">Проектная декларация (2 очередь)</li>

                            </ul>

                        </li>

                    </ul>

                </div>
            </div>

            <div className="about-us__cans">
                <h2 className="about-us__cans-title">Самые выгодные условия<br />кредитования от 20 банков</h2>
                <div className="about-us__cans-logo-container">
                    <img src={logos} alt="logos-icon" />
                </div>
            </div>
            </div>
        </section>
    )

}

export { AboutUs }