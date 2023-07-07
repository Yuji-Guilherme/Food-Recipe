export interface UseUtilsStore {
  state: StateUtilsStore;
  actions: ActionsUtilsStore;
}

export interface StateUtilsStore {
  isLoading: boolean | undefined;
  notFound: boolean;
}

export interface ActionsUtilsStore {
  initialState: () => void;
  setLoading: (boolean?: boolean) => void;
  setNotFound: () => void;
}
