import Page from "./page.js";

class ExitIntentPage extends Page {
  get viewport() {
    return $("#flash-messages");
  }

  get modal() {
    return $(".modal");
  }

  async exitIntent() {
    (await this.viewport).moveTo();
    await browser.newWindow("https://google.com");
    await browser.switchWindow(
      "https://the-internet.herokuapp.com/exit_intent"
    );
  }

  open() {
    return super.open("exit_intent");
  }
}

export default new ExitIntentPage();
