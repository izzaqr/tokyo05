<template>
    <div class="cart-overlay" v-if="isOpen" @click.self="$emit('close')">
        <div class="cart-sidebar">
            <div class="cart-sidebar__header">
                <h2>Корзина</h2>
                <button @click="$emit('close')"><X :size="24" /></button>
            </div>

            <div class="cart-sidebar__empty" v-if="items.length === 0">
                Корзина пуста
            </div>

            <div class="cart-sidebar__items" v-else>
                <div v-for="item in items" :key="item.id" class="cart-item">
                    <div class="cart-item__info">
                        <span class="cart-item__name">{{ item.name }}</span>
                        <span class="cart-item__price">{{ item.price }} ₽</span>
                    </div>
                    <div class="cart-item__controls">
                        <button @click="decreaseQty(item.id)">−</button>
                        <span>{{ item.quantity }}</span>
                        <button @click="increaseQty(item.id)">+</button>
                    </div>
                </div>
            </div>

            <div class="cart-sidebar__footer" v-if="items.length > 0">
                <div class="cart-sidebar__total">
                    Итого: <span>{{ totalPrice }} ₽</span>
                </div>
                <button class="cart-sidebar__order" @click="orderViaWhatsapp">
                    Оформить заказ
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { X } from "lucide-vue-next"
import { useCart } from "../stores/cart.js"

defineProps({ isOpen: Boolean })
defineEmits(["close"])

const { items, increaseQty, decreaseQty, totalPrice } = useCart()

const orderViaWhatsapp = () => {
    const lines = items.value.map(
        (i) => `• ${i.name} x${i.quantity} — ${i.price * i.quantity} ₽`,
    )
    const text = `Здравствуйте! Хочу сделать заказ:\n\n${lines.join("\n")}\n\nИтого: ${totalPrice.value} ₽`
    const encoded = encodeURIComponent(text)
    window.open(
  `https://wa.me/89640086644?text=${encoded}`,
  '_blank'
)

}
</script>

<style scoped>
.cart-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 200;
}

.cart-sidebar {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 380px;
    background: #111111;
    display: flex;
    flex-direction: column;
    padding: 24px;
}

.cart-sidebar__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
    color: #ffffff;
}

.cart-sidebar__header h2 {
    font-size: 22px;
    font-weight: 700;
}

.cart-sidebar__header button {
    background: none;
    color: #ffffff;
}

.cart-sidebar__empty {
    color: #aaaaaa;
    text-align: center;
    margin-top: 40px;
}

.cart-sidebar__items {
    flex: 1;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.cart-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
}

.cart-item__info {
    display: flex;
    flex-direction: column;
    gap: 4px;
    flex: 1;
}

.cart-item__name {
    color: #ffffff;
    font-size: 14px;
}

.cart-item__price {
    color: #e74c3c;
    font-size: 14px;
    font-weight: 600;
}

.cart-item__controls {
    display: flex;
    align-items: center;
    gap: 12px;
    color: #ffffff;
}

.cart-item__controls button {
    background: #2a2a2a;
    color: #ffffff;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.cart-sidebar__footer {
    border-top: 1px solid #2a2a2a;
    padding-top: 20px;
    margin-top: 20px;
}

.cart-sidebar__total {
    display: flex;
    justify-content: space-between;
    color: #aaaaaa;
    font-size: 16px;
    margin-bottom: 16px;
}

.cart-sidebar__total span {
    color: #ffffff;
    font-weight: 700;
}

.cart-sidebar__order {
    width: 100%;
    background: #e74c3c;
    color: #ffffff;
    padding: 14px;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 600;
    font-family: "Montserrat", sans-serif;
    transition: background-color 0.2s;
}

.cart-sidebar__order:hover {
    background: #c0392b;
}

@media (max-width: 480px) {
    .cart-sidebar {
        width: 100%;
    }
}
</style>
