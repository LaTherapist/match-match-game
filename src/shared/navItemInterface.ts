export type NavItemType = {
  class: string;
  link: string;
  text: string;
}

export interface NavItemContent {
  about: NavItemType;
  score: NavItemType;
  settings: NavItemType;
}
