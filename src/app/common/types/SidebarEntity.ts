import { SiteRole } from "./CustomTypes";

export interface SidebarEntity {
  name: string;
  icon: string;
  route: string;
  roles: SiteRole[];
  order: number;
}

export const sidebarEntites: SidebarEntity[] = [
  {
    icon: "home",
    name: "Dogs Table",
    route: "/mainPage",
    roles: ["Super Admin"],
    order: 1
  },
  {
    icon: "star",
    name: "Favorites Dogs",
    route: "/favoritesPage",
    roles: ["Super Admin"],
    order: 2
  }
  
];
