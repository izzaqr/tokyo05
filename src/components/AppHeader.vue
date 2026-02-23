<template>
    <header class="header">
        <div class="container header__container">
            <a href="/" class="logo">
                <img
                    src="../assets/images/header/logo.jpg"
                    alt="Логотип кафе"
                />
            </a>
            <nav class="header__nav" :class="{ open: menuOpen }">
                <a href="#filter">Меню</a>
                <!-- <a href="#about">О нас</a> -->
                <a href="#footer">Контакты</a>
            </nav>
            <div class="header__right">
                <button class="cart-btn" @click="$emit('open-cart')">
                    <ShoppingCart :size="30" />
                    <span class="cart-count">{{ totalCount }}</span>
                </button>
                <button class="burger-btn" @click="menuOpen = !menuOpen">
                    <Menu v-if="!menuOpen" :size="34" />
                    <X v-else :size="34" />
                </button>
            </div>
        </div>
    </header>
</template>

<script setup>
import { ref } from "vue"
import { ShoppingCart, Menu, X } from "lucide-vue-next"
import { useCart } from "../stores/cart.js"

const { totalCount } = useCart()

defineEmits(["open-cart"])

const menuOpen = ref(false)
</script>

<style scoped>
.header {
    background-color: rgba(17, 17, 17, 0.7);
    backdrop-filter: blur(10px);
    position: sticky;
    top: 0;
    z-index: 100;
}

.header__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px !important;
}

.logo img {
    height: 80px;
}

.header__nav {
    display: flex;
    align-items: center;
    gap: 24px;
}

.header__nav a {
    color: #ffffff;
    font-size: 24px;
}

.header__nav a:hover {
    color: #e74c3c;
}

.header__right {
    display: flex;
    align-items: center;
    gap: 20px;
}

.cart-btn {
    position: relative;
    background: none;
    color: #ffffff;
}

.cart-btn:hover {
    color: #e74c3c;
}

.cart-count {
    position: absolute;
    top: -8px;
    right: -8px;
    background: #e74c3c;
    color: #fff;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    font-size: 11px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.burger-btn {
    display: none;
    background: none;
    color: #ffffff;
}

.burger-btn:hover {
    color: #e74c3c;
}

@media (max-width: 768px) {
    .burger-btn {
        display: block;
    }

    .header__container {
        position: relative;
    }

    .header__nav {
        position: absolute;
        top: 100px;
        left: 0;
        right: 0;
        display: none;
        align-items: end;
        flex-direction: column;
        background-color: rgba(17, 17, 17, 0.7);
        padding: 24px;
        gap: 20px;
        z-index: 100;
    }

    .header__nav.open {
        display: flex;
    }
}
</style>
