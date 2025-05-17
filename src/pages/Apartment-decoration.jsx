import '../css/Apartment-decoration.css'
import { useState } from 'react'
import benefitOfFinishing1 from '../assets/Frame 1956.jpg'
import benefitOfFinishing2 from '../assets/image 210.jpg'
import benefitOfFinishing3 from '../assets/Frame 1953.jpg'
import whiteFinishing1 from '../assets/Light_1.jpg'
import whiteFinishing2 from '../assets/Description.jpg'
import whiteFinishing3 from '../assets/Light_2.jpg'
import whiteFinishing4 from '../assets/Light_3.jpg'
import darkFinishing1 from '../assets/Description-2.jpg'
import darkFinishing2 from '../assets/Dark_1.jpg'
import darkFinishing3 from '../assets/Dark_2.jpg'
import darkFinishing4 from '../assets/Dark_3.jpg'
import lightImg from '../assets/light.png'
import darkImg from '../assets/dark.png'

function ApartmentDecoration() {

    const [lightVisible, setLightVisible] = useState(false)
    const [darkVisible, setDarkVisible] = useState(false)

    return (
        <section className="Apartment-decoration">
            <div className="container">
                <div className="Apartment-decoration__benefit-of-finishing-container">

                    <h2 className="Apartment-decoration__benefit-of-finishing-title">Отделка от застройщика</h2>
                    <p className="Apartment-decoration__benefit-of-finishing-subtitle">Экономьте на стоимости ремонта, покупая квартиру с готовой отделкой</p>

                    <div className="Apartment-decoration__benefit-of-finishing-information-containers">

                        <div className="Apartment-decoration__benefit-of-finishing-information-container">
                            <img src={benefitOfFinishing1} alt="benefitOfFinishing3" className="Apartment-decoration__benefit-of-finishing-information-img" />
                            <div className="Apartment-decoration__benefit-of-finishing-information-text-container">
                                <h3 className='Apartment-decoration__benefit-of-finishing-information-title'>Готовый<br />дизайн-проект</h3>
                                <p className="Apartment-decoration__benefit-of-finishing-information-text">
                                    Воспользуйтесь возможностью<br />
                                    сразу же заняться меблировкой и<br />
                                    благоустройством новой квартиры,<br />
                                    как только получите ключи
                                </p>
                            </div>
                        </div>

                        <div className="Apartment-decoration__benefit-of-finishing-information-container">
                            <img src={benefitOfFinishing2} alt="benefitOfFinishing3" className="Apartment-decoration__benefit-of-finishing-information-img" />
                            <div className="Apartment-decoration__benefit-of-finishing-information-text-container">
                                <h3 className='Apartment-decoration__benefit-of-finishing-information-title'>Чистота и тишина,<br />без шума и пыли</h3>
                                <p className="Apartment-decoration__benefit-of-finishing-information-text">
                                    Забудьте шум от «бесконечного<br />
                                    ремонта» соседей и лифт,<br />
                                    декорированный защитными<br />
                                    материалами
                                </p>
                            </div>
                        </div>

                        <div className="Apartment-decoration__benefit-of-finishing-information-container">
                            <img src={benefitOfFinishing3} alt="benefitOfFinishing3" className="Apartment-decoration__benefit-of-finishing-information-img" />
                            <div className="Apartment-decoration__benefit-of-finishing-information-text-container">
                                <h3 className='Apartment-decoration__benefit-of-finishing-information-title'>Выгода за счет<br />оптовых закупок</h3>
                                <p className="Apartment-decoration__benefit-of-finishing-information-text">
                                    Благодаря оптовым закупкам<br />
                                    застройщика, вы получаете<br />
                                    возможность сэкономить<br />
                                    на стоимости ремонта
                                </p>
                            </div>
                        </div>

                    </div>

                </div>

                <div className="Apartment-decoration__finishing-variants">
                    <h2 className="Apartment-decoration__finishing-variants-title">2 варианта отделки</h2>

                    <div className="apartament-decoration__border"></div>

                    <div className="Apartment-decoration__finishing">

                        <div className="Apartment-decoration__finishing-container">

                            {lightVisible &&
                                <div className="black-bacground">
                                    <div className="form-block">
                                        <button onClick={() => { setLightVisible(!lightVisible) }} className="exit">×</button>
                                        <img src={lightImg} alt="" className='Apartment-decoration__light-img' />
                                        <div className="form-container">
                                            <h2 className="form-title">Получите дизайн-<br />буклет с подробным<br />описанием отделки<br />светлого интерьера</h2>
                                            <h3 className="form-subtitle">PDF, можно скачать прямо сейчас</h3>
                                            <form className="form">
                                                <input placeholder="+7 __ __-__-__" type="text" className="form-text-field" />
                                                <button onClick={() => { setLightVisible(!lightVisible) }} className="form-btn">Получить буклет</button>
                                                <p className="form-footer-text">Нажимая на кнопку, вы даёте согласие на<br />обработку персональных данных и соглашаетесь<br />с политикой конфиденциальности</p>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            }
                            <div className="Apartment-decoration__finishing-text-container">
                                <h3 className="Apartment-decoration__finishing-title">Светлая отделка</h3>
                                <button onClick={() => { setLightVisible(!lightVisible) }} className="Apartment-decoration__finishing-btn">Скачать дизайн-буклет</button>
                            </div>
                            <div className="Apartment-decoration__finishing-img-container">
                                <img src={whiteFinishing1} alt="White-Finishing-Img-1" className="img" />
                                <img src={whiteFinishing2} alt="White-Finishing-Img-2" className="img" />
                                <img src={whiteFinishing3} alt="White-Finishing-Img-3" className="img" />
                                <img src={whiteFinishing4} alt="White-Finishing-Img-4" className="img" />
                            </div>
                        </div>

                        <div className="apartament-decoration__border"></div>
                        <div className="Apartment-decoration__finishing-container">
                            {darkVisible &&
                                <div className="black-bacground">
                                    <div className="form-block">
                                        <button onClick={() => { setDarkVisible(!darkVisible) }} className="exit">×</button>
                                        <img src={darkImg} alt="" className='Apartment-decoration__dark-img' />
                                        <div className="form-container">
                                            <h2 className="form-title">Получите дизайн-<br />буклет с подробным<br />описанием отделки<br />светлого интерьера</h2>
                                            <h3 className="form-subtitle">PDF, можно скачать прямо сейчас</h3>
                                            <form className="form">
                                                <input placeholder="+7 __ __-__-__" type="text" className="form-text-field" />
                                                <button onClick={() => { setDarkVisible(!darkVisible) }} className="form-btn">Получить буклет</button>
                                                <p className="form-footer-text">Нажимая на кнопку, вы даёте согласие на<br />обработку персональных данных и соглашаетесь<br />с политикой конфиденциальности</p>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            }

                            <div className="Apartment-decoration__finishing-text-container">
                                <h3 className="Apartment-decoration__finishing-title">Тёмная отделка</h3>
                                <button onClick={() => { setDarkVisible(!darkVisible) }} className="Apartment-decoration__finishing-btn">Скачать дизайн-буклет</button>
                            </div>
                            <div className="Apartment-decoration__finishing-img-container">
                                <img src={darkFinishing1} alt="Dark-Finishing-img-1" />
                                <img src={darkFinishing2} alt="Dark-Finishing-img-2" />
                                <img src={darkFinishing3} alt="Dark-Finishing-img-3" />
                                <img src={darkFinishing4} alt="Dark-Finishing-img-4" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export { ApartmentDecoration }


