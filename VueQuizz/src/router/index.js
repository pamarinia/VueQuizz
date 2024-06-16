import {createRouter, createWebHistory} from 'vue-router'
import QuizzesView from "../views/QuizzesView.vue"
import QuizzView from "../views/QuizzView.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'quizzes',
            component: QuizzesView
        },
        {
            path: '/quiz/:id',
            name: 'quizz',
            component: QuizzView
        }
    ]

})

export default router