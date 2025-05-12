import '../css/Demonstration-area.css'
import map from '../assets/map.png'
import rayon from '../assets/img (1).jpg'
import panorama from '../assets/icon/panorama.png'

function DemonstrationArea() {
    return (
        <>
            <section className="Demonstration-area">
                <div className="demonstration-area__map-container">
                    <p className="demonstration-area-map-subtitle">Престижное расположение</p>
                    <h2 className="demonstration-area__map-title">Один из самых зелёных<br />районов столицы - Раменки</h2>
                    <img src={map} alt="map" />
                    <p className="demonstration-area__information">ЖК West Garden окружен Матвеевским лесом, набережной реки<br /> Раменки и природным заказником «Долина реки Сетунь»</p>
                    <div className="demonstration-area__panoram"><img src={panorama} alt="panorama-icon" /> Панорама района 360°</div>
                </div>
                <div className="demonstration-area__container">
                    <h2 className="demonstration-area__container-title">Наслайждайтесь видами<br />из окон своей квартиры</h2>
                    <img src={rayon} alt="rayon-img" />
                </div>
            </section>
        </>
    )
}

export { DemonstrationArea }