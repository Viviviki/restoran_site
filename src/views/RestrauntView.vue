<template>
    <div class="restraunt__view">
        <div class="restraunt_description container">
            <div class="description_params container">
                <div class="params_time container">
                    <p class="params_time1 text">Часы работы <img src="/time.svg" alt="time"></p>
                    <p class="params_time2 text">12:00-00:00</p>
                </div>
                <div class="params_address container">
                    <p class="params_address1 text">Адрес <img src="/place.svg" alt="place"></p>
                    <p class="params_address2 text">улица Пархоменко, 41</p>
                    Показать на карте
                </div>
                <div class="params_price container">
                    <p class="params_price1 text">
                        Цены - Высокие
                        <span class="price1 container">
                            <img src="/price.svg" alt="price">
                            <img src="/price.svg" alt="price">
                            <img src="/price.svg" alt="price">
                        </span>
                    </p>
                    <p class="params_price2 text">Средний чек 1500р</p>
                </div>
            </div>
            <div class="description_expanded container">
                <div class="description_expanded sub_container">
                    <div class="description_expanded small_desc">
                        <h3 class="description_expanded name">Хачапури | Дом грузинской кухни</h3>
                        <img src="/stars.png" alt="stars" class="expanded_stars">
                        <button class="expanded_phone button"><img src="/Phone call.svg" alt="phone">+7 343 546-66-11</button>
                        <button class="expanded_menu button">Меню ресторана</button>
                    </div>
                    <img src="/image1.png" alt="hachapuri" class="hachapuri__picture">
                </div>
                <p class="description_expanded text">
                    Ресторан «Хачапури» больше, чем просто место, где принимают пищу и проводят свободное время.
                    Это маленький уголок Грузии, затерянный посреди Уральских гор.
                    Названия блюд грузинской кухни звучат подобно музыке...
                    В меню нашего ресторана непременно есть хинкали, хачапури, сациви, чашушули и многое другое.
                    Все то, что особенно демонстрирует грузинский кулинарный колорит. Мясо, овощи, ароматные
                    приправы и специи - вот основные ингредиенты. Говорят, что, когда попадаешь в Грузию,
                    сразу возникает чувство, что встретился со старыми друзьями, которые давно тебя
                    ждали и очень соскучились. Именно это мы и постарались воспроизвести в "Хачапури".
                    Настоящее гостеприимство и радушие будут нашими главными секретными ингредиентами ко всем
                    блюдам.
                </p>
            </div>
        </div>
        <div class="reviews container">
            <div class="reviews_head container">
                <h2 class="reviews_header">Отзывы посетителей "Хачапури"</h2>
                <button class="reviews_head button">
                    <img src="/add_review.svg" alt="add review">
                    Оставить отзыв
                </button>
            </div>
            <img src="/ккк 2.png" alt="reviews">
        </div>
    </div>
</template>

<style>
.restraunt__view {
    display: flex;
    flex-direction: column;
    width: 1110px;
    margin: 0 auto;
}

.restraunt_description.container {
    display: flex;
}

.description_params.container {
    display: flex;
    flex-direction: column;
    width: 292px;
    height: 885px;
    gap: 43px;
    border: 1px solid #D9D9D9;
}

.description_params .container {
    display: flex;
    flex-direction: column;
}

.description_params .text {
    font-family: Inter;
    font-size: 24px;
    font-weight: 700;
    line-height: 29.05px;
}

.params_time2.text {
    font-family: Inter;
    font-size: 32px;
    font-weight: 700;
    line-height: 38.73px;
}

.price1.container {
    display: flex;
    flex-direction: row;
}

.price1.container img {
    width: 50px;
    height: 50px;
}

.hachapuri__picture {
    width: 415px;
    height: 296px;
    border-radius: 30px 0 0 30px;
    object-fit: fill;
    object-position: center;
}

.description_expanded.small_desc {
    display: flex;
    flex-direction: column;
    gap: 36px;
}

.description_expanded.small_desc .button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 314px;
    height: 60px;
    border-radius: 30px;
    background-color: #EBEAE9;
}

.description_expanded.container {
    display: flex;
    flex-direction: column;
    gap: 52px;
    width: 820px;
    border: 1px solid #D9D9D9;
}

.description_expanded.text {
    font-family: Inter;
    font-size: 24px;
    font-weight: 700;
    line-height: 29.05px;
}

.description_expanded.name {
    font-family: Inter;
    font-size: 24px;
    font-weight: 700;
    line-height: 29.05px;
}

.description_expanded.sub_container {
    display: flex
}

.expanded_stars {
    width: 249px;
    height: 50px;
}

.reviews.container {
    border: 1px solid #D9D9D9
}

.reviews_head.container {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.reviews_head.button {
    display: flex;
    align-items: center;
}
</style>