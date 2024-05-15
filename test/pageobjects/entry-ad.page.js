import Page from "./page.js";

class EntryAdPage extends Page {
  get modal() {
    return $("#modal");
  }

  get closeAdButton() {
    return $("p=Close");
  }

  open() {
    return super.open("entry_ad");
  }
}

export default new EntryAdPage();
