import { defineStore } from "pinia";
import { api } from "../services/api";

interface PlaceFilters {
  search?: string;
  category?: string;
  page?: number;
  limit?: number;
}


export const usePlaceStore = defineStore("places", {
  state: () => ({
    places: [],
    selectedPlace: null,
    loading: false,
    totalPages: 0,
    currentPage: 1,
    search: "",
    category: ""
  }),

  actions: {
    async fetchPlaces(filters: PlaceFilters = {}) {
        this.loading = true;

        if (filters.search !== undefined) {
            this.search = filters.search;
        }

        if (filters.category !== undefined) {
            this.category = filters.category;
        }

        const params = {
            page: filters.page || 1,
            limit: 8,
            search: this.search,
            category: this.category
        };

        const { data } = await api.get("/places", { params });

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