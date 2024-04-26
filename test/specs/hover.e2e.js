import HoverPage from "../pageobjects/hover.page.js";

describe("hover page", () => {
  it("caption should appear on hover", async () => {
    await HoverPage.open();
    await HoverPage.hover();
    await expect(HoverPage.figcaption).toBeDisplayed();
  });

  it("caption should disappear on unhover", async () => {
    await HoverPage.open();
    await HoverPage.hover();
    await HoverPage.unhover();
    await expect(HoverPage.figcaption).not.toBeDisplayed();
  });
});
