import { makeAutoObservable } from "mobx";

interface Modal {
  open: boolean;
  body: JSX.Element | null;
}

export default class ModalStore {
  modal: Modal = {
    open: false,
    body: null,
  };

  constructor() {
    makeAutoObservable(this);
  }

  openModal = (
    body: JSX.Element,
  ) => {
    this.modal = {
      open: true,
      body
    };
  };

  closeModal = () => {
    this.modal = {
      open: false,
      body: null,
    };
  };
}
