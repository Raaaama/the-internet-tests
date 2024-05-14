import { $ } from "@wdio/globals";
import Page from "./page.js";

class InputsPage extends Page {
  get input() {
    return $('input[type="number"]');
  }

  get value() {
    return this.input.getValue();
  }

  async focus() {
    (await this.input).click();
  }

  open() {
    return super.open("inputs");
  }
}

export default new InputsPage();
