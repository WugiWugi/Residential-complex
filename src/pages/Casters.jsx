import '../css/Casters.css'

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
                        <img src="" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
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
                        <img src="" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export { Casters }