import { $ } from "@wdio/globals";
import Page from "./page.js";

class HoverPage extends Page {
  get figure() {
    return $(".figure");
  }

  get figcaption() {
    return $(".figcaption");
  }

  async hover() {
    (await this.figure).moveTo();
  }

  open() {
    return super.open("hovers");
  }
}

export default new HoverPage();
