<template>
    <button class="scroll-top" v-if="visible" @click="scrollToTop">
        <ChevronUp :size="24" />
    </button>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue"
import { ChevronUp } from "lucide-vue-next"

const visible = ref(false)

const handleScroll = () => {
    visible.value = window.scrollY > 300
}

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
}

onMounted(() => window.addEventListener("scroll", handleScroll))
onUnmounted(() => window.removeEventListener("scroll", handleScroll))
</script>

<style scoped>
.scroll-top {
    position: fixed;
    bottom: 32px;
    right: 32px;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: #e74c3c;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 150;
    transition: background-color 0.2s;
}

.scroll-top:hover {
    background: #c0392b;
}

@media (max-width: 768px) {
    .scroll-top {
        bottom: 20px;
        right: 20px;
    }
}
</style>
