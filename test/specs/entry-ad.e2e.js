import EntryAdPage from "../pageobjects/entry-ad.page.js";

describe("entry ad page", () => {
  it("ad is displayed on the first page load", async () => {
    await EntryAdPage.open();
    expect(await EntryAdPage.modal).toBeDisplayed();
  });

  it("ad is not displayed on subsequent page loads", async () => {
    await EntryAdPage.open();
    await browser.waitUntil(
      async () => await (await EntryAdPage.closeAdButton).isClickable()
    );
    await (await EntryAdPage.closeAdButton).click();
    await browser.refresh();
    expect(await EntryAdPage.modal).not.toBeDisplayed();
  });
});
