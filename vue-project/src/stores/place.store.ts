import { defineStore } from "pinia";
import { api } from "../services/api";



export const usePlaceStore = defineStore("places", {
  state: () => ({
    places: [] as any[],
    totalPages: 0,
    currentPage: 1 as any,
    selectedPlace: null as any,
    loading: false,
  }),

  actions: {
    async fetchPlaces(filters = {}) {
    this.loading = true;
    const { data } = await api.get("/places", { params: filters });

    this.places = data.data;
    this.totalPages = data.totalPages;
    this.currentPage = data.page;

    this.loading = false;
    },

    async fetchPlaceById(id: string) {
      this.loading = true;
      const { data } = await api.get(`/places/${id}`);
      this.selectedPlace = data;
      this.loading = false;
    },
  },
});