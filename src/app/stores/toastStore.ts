import { AlertColor } from "@mui/material";
import { makeAutoObservable,  } from "mobx";

export default class ToastStore {
  open : boolean = false;
  message : string = "";
  type : AlertColor = "error";

  constructor(){
    makeAutoObservable(this);
  }

  openToast = (message: string, type: AlertColor = "success") => {
    if(this.open){
      this.open = false;
      setTimeout(() => {
        this.open = true;
        this.message = message;
        this.type = type;
      }, 400);
      return
    }

    this.open = true;
    this.message = message;
    this.type = type;
  }

  closeToast = () => {
    this.open = false;
  }
}