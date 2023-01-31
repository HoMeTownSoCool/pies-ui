declare namespace SideBar {
  interface Item {
    cname: string;
    name: string;
    path: string;
    label: string;
    type: string;
  }

  interface Group {
    title: string;
    items: Item[];
  }
}
