import Page from "./page.js";

class FloatingMenuPage extends Page {
  get menu() {
    return $("#menu");
  }

  open() {
    return super.open("floating_menu");
  }
}

export default new FloatingMenuPage();
