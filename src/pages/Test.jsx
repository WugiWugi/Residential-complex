import '../css/Test.css'
import TestImg from '../assets/Test-img-1.png'
import TestImg2 from '../assets/Test-img-2.png'

function Test() {
    return (
<section className="test">
    <div className="test__container">
        <h2 className="test__title">Какая квартира<br /> подойдет именно вам?</h2>
        <p className="test__subtitle">Ответьте на 4 вопроса чтобы подобрать<br />идеальный вариант недвижимости</p>
        <button className="test__btn">Пройти тест</button>
        <div className="test__img-container">
            <img src={TestImg} alt="TestImg" />
            <img src={TestImg2} alt="TestImg" />
        </div>
    </div>
</section>
    )
}

export { Test }