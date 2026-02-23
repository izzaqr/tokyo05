import { ref, computed, watch } from "vue"

const saved = localStorage.getItem("cart")
const items = ref(saved ? JSON.parse(saved) : [])

watch(
    items,
    (val) => {
        localStorage.setItem("cart", JSON.stringify(val))
    },
    { deep: true },
)

export function useCart() {
    const addItem = (product) => {
        const existing = items.value.find((i) => i.id === product.id)
        if (existing) {
            existing.quantity++
        } else {
            items.value.push({ ...product, quantity: 1 })
        }
    }

    const removeItem = (id) => {
        items.value = items.value.filter((i) => i.id !== id)
    }

    const increaseQty = (id) => {
        const item = items.value.find((i) => i.id === id)
        if (item) item.quantity++
    }

    const decreaseQty = (id) => {
        const item = items.value.find((i) => i.id === id)
        if (item) {
            if (item.quantity === 1) removeItem(id)
            else item.quantity--
        }
    }

    const totalCount = computed(() =>
        items.value.reduce((sum, i) => sum + i.quantity, 0),
    )

    const totalPrice = computed(() =>
        items.value.reduce((sum, i) => sum + i.price * i.quantity, 0),
    )

    return {
        items,
        addItem,
        removeItem,
        increaseQty,
        decreaseQty,
        totalCount,
        totalPrice,
    }
}
