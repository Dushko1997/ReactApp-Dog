import { createContext, useContext } from "react";
import CommonStore from "./commonStore";
import ToastStore from "./toastStore";
import ModalStore from "./modalStore";
import DogsStore from "./dogsStore";



interface Store {
  commonStore : CommonStore;
  toastStore : ToastStore;
  modalStore : ModalStore;
  dogsStore : DogsStore;

}

export const store: Store = {
  commonStore: new CommonStore(),
  toastStore: new ToastStore(),
  modalStore: new ModalStore(),
  dogsStore: new DogsStore(),
}


export const StoreContext = createContext(store);

export function useStore() {
  return useContext(StoreContext);
}
