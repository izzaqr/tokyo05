<template>
    <section class="filter" id="filter">
        <div class="container">
            <div class="filter__wrapper">
                <div class="filter__btns">
                    <button
                        v-for="cat in categories"
                        :key="cat.id"
                        class="filter__btn"
                        :class="{ active: activeCategory === cat.id }"
                        @click="$emit('change', cat.id)"
                    >
                        {{ cat.label }}
                    </button>
                </div>
                <div class="filter__fade"></div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { categories } from "../data/menu.js"

defineProps({
    activeCategory: String,
})

defineEmits(["change"])
</script>

<style scoped>
.filter {
    scroll-margin-top: 100px;
}

.filter__wrapper {
    position: relative;
}

.filter__fade {
    display: none;
}

.filter__btns {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 12px;
}

.filter__btn {
    padding: 10px 20px;
    border-radius: 20px;
    border: 1px solid #333;
    background: none;
    color: #aaaaaa;
    font-size: 15px;
    font-family: "Montserrat", sans-serif;
    transition: all 0.2s;
}

.filter__btn:hover {
    border-color: #e74c3c;
    color: #ffffff;
}

.filter__btn.active {
    background-color: #e74c3c;
    border-color: #e74c3c;
    color: #ffffff;
}

@media (max-width: 768px) {
    .filter__btns {
        flex-wrap: nowrap;
        overflow-x: auto;
        justify-content: flex-start;
        padding-bottom: 8px;
        -webkit-overflow-scrolling: touch;
        scrollbar-width: none;
    }

    .filter__btns::-webkit-scrollbar {
        display: none;
    }

    .filter__fade {
        display: block;
        position: absolute;
        right: 0;
        top: 0;
        bottom: 8px;
        width: 60px;
        background: linear-gradient(to right, transparent, #1a1a1a);
        pointer-events: none;
    }
}
</style>
