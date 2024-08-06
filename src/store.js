import { reactive } from 'vue';

export const store = reactive({
  sorting: 'default',
  filterItem: 'All categories',
  searchTerm: ''
});

export function updateSorting(value) {
  store.sorting = value;
}

export function updateFilterItem(value) {
  store.filterItem = value;
}

export function updateSearchTerm(value) {
  store.searchTerm = value;
}
