import { Link } from "react-router-dom"

function Apartments() {
    return (
        <section className="apartaments">
            <div className="apartaments__container">
                <h2 className="apartaments__title">Более 100 свободных квартир<br />редких форматов</h2>
                <div className="apartaments__information-block">
                    <h3 className="apartaments__information-title">Свободная планировка, <br />возможность объединить <br />квартиры до 500 м²</h3>
                    <p className="apartaments__information-text">Не ограничивайте себя при создании<br />жилого пространства Вашей мечты,<br />воспользуйтесь возможностью увеличения<br /> площади до комфортного Вам размера</p>
                    <Link className="apartaments__information-price">Узнать стоимость</Link>
                    <img src="" alt="" className="apartaments__information-img" />
                </div>
                <div className="apartaments__information-block">
                    <h3 className="apartaments__information-title">Настоящий<br />дровяной камин </h3>
                    <p className="apartaments__information-text">В пентхаусах предусмотрен дымоход<br />с возможностью установки камина, чтобы<br /> Вы получали наслаждение от живого тепла<br />в холодное время года</p>
                    <Link className="apartaments__information-price">Узнать стоимость</Link>
                    <img src="" alt="" className="apartaments__information-img" />
                </div>
                <div className="apartaments__information-block">
                    <h3 className="apartaments__information-title">Собственная<br />терраса до 17 м²</h3>
                    <p className="apartaments__information-text">Современная террасса<br /> с необыкновенными видами<br /> на благоустроенную набережную, МГУ им.<br /> М.В. Ломоносова и Воробьевы горы</p>
                    <Link className="apartaments__information-price">Узнать стоимость</Link>
                    <img src="" alt="" className="apartaments__information-img" />
                </div>
                <div className="apartaments__information-block">
                    <h3 className="apartaments__information-title">Увеличенная<br /> высота потолка</h3>
                    <p className="apartaments__information-text">Почувствуйте простор помещений в<br /> полной мере с увеличенной высотой<br /> потолка 4,2 м</p>
                    <Link className="apartaments__information-price">Узнать стоимость</Link>
                    <img src="" alt="" className="apartaments__information-img" />
                </div>
            </div>
        </section>
    )
}

export { Apartments }