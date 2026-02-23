<template>
    <footer class="footer" id="footer">
        <div class="container footer__container">
            <div class="footer__logo">
                <img src="../assets/images/header/jpg" alt="Логотип" />
            </div>

            <div class="footer__info">
                <p class="footer__title">Контакты</p>
                <a href="tel:+79640086644">+7 (964) 008-66-44</a>
                <a href="tel:+79382082022">+7 (938) 208-20-22</a>
                <p>Дербент, ул. Юрия Гагарина, 18М</p>
                <p>Ежедневно 10:00 — 23:00</p>
            </div>

            <div class="footer__social">
                <p class="footer__title">Мы в соцсетях</p>
                <div class="footer__social-links">
                    <a
                        href="https://www.instagram.com/tokyo05.ru/"
                        target="_blank"
                    >
                        <Instagram :size="28" />
                    </a>
                    <a
                        href="https://api.whatsapp.com/send/?phone=89640086644&text&type=phone_number&app_absent=0"
                        target="_blank"
                    >
                        <MessageCircle :size="28" />
                    </a>
                </div>
            </div>
        </div>

        <div class="footer__bottom">
            <p>© 2026 Токио. Все права защищены</p>
            <p>
                Designed by
                <a href="https://www.freepik.com/" target="_blank"
                    >freepik.com</a
                >
            </p>
            <p>
                Developed by
                <a href="https://t.me/izzaqr" target="_blank">@izzaqr</a>.
            </p>
        </div>
    </footer>
</template>

<script setup>
import { Instagram, MessageCircle } from "lucide-vue-next"
</script>

<style scoped>
.footer {
    background-color: #111111;
    margin-top: 60px;
    scroll-margin-top: 100px;
}

.footer__container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 40px;
    padding-top: 48px !important;
    padding-bottom: 48px !important;
}

.footer__logo img {
    height: 60px;
}

.footer__title {
    color: #ffffff;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 12px;
}

.footer__info {
    display: flex;
    flex-direction: column;
    gap: 8px;
    color: #aaaaaa;
    font-size: 14px;
}

.footer__info a {
    color: #aaaaaa;
}

.footer__info a:hover {
    color: #e74c3c;
}

.footer__social-links {
    display: flex;
    gap: 16px;
}

.footer__social-links a {
    color: #aaaaaa;
    transition: color 0.2s;
}

.footer__social-links a:hover {
    color: #e74c3c;
}

.footer__bottom {
    border-top: 1px solid #2a2a2a;
    padding: 16px 40px;
    text-align: center;
    color: #555555;
    font-size: 13px;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

@media (max-width: 768px) {
    .footer__container {
        flex-direction: column;
        gap: 32px;
    }
}
</style>
