import '../css/Casters.css'
import riderLineSlide1 from '../assets/Rider-line-slide-1.jpg'
import riderLineSlide2 from '../assets/Rider-line-slide-2.jpg'
import riderLineSlide3 from '../assets/Rider-line-slide-3.jpg'
import riderLineSlide4 from '../assets/Rider-line-slide-4.jpg'
import riderLineSlide5 from '../assets/Rider-line-slide-5.jpg'
import riderLineSlide6 from '../assets/Rider-line-slide-6.jpg'
import riderLineSlide7 from '../assets/Rider-line-slide-7.jpg'
import parkLineSlide1 from '../assets/Park-line-slide-1.jpg'
import parkLineSlide2 from '../assets/Park-line-slide-2.jpg'
import parkLineSlide3 from '../assets/Park-line-slide-3.jpg'

function Casters() {
    return (
        <section className="casters">

            <div className="casters__container">
                <h2 className="casters__title">Жилой комплекс состоит<br />из двух кластеров</h2>
                <div className="casters__river-line">
                    <div className="casters__river-line-container">
                        <div className="casters__river-title__container">
                            <h3 className="casters__river-line-title">River Line</h3>
                            <p className="casters__river-line-subtitle">Восемь жилых корпусов по 12-14 этажей<br />выстроенны вдоль реки ременки</p>
                        </div>
                        <div className="casters__river-button-container">
                            <button className="casters__river-line-btn">Посмотреть планировки</button>
                        </div>
                    </div>
                    <div className="casters__river-line-img">
                        <img src={riderLineSlide1} alt="Rider slide 1" />
                        <img src={riderLineSlide2} alt="Rider slide 2" />
                        <img src={riderLineSlide3} alt="Rider slide 3" />
                        <img src={riderLineSlide4} alt="Rider slide 4" />
                        <img src={riderLineSlide5} alt="Rider slide 5" />
                        <img src={riderLineSlide6} alt="Rider slide 6" />
                        <img src={riderLineSlide7} alt="Rider slide 7" />
                    </div>
                </div>

                <div className="casters__park-line">
                    <div className="casters__park-line-container">
                        <div className="casters__park-title__container">
                            <h3 className="casters__park-line-title">Park Line</h3>
                            <p className="casters__park-line-subtitle">Семь 14-этажных жилых корпусов,<br />расположенных вдоль Матвеевского леса</p>
                        </div>
                        <div className="casters__park-button-container">
                            <button className="casters__park-line-btn">Посмотреть планировки</button>
                        </div>
                    </div>
                    <div className="casters__park-line-img">
                        <img src={parkLineSlide1} alt="Park slide 1" />
                        <img src={parkLineSlide2} alt="Park slide 2" />
                        <img src={parkLineSlide3} alt="Park slide 3" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export { Casters }