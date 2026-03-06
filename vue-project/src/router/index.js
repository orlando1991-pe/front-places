import { createRouter, createWebHistory } from "vue-router"

import HomeView from "../views/HomeView.vue"
import ExploreView from "../views/ExploreView.vue"
import PlaceDetailView from "../views/PlaceDetailView.vue"

const routes = [
{ path: "/", component: HomeView },
{ path: "/explore", component: ExploreView },
{ path: "/place/:id", component: PlaceDetailView }
]

export default createRouter({
history: createWebHistory(),
routes
})