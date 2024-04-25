import Page from "./page.js";

class AddRemoveElements extends Page {
  get addButton() {
    return $("button:not(.added-manually)");
  }

  get deleteButtons() {
    return $$(".added-manually");
  }

  async clickAdd() {
    (await this.addButton).click();
  }

  async deleteOneButton() {
    for (const button of await this.deleteButtons) {
      await button.click();
      break;
    }
  }

  async deleteAllButtons() {
    for (const button of await this.deleteButtons) {
      await button.click();
    }
  }

  open() {
    return super.open("add_remove_elements/");
  }
}

export default new AddRemoveElements();
