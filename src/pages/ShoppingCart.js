import React from 'react';
import "./shoppingCart_Style.css"
import png from './Product_icon.png';
import CloseButton from 'react-bootstrap/CloseButton';


function ShoppingCart() {
    return (
        <div className="shoppingCatBlock">
            <div className="mainTitle">
                <h1>Корзина</h1>
                <div className="title1">
                    <p>Главная/Корзина</p>
                    <p>Вернуться в магазин ></p>
                </div>
            </div>



            <div className="mainBlock">
                <div className="leftBlock">
                    <div className="productsBlock">
                        <div className="img">
                            <img src={png} className="image" alt="image" />
                        </div>
                        <div className="title2">
                            <p>Композиция шаров на день рождения</p>
                            <div className="countBlock">
                                <div className="count">
                                    <button className="countBtn">-</button>
                                    <div className="countNum">1</div>
                                    <button className="countBtn">+</button>
                                </div>

                            </div>
                        </div>
                        <div className="newPrice">1450р</div>
                        <div className="oldPrice">1540р</div>
                        <div className="deleteProduct">
                            <CloseButton />
                        </div>
                    </div>
                    <div className="productsBlock1">
                        <div className="img">
                            <img src={png} className="image" alt="image" />
                        </div>
                        <div className="title2">
                            <p>Композиция шаров на день рождения</p>
                            <div className="countBlock">
                                <div className="count">
                                    <button className="countBtn">-</button>
                                    <div className="countNum">1</div>
                                    <button className="countBtn">+</button>
                                </div>

                            </div>
                        </div>
                        <div className="newPrice">1450р</div>
                        <div className="oldPrice">1540р</div>
                        <div className="deleteProduct">
                            <CloseButton />
                        </div>
                    </div>
                    <div className="productsBlock2">
                        <div className="img">
                            <img src={png} className="image" alt="image" />
                        </div>
                        <div className="title2">
                            <p>Композиция шаров на день рождения</p>
                            <div className="countBlock">
                                <div className="count">
                                    <button className="countBtn">-</button>
                                    <div className="countNum">1</div>
                                    <button className="countBtn">+</button>
                                </div>

                            </div>
                        </div>
                        <div className="newPrice">1450р</div>
                        <div className="oldPrice">1540р</div>
                        <div className="deleteProduct">
                            <CloseButton />
                        </div>
                    </div>
                </div>
                <div className="rightBlock">
                    <div className="rBlockTitles">Детали заказа</div>
                    <div className="rBlockTitle1">
                        <p className="quantity">Количество</p>
                        <p className="qntNum">1шт</p>
                    </div>
                    <div className="rBlockTitle2">
                        <p className="amount">Сумма</p>
                        <p className="amtNum">4 977,00р</p>
                    </div>
                    <input className="rBlockInp" type="phone" placeholder="Ваш номер телефона"/>
                    <button className="rBlockBtn">
                        <h3 className="rBlockBtnTitle">Заказать</h3>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ShoppingCart;