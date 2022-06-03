export class HeaderOption {
  title: string;
  path: string;
  selected: boolean;

  constructor(title: string, path: string, selected: boolean) {
    this.title = title;
    this.path = path;
    this.selected = selected;
  }
}
