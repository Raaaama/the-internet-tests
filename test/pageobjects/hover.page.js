import { $ } from "@wdio/globals";
import Page from "./page.js";

class HoverPage extends Page {
  get figure() {
    return $(".figure");
  }

  get figcaption() {
    return $(".figcaption");
  }

  get example() {
    return $(".example");
  }

  async hover() {
    (await this.figure).moveTo();
  }

  async unhover() {
    (await this.example).moveTo();
  }

  open() {
    return super.open("hovers");
  }
}

export default new HoverPage();
