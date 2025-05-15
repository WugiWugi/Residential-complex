import '../css/Apartment-decoration.css'
import benefitOfFinishing1 from '../assets/Frame 1956.jpg'
import benefitOfFinishing2 from '../assets/image 210.jpg'
import benefitOfFinishing3 from '../assets/Frame 1953.jpg'


function ApartmentDecoration() {
    return (
        <section className="Apartment-decoration">

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
                            <h3 className='Apartment-decoration__benefit-of-finishing-information-title'>Чистота и тишина,<br />без шума и пыли</h3>
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
                <h2 className="Apartment-decoration__finishing-variants-title">Отделка от застройщика</h2>
                <div className="Apartment-decoration__white-finishing">
                    <h3 className="Apartment-decoration__white-finishing-title">Светлая отделка</h3>
                    <button className="Apartment-decoration__white-finishing-btn">Скачать дизайн-буклет</button>
                </div>
            </div>

        </section>
    )
}

export { ApartmentDecoration }