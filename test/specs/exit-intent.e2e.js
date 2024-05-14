import ExitIntentPage from "../pageobjects/exit-intent.page.js";

describe("exit intent page", () => {
  it("move mouse out of the body", async () => {
    await ExitIntentPage.open();
    // await ExitIntentPage.exitIntent();
    await browser.execute(() => {
      const event = new MouseEvent("mouseout", {
        bubbles: true,
        cancelable: true,
        view: window,
      });
      document.dispatchEvent(event);
    });
    await expect(await ExitIntentPage.modal).toBeDisplayed();
  });
});
