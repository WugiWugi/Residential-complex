import '../css/Demonstration-area.css'
import map from '../assets/map.png'
import rayon from '../assets/img (1).jpg'
import panorama from '../assets/icon/panorama.png'
import women from '../assets/women.png'


function DemonstrationArea() {

    return (
        <>
            <section className="Demonstration-area">
                    <div className="demonstration-area__map-container">
                        <p className="demonstration-area-map-subtitle">Престижное расположение</p>
                        <h2 className="demonstration-area__map-title">Один из самых зелёных<br />районов столицы - Раменки</h2>
                        <img src={map} alt="map" />
                        <p className="demonstration-area__information">ЖК West Garden окружен Матвеевским лесом, набережной реки<br /> Раменки и природным заказником «Долина реки Сетунь»</p>
                        <div className="demonstration-area__panoram"><img src={panorama} alt="panorama-icon" /> Панорама района 360°</div>
                    </div>
                    <div className="demonstration-area__container">
                        <h2 className="demonstration-area__container-title">Наслайждайтесь видами<br />из окон своей квартиры</h2>
                        <div className="demonstration-area__img-container">
                            <img src={rayon} alt="rayon-img" />
                            <img src={rayon} alt="rayon-img" />
                            <img src={rayon} alt="rayon-img" />
                            <div className="demonstration-area__rayon-demonstration-btn">
                                <button className="demonstration-area__poklonnaya-Mountain">Поклонная Гора</button>
                                <button className="demonstration-area__moscow-city">Москва Сити</button>
                                <button className="demonstration-area__matveevsky-forest">Матвеевский лес</button>
                                <button className="demonstration-area__ramenki-district">Район раменки</button>
                            </div>
                        </div>
                    </div>

                    <div className="persional__presentation">
                        <div className="persional__presentation-container">
                            <h2 className="persional__presentation-subtitle">СПЕЦИАЛЬНО ДЛЯ ВАС</h2>
                            <h1 className="persional__presentation-title">Персональная<br />презентация West Garden</h1>
                            <div className="persional__presentation-list-container">
                                <ul className="persional__presentation-list">
                                    <li className="persional__presentation-list-item">Подробно расскажем про жилой комплекс</li>
                                    <li className="persional__presentation-list-item">Ознакомитесь со всеми планировками и ценами</li>
                                    <li className="persional__presentation-list-item">Прогуляетесь по благоустроенной набережной</li>
                                </ul>
                            </div>
                            <div className="border"></div>
                            <form className="persional__presentation-form">
                                <label htmlFor="" className="persional__presentation-form-title">Закрепить за номером</label><br />
                                <input placeholder='+7 ___ ___-__-__' type="text" className="pesrional__presentation-form-text-field" />
                                <button className="pesrional__presentation-form-btn">Записаться на презентацию</button>
                            </form>
                            <p className="persional__presentation-footer">Нажимая на кнопку, вы даёте согласие на обработку персональных данных и соглашаетесь<br /> с политикой конфиденциальности</p>
                        </div>
                        <div className="persional__presentation__women-img">
                            <img src={women} alt="Women-img" />
                            <p className="persional__presentation__women-name">Алёна<br />Кирющенко</p>
                            <p className="persional__presentation__women-specialisation">ВЕДУЩИЙ ЭКСПЕРТ<br /> ПО НЕДВИЖИМОСТИ<br /> В ESTES</p>
                        </div>
                    </div>
            </section>
        </>
    )
}

export { DemonstrationArea }