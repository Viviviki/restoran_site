<template>
    <div class="sales__views">
        <h1 class="sales__views_header">Текущие акции</h1>
        <div class="sales__company container">
            <h2 class="sales__company header">В Своей компании</h2>
            <img src="/sales_company.png" alt="company">
        </div>
        <div class="sales__taste container">
            <h2 class="sales__taste header">В Долине Вкуса</h2>
            <div class="taste__images">
                <img src="/taste1.png" alt="taste">
                <img src="/taste2.png" alt="taste">
            </div>
        </div>
    </div>
</template>

<style>
.sales__views {
    display: flex;
    flex-direction: column;
    max-width: 1110px;
    padding: 15px;
    margin: 0 auto;
    gap: 22px;
}

.sales__views_header {
    font-family: Inter;
    font-size: 64px;
    font-weight: 600;
    line-height: 77.45px;
}

.sales__company.header {
    font-family: Inter;
    font-size: 32px;
    font-weight: 500;
    line-height: 38.73px;
}

.sales__taste.header {
    font-family: Inter;
    font-size: 32px;
    font-weight: 500;
    line-height: 38.73px;
}

.taste__images {
    display: flex;
}
</style>