import '../css/Test.css'
import TestImg from '../assets/Test-img-1.png'
import TestImg2 from '../assets/Test-img-2.png'
import penthouseImg from '../assets/penthouse.jpg'
import apartmentsImg from '../assets/apartments.jpg'
import planirovka from '../assets/planirovka.jpg'
import planirovka2 from '../assets/planirovka-2.jpg'
import planirovka3 from '../assets/planirovka-3.jpg'
import plosh from '../assets/plosh-1.jpg'
import plosh2 from '../assets/plosh-2.jpg'
import plosh3 from '../assets/plosh-3.jpg'
import telegram from '../assets/icon/telegram.png'
import telegram2 from '../assets/icon/telegram-1.png'
import telegram3 from '../assets/icon/telegram-2.png'
import { useState } from 'react'

function Test() {
    const [pagesVisible, setPajesVisible] = useState(0)
    const [checkbox, setCheckBox] = useState(false)
    const [text, setText] = useState('')
    function checkboxRegister(e) {
        setCheckBox(e.target.checked)
    }

    return (
        <section className="test">

            <div className="test__container">

                {pagesVisible > 0 &&
                    <div className="test__form">
                        <div className="test__form-header">
                            <buton onClick={() => { setPajesVisible(pagesVisible - 1) }} className="test__form-btn-back">← Назад</buton>
                            <div className="test__form-pages-container">
                                <div className={`test__form-pages ${pagesVisible === 1 && `active`}`}></div>
                                <div className={`test__form-pages ${pagesVisible === 2 && `active`}`} ></div>
                                <div className={`test__form-pages ${pagesVisible === 3 && `active`}`}></div>
                                <div className={`test__form-pages ${pagesVisible === 4 && `active`}`}></div>
                            </div>
                        </div>

                        {pagesVisible === 1 && <div className="test__form-content">
                            <h2 className="test__form-title">Какая недвижимость<br />вас интересует?</h2>
                            <div className="test__form-img-containers">
                                <div className="test__form-img-container">
                                    <input type="checkbox" className='test__form-checkbox' onChange={checkboxRegister} />
                                    <img src={apartmentsImg} alt="form img" className="test__form-img" />
                                    <h3 className="test__form-img-title">Квартиры</h3>
                                </div>
                                <div className="test__form-img-container">
                                    <input type="checkbox" className='test__form-checkbox' onChange={checkboxRegister} />
                                    <img src={penthouseImg} alt="form img" className="test__form-img" />
                                    <h3 className="test__form-img-title">Пентхаусы</h3>
                                </div>
                            </div>
                            <button onClick={() => { { checkbox && setPajesVisible(pagesVisible + 1); setCheckBox(false) } }} className={`test__form-next ${checkbox && `active-next-btn`}`}>Дальше</button>
                        </div>}
                        {pagesVisible === 2 && <div className="test__form-content">
                            <h2 className="test__form-title">Какая планировка<br />вам подходит?</h2>
                            <div className="test__form-img-containers">
                                <div className="test__form-img-container">
                                    <input type="checkbox" className='test__form-checkbox' onChange={checkboxRegister} />
                                    <img src={planirovka} alt="form img" className="test__form-img" />
                                    <h3 className="test__form-img-title">Студия</h3>
                                </div>
                                <div className="test__form-img-container">
                                    <input type="checkbox" className='test__form-checkbox' onChange={checkboxRegister} />
                                    <img src={planirovka2} alt="form img" className="test__form-img" />
                                    <h3 className="test__form-img-title">1-2 спальни</h3>
                                </div>
                                <div className="test__form-img-container">
                                    <input type="checkbox" className='test__form-checkbox' onChange={checkboxRegister} />
                                    <img src={planirovka3} alt="form img" className="test__form-img" />
                                    <h3 className="test__form-img-title">3-4 спальни</h3>
                                </div>
                            </div>
                            <button onClick={() => { checkbox && setPajesVisible(pagesVisible + 1); setCheckBox(false) }} className={`test__form-next ${checkbox && `active-next-btn`}`}>Дальше</button>
                        </div>}
                        {pagesVisible === 3 && <div className="test__form-content">
                            <h2 className="test__form-title">Какую площадь объекта<br />вы рассматриваете?</h2>
                            <div className="test__form-img-containers">
                                <div className="test__form-img-container">
                                    <input type="checkbox" className='test__form-checkbox' onChange={checkboxRegister} />
                                    <img src={plosh} alt="form img" className="test__form-img" />
                                    <h3 className="test__form-img-title">26 м² — 100 м²</h3>
                                </div>
                                <div className="test__form-img-container">
                                    <input type="checkbox" className='test__form-checkbox' onChange={checkboxRegister} />
                                    <img src={plosh2} alt="form img" className="test__form-img" />
                                    <h3 className="test__form-img-title">100 м² — 150 м²</h3>
                                </div>
                                <div className="test__form-img-container">
                                    <input type="checkbox" className='test__form-checkbox' onChange={checkboxRegister} />
                                    <img src={plosh3} alt="form img" className="test__form-img" />
                                    <h3 className="test__form-img-title">150 м² — 192 м²</h3>
                                </div>
                            </div>


                            <button onClick={() => { checkbox && setPajesVisible(pagesVisible + 1); setCheckBox(false) }} className={`test__form-next ${checkbox && `active-next-btn`}`}>Дальше</button>
                        </div>}
                        {pagesVisible === 4 && <div className="test__form-content">
                            <h2 className="test__form-telegram-title">Подобрали 3 варианта недвижимости<br />по вашим параметрам. Куда их прислать?</h2>
                            <div className="test__form-img-telegram-containers">
                                <div className="test__form-img-telegram-container">
                                    <input type="checkbox" className='test__form-telegram-checkbox' onChange={checkboxRegister} />
                                    <img src={telegram} alt="form img" className="test__form-telegram-img" />
                                    <h3 className="test__form-telegram-img-title">в Вотсап</h3>
                                </div>
                                <div className="test__form-img-telegram-container">
                                    <input type="checkbox" className='test__form-telegram-checkbox' onChange={checkboxRegister} />
                                    <img src={telegram2} alt="form img" className="test__form-telegram-img" />
                                    <h3 className="test__form-telegram-img-title">в Телеграм</h3>
                                </div>
                                <div className="test__form-img-telegram-container">
                                    <input type="checkbox" className='test__form-telegram-checkbox' onChange={checkboxRegister} />
                                    <img src={telegram3} alt="form img" className="test__form-telegram-img" />
                                    <h3 className="test__form-telegram-img-title">в Вайбер</h3>
                                </div>
                            </div>
                            <form className="test__form-container">
                                <input onChange={(e) => setText(e.target.value)} placeholder='+7__ __-__-__' type="text" className='test__form-text-field' />
                                <button onClick={(e) => { e.preventDefault(); checkbox && text.length > 0 && setPajesVisible(0); setCheckBox(false); setText('') }} className={`test__form-get-data ${checkbox && text.length > 0 && `active-next-btn`}`}>Получить варианты в Телеграм</button>
                            </form>
                            <p className="test__form-text">Нажимая на кнопку, вы даёте согласие на обработку персональных данных и соглашаетесь<br />c политикой конфиденциальности</p>
                        </div>}
                    </div>}

                <h2 className="test__title">Какая квартира<br /> подойдет именно вам?</h2>
                <p className="test__subtitle">Ответьте на 4 вопроса чтобы подобрать<br />идеальный вариант недвижимости</p>
                <button onClick={() => { setPajesVisible(1) }} className="test__btn">Пройти тест</button>
                <div className="test__img-container">
                    <img src={TestImg} alt="TestImg" />
                    <img src={TestImg2} alt="TestImg" />
                </div>
            </div>


        </section>
    )
}

export { Test }