export interface ISidebarProps {
  isNonMobile: boolean;
  drawerWidth: number;
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
}
