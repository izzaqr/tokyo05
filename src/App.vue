<script setup>
import { ref, watch } from "vue"
import AppHeader from "./components/AppHeader.vue"
import HeroSection from "./components/HeroSection.vue"
import MenuFilter from "./components/MenuFilter.vue"
import MenuSection from "./components/MenuSection.vue"
import CartSidebar from "./components/CartSidebar.vue"
import AppFooter from "./components/AppFooter.vue"
import ScrollToTop from "./components/ScrollToTop.vue"

const cartOpen = ref(false)

const activeCategory = ref(localStorage.getItem("activeCategory") || "all")

watch(activeCategory, (val) => {
    localStorage.setItem("activeCategory", val)
})
</script>

<template>
    <div>
        <AppHeader @open-cart="cartOpen = true" />
        <HeroSection />
        <MenuFilter
            :activeCategory="activeCategory"
            @change="activeCategory = $event"
        />
        <MenuSection :activeCategory="activeCategory" />
        <CartSidebar :isOpen="cartOpen" @close="cartOpen = false" />
        <AppFooter />
        <ScrollToTop />
    </div>
</template>

<style>
html {
    scroll-behavior: smooth;
}

body {
    font-family: "Montserrat", sans-serif;
    background-color: #1a1a1a;
}

.container {
    max-width: 1200px !important;
    padding: 16px 40px !important;
    margin: 0 auto;
}

@media (max-width: 768px) {
    .container {
        padding: 16px 20px !important;
    }
}
</style>
