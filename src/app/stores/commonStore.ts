import { action, makeAutoObservable, reaction } from "mobx";
import i18n from "../../i18n/config";
import { LanguageEnum, SiteLanguage, SiteRole, SiteRoleEnum } from "../common/types/CustomTypes";
import { SidebarEntity, sidebarEntites } from "../common/types/SidebarEntity";
import { ServerError } from "../models/serverError";

export default class CommonStore {
  language: SiteLanguage = (localStorage.getItem("language") as SiteLanguage) || LanguageEnum.MK;
  selectedRole: SiteRole = (localStorage.getItem("role") as SiteRole) || SiteRoleEnum.TaskManager;
  error: ServerError | null = null;

  token: string | null = window.localStorage.getItem('jwt');
  appLoaded = false;
  sidebarEntites: SidebarEntity[] = sidebarEntites;

  constructor() {
    makeAutoObservable(this, {
      selectLanguage: action.bound,
      setSelectedRole: action.bound,
    });
    reaction
    (() => this.token,
      token => {
        if (token) {
          window.localStorage.setItem('jwt', token);
        } else {
          window.localStorage.removeItem('jwt');
        }
      }
    )
  }

  setServerError(error: ServerError){
    this.error = error;
  }

  setToken = (token: string | null) => {
    this.token = token;
  }

  selectLanguage(language: SiteLanguage) {
    localStorage.setItem("language", language);
    this.language = language;
  }

  setSelectedRole(role: SiteRole) {
    localStorage.setItem("role", role);
    this.selectedRole = role;
  }

  setAppLoaded = () => {
    this.appLoaded = true;
    i18n.changeLanguage(this.language.toLocaleUpperCase() || LanguageEnum.MK);
    sessionStorage.setItem('loaded', 'true');
  }

  get userSidebarEntities() {
    return this.sidebarEntites
      // .filter((x) => x.roles?.includes(this.selectedRole))
      // .sort((a, b) => a.order - b.order);
  }
}