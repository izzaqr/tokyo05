<template>
    <section class="hero">
        <div class="container hero__container">
            <div class="hero__content">
                <span class="hero__badge">Доставка в течение часа</span>
                <h1 class="hero__title">Кафе Токио</h1>
                <p class="hero__subtitle">Блюда японской и европейской кухни</p>
                <button class="hero__btn" @click="scrollToMenu">
                    Заказать сейчас
                </button>
            </div>
            <div class="hero__image">
                <img
                    src="../assets/images/hero/sushi.jpg"
                    alt="Изображение суши"
                />
            </div>
        </div>
    </section>
</template>

<script setup>
const scrollToMenu = () => {
    document.getElementById("menu").scrollIntoView({ behavior: "smooth" })
}
</script>

<style scoped>
.hero {
    padding: 80px 0;
}

.hero__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
}

.hero__content {
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 500px;
}

.hero__badge {
    display: inline-block;
    background-color: #e74c3c;
    color: #ffffff;
    padding: 6px 16px;
    border-radius: 20px;
    font-size: 14px;
    font-weight: 500;
    width: fit-content;
}

.hero__title {
    font-size: 70px;
    font-weight: 700;
    color: #ffffff;
    line-height: 1.1;
}

.hero__subtitle {
    font-size: 18px;
    color: #aaaaaa;
    line-height: 1.5;
}

.hero__btn {
    background-color: #e74c3c;
    color: #ffffff;
    padding: 14px 32px;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 600;
    width: fit-content;
    transition: background-color 0.2s;
}

.hero__btn:hover {
    background-color: #c0392b;
}

.hero__image img {
    width: 100%;
    max-width: 600px;
    border-radius: 24px;
}

@media (max-width: 1200px) {
    .hero {
        padding: 60px 0;
    }

    .hero__content {
        justify-content: center;
        max-width: none;
        min-width: 50%;
    }
}

@media (max-width: 980px) {
    .hero__title {
        font-size: 50px;
    }
}

@media (max-width: 768px) {
    .hero__container {
        flex-direction: column;
        gap: 30px;
    }

    .hero__content {
        align-items: center;
        text-align: center;
    }

    .hero__title {
        font-size: 60px;
    }

    .hero__image {
        display: flex;
        justify-content: center;
    }

    .hero__image img {
        max-width: 80%;
    }
}

@media (max-width: 560px) {
    .hero__image img {
        max-width: 100%;
    }
}

@media (max-width: 425px) {
    .hero__title {
        font-size: 50px;
    }
}

@media (max-width: 375px) {
    .hero {
        padding: 40px 0;
    }

    .hero__title {
        font-size: 44px;
    }

    .hero__subtitle {
        font-size: 16px;
    }
}
</style>
