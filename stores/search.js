import { defineStore } from "pinia";
import DataService from "@/shared/api/search";

export const useSearchStore = defineStore("search", {
  state: () => ({
    searchParams: {},
    searchResult: [],
    allSearchQuery: "",
    loading: false,
    error: null,
  }),

  actions: {
    setSearchParams(params) {
      this.searchParams = params;
    },

    clearSearchParams() {
      this.searchParams = {};
      this.searchResult = [];
      this.error = null;
    },

    async fetchSearchResults(type, data) {
      this.loading = true;
      this.error = null;
      this.allSearchQuery = data;
      try {
        const response = await DataService.fetchPublicSearch(type, data);
        console.log(response);
        this.searchResult =
          type === "registries" ? response.data.data : response.data;
        return response;
      } catch (err) {
        this.error = err?.response?.data || "Ошибка запроса";
        console.error("Search error:", err);
        throw err;
      } finally {
        this.loading = false;
      }
    },
  },
});
