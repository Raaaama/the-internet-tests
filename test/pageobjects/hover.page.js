import { $ } from "@wdio/globals";
import Page from "./page.js";

class HoverPage extends Page {
  get figure() {
    return $(".figure");
  }

  get figures() {
    return $$(".figure");
  }

  get figcaption() {
    return $(".figcaption");
  }

  get figcaptions() {
    return $$(".figcaption");
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

  async hoverOne(num) {
    await this.figures[num].moveTo();
  }

  open() {
    return super.open("hovers");
  }
}

export default new HoverPage();
