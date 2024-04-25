import { $ } from "@wdio/globals";
import Page from "./page.js";

class HorizontalSliderPage extends Page {
  get slider() {
    return $('input[type="range"]');
  }

  get value() {
    return $("#range").getText();
  }

  async focus() {
    (await this.slider).click();
  }

  open() {
    return super.open("horizontal_slider");
  }
}

export default new HorizontalSliderPage();
