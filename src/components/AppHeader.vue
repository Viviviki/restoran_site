<template>
    <div class="app__header">
        <div class="header">
            <img src="/логотип 2.png" alt="logo" class="logo header__logo">
            <div class="header__search">
                <input type="text" class="search input" placeholder="Поиск">
            </div>
            <button class="header__sale button"><RouterLink to="/sales" class="header__sale button">Акции!</RouterLink></button>
            <button class="header__login button">Войти</button>
        </div>
    </div>
</template>

<style>
.app__header {
    width: 100%;
    height: 185px;
    background-color: #EBEAE9;
}

.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1110px;
    height: 100%;
    margin: 0 auto;
}

.header__logo {
    width: 140px;
    height: 98px;
    object-fit: contain;
    object-position: center;
}

.search.input {
    width: 575px;
    height: 60px;
    border-radius: 30px;
    background-color: #FFF;
    text-align: left;
}

.button {
    border: none;
}

.header__sale.button {
    width: 130px;
    height: 54px;
    background-color: #BB2C2C;
    color: #FFF;
    border-radius: 30px;
    text-decoration: none;
}

.header__login.button {
    width: 130px;
    height: 54px;
    background-color: #000;
    color: #FFF;
    border-radius: 30px;
}

</style>