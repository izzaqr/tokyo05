<template>
    <section class="menu" id="menu">
        <div class="container">
            <template v-if="activeCategory === 'all'">
                <div
                    v-for="cat in categories"
                    :key="cat.id"
                    class="menu__group"
                >
                    <h2 class="menu__group-title">{{ cat.label }}</h2>
                    <div class="menu__grid">
                        <div
                            v-for="item in getByCategory(cat.id)"
                            :key="item.id"
                            class="menu__card"
                        >
                            <div class="menu__card-img">
                                <img :src="item.image" :alt="item.name" />
                            </div>
                            <div class="menu__card-body">
                                <h3 class="menu__card-name">{{ item.name }}</h3>
                                <div class="menu__card-bottom">
                                    <span class="menu__card-weight">{{
                                        item.weight
                                    }}</span>
                                    <div class="menu__card-right">
                                        <span class="menu__card-price"
                                            >{{ item.price }} ₽</span
                                        >
                                        <button
                                            class="menu__card-btn"
                                            @click="addItem(item)"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </template>

            <template v-else>
                <div class="menu__grid">
                    <div
                        v-for="item in filteredItems"
                        :key="item.id"
                        class="menu__card"
                    >
                        <div class="menu__card-img">
                            <img :src="item.image" :alt="item.name" />
                        </div>
                        <div class="menu__card-body">
                            <h3 class="menu__card-name">{{ item.name }}</h3>
                            <div class="menu__card-bottom">
                                <span class="menu__card-weight">{{
                                    item.weight
                                }}</span>
                                <div class="menu__card-right">
                                    <span class="menu__card-price"
                                        >{{ item.price }} ₽</span
                                    >
                                    <button
                                        class="menu__card-btn"
                                        @click="addItem(item)"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </div>
    </section>
</template>

<script setup>
import { computed } from "vue"
import { menuItems, categories as allCategories } from "../data/menu.js"
import { useCart } from "../stores/cart.js"

const props = defineProps({
    activeCategory: String,
})

const { addItem } = useCart()

const categories = allCategories.filter((cat) => cat.id !== "all")

const filteredItems = computed(() => {
    if (props.activeCategory === "all") return menuItems
    return menuItems.filter((item) => item.category === props.activeCategory)
})

function getByCategory(catId) {
    return menuItems.filter((item) => item.category === catId)
}
</script>

<style scoped>
.menu {
    padding: 20px 0 60px;
}

.menu__group {
    margin-bottom: 48px;
}

.menu__group-title {
    color: #ffffff;
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 20px;
}

.menu__grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 16px;
}

.menu__card {
    background-color: #111111;
    border-radius: 12px;
    overflow: hidden;
}

.menu__card-img {
    width: 100%;
    aspect-ratio: 1 / 1;
    background-color: #2a2a2a;
}

.menu__card-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.menu__card-body {
    padding: 16px;
}

.menu__card-name {
    color: #ffffff;
    font-size: 15px;
    font-weight: 500;
    margin-bottom: 12px;
    line-height: 1.3;
}

.menu__card-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.menu__card-weight {
    color: #aaaaaa;
    font-size: 13px;
}

.menu__card-price {
    color: #e74c3c;
    font-size: 18px;
    font-weight: 700;
}

.menu__card-right {
    display: flex;
    align-items: center;
    gap: 12px;
}

.menu__card-btn {
    background: #e74c3c;
    color: #ffffff;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    font-size: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.2s;
}

.menu__card-btn:hover {
    background: #c0392b;
}
</style>
