export interface UseSearchStore {
  state: StateSearchStore;
  actions: ActionsSearchStore;
}

export interface StateSearchStore {
  searchMeal: string;
}

export interface ActionsSearchStore {
  clearSearch: () => void;
  setSearchMeal: (mealName: string) => void;
}
