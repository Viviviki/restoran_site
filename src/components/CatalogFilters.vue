<script>
export default {
    data() {
        return {
            resttypes: [
                "Ресторан", 
                "Кафе", 
                "Столовые", 
                "Фастфуд", 
                "Бары и клубы", 
                "Кальянные", 
                "Кофе и чай", 
                "Выпечка"
            ],
            districts: [
                "Центр", 
                "Красный Камень", 
                "ГГМ", 
                "Тагилстрой", 
                "Выя", 
                "Вагонка", 
                "Малая Кушва"
            ]
        }
    }
}
</script>

<template>
    <div class="catalog__filters">
        <div class="filters__price">
            <h2 class="price__header filters__header">Цена</h2>
            <div class="minmax__price">
                <p class="min__price">Низкие цены</p>
                <p class="max__price">Высокие цены</p>
            </div>
            <input type="range" class="minmax__price__range">
        </div>
        <div class="filters__resttypes">
            <h2 class="resttypes__header filters__header">Что искать</h2>
            <div class="resttypes__grid filters__grid">
                <button class="resttype filters__button" v-for="(type, index) in resttypes" :key="index">{{ type }}</button>
            </div>
        </div>
        <div class="filters__districts">
            <h2 class="districts__header filters__header">Какой район</h2>
            <div class="districts__grid filters__grid">
                <button class="district filters__button" v-for="(district, index) in districts" :key="index">{{ district }}</button>
            </div>
        </div>
    </div>
</template>

<style>
.catalog__filters {
    width: 291px;
    height: fit-content;
    border: 1px solid #D9D9D9;
}

.filters__price {
    display: flex;
    flex-direction: column;
}

.minmax__price {
    display: flex;
    justify-content: space-between;
}

.filters__restypes {
    display: flex;
    flex-direction: column;
}

.filters__grid {
    display: grid;
    grid-template-columns: repeat(2, 135px);
    grid-template-rows: min-content;
    justify-content: center;
    align-items: center;
    justify-items: center;
    gap: 9px;
}

.filters__button {
    width: 135px;
    height: 50px;
    background-color: transparent;
    color: #000;
    border: 1px solid #000;
    border-radius: 30px;
}

</style>