import { Link } from "react-router-dom"
import '../css/Apartments.css'
import lobbyImg1 from "../assets/image-153.jpg"
import lobbyImg2 from "../assets/image-154.jpg"
import lobbyImg3 from "../assets/image-155.jpg"
import lobbyImg4 from "../assets/image-156.jpg"
import apartmentsImg1 from "../assets/img-0.jpg"
import apartmentsImg2 from "../assets/img-1.jpg"
import apartmentsImg3 from "../assets/img-2.jpg"
import apartmentsImg4 from "../assets/img-3.jpg"


function Apartments() {
    return (
        <section className="room">
            <div className="container">
                <div className="room__lobby-container">
                    <h2 className="room__lobby-title">Современная эстетика лобби</h2>

                    <div className="room__lobby-information-block">
                        <h3 className="room__lobby-information-title">Центральные входные группы</h3>
                        <nav className="room__lobby-information-list-container">
                            <ul className="room__lobby-information-list">
                                <li className="room__lobby-information-list-item">Зоны ожидания</li>
                                <li className="room__lobby-information-list-item">Пост охраны</li>
                                <li className="room__lobby-information-list-item">Переговорная комната</li>
                                <li className="room__lobby-information-list-item">Колясочная</li>
                            </ul>
                        </nav>
                        <div className="room__lobby-information-img">
                            <img src={lobbyImg1} alt="lobbyImg1" />
                            <img src={lobbyImg2} alt="lobbyImg2" />
                        </div>
                    </div>
                    <div className="room__lobby-information-block">
                        <h3 className="room__lobby-information-title">Лифтовый холл</h3>
                        <nav className="room__lobby-information-list-container">
                            <ul className="room__lobby-information-list">
                                <li className="room__lobby-information-list-item">2-4 лифта</li>
                                <li className="room__lobby-information-list-item">Грузовые и пассажирские</li>
                                <li className="room__lobby-information-list-item">Ведущие производители</li>
                            </ul>
                        </nav>
                        <div className="room__lobby-information-img">
                            <img src={lobbyImg3} alt="lobbyImg3" />
                            <img src={lobbyImg4} alt="lobbyImg4" />
                        </div>
                    </div>
                </div>

                <div className="room__apartments-container">
                    <h2 className="room__apartments-title">Более 100 свободных квартир<br />редких форматов</h2>

                    <div className="room__apartments-information-block">
                        <div className="room__appartments-text-container">
                            <h3 className="room__apartments-information-title">Свободная планировка, <br />возможность объединить <br />квартиры до 500 м²</h3>
                            <p className="room__apartments-information-text">Не ограничивайте себя при создании<br />жилого пространства Вашей мечты,<br />воспользуйтесь возможностью увеличения<br /> площади до комфортного Вам размера</p>
                            <Link className="room__apartments-information-price">Узнать стоимость</Link>
                        </div>
                        <img src={apartmentsImg1} alt="apartmentsImg1" className="room__apartments-information-img" />
                    </div>

                    <div className="room__apartments-information-block">
                        <div className="room__appartments-text-container">
                            <h3 className="room__apartments-information-title">Настоящий<br />дровяной камин </h3>
                            <p className="room__apartments-information-text">В пентхаусах предусмотрен дымоход<br />с возможностью установки камина, чтобы<br /> Вы получали наслаждение от живого тепла<br />в холодное время года</p>
                            <Link className="room__apartments-information-price">Узнать стоимость</Link>
                        </div>
                        <img src={apartmentsImg2} alt="apartmentsImg2" className="room__apartments-information-img" />
                    </div>

                    <div className="room__apartments-information-block">
                        <div className="room__appartments-text-container">
                            <h3 className="room__apartments-information-title">Собственная<br />терраса до 17 м²</h3>
                            <p className="room__apartments-information-text">Современная террасса<br /> с необыкновенными видами<br /> на благоустроенную набережную, МГУ им.<br /> М.В. Ломоносова и Воробьевы горы</p>
                            <Link className="room__apartments-information-price">Узнать стоимость</Link>
                        </div>
                        <img src={apartmentsImg3} alt="apartmentsImg3" className="room__apartments-information-img" />
                    </div>

                    <div className="room__apartments-information-block">
                        <div className="room__appartments-text-container">
                            <h3 className="room__apartments-information-title">Увеличенная<br /> высота потолка</h3>
                            <p className="room__apartments-information-text">Почувствуйте простор помещений в<br /> полной мере с увеличенной высотой<br /> потолка 4,2 м</p>
                            <Link className="room__apartments-information-price">Узнать стоимость</Link>
                        </div>
                        <img src={apartmentsImg4} alt="apartmentsImg4" className="room__apartments-information-img" />
                    </div>

                </div>
            </div>
        </section>
    )
}

export { Apartments }