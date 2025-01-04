<template>
    <div class="catalog__feed">
        <div class="feed__rest" v-for="(rest, key) in restraunts" :key="key">
            <h2 class="rest__header"><RouterLink :to="rest.path">{{ rest.name }}</RouterLink></h2>
            <div class="rest__description container">
                <div class="rest__description text__container">
                    <div class="description__rating container">
                        <img src="star.svg" alt="star" class="description__rating picture">
                        <p class="description__rating text">{{ rest.rating }}</p>
                    </div>
                    <div class="description__price container">
                        <p class="description__price text">Цена</p>
                        <img v-for="item in rest.price" :key="item" src="price.svg" alt="" class="description__price picture">
                    </div>
                    <div class="description__time container">
                        <p class="description__time text">Открыто сейчас</p>
                        <img src="time.svg" alt="" class="description__time picture">
                    </div>
                    <div class="description__place container">
                        <p class="description__place text">Показать на карте</p>
                        <img src="place.svg" alt="" class="description__place picture">
                    </div>
                </div>
                <img :src="rest.image" alt="rest picture" class="rest__picture">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            restraunts: [
                {
                    path: '/restraunt/hachapuri',
                    name: 'Хачапури | Дом грузинской кухни',
                    rating: 4.8,
                    price: 3,
                    image: 'image1.png'
                },
                {
                    path: '/restraunt/company',
                    name: 'Своя компания',
                    rating: 4.6,
                    price: 3,
                    image: 'image2.png'
                },
                {
                    path: '/restraunt/emsam',
                    name: 'Ем Сам',
                    rating: 4.6,
                    price: 2,
                    image: 'image3.png'
                },
                {
                    path: '/restraunt/pizza',
                    name: 'Пицца',
                    rating: 4.0,
                    price: 1,
                    image: 'image4.png'
                }
            ]
        }
    }
}
</script>

<style>
.feed__rest {
    width: 698px;
    height: 257px;
    border: 1px solid #D9D9D9;
    padding-right: 121px;
    padding-bottom: 23px;
}

.rest__description.container {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.rest__description .text {
    font-family: Inter;
    font-size: 24px;
    font-weight: 700;
    line-height: 29.05px;
}

.rest__description .container {
    display: flex;
    align-items: center;
}

.rest__picture {
    width: 293px;
    height: 208px;
    border-radius: 30px;
}
</style>