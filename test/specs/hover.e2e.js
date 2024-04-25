import HoverPage from "../pageobjects/hover.page.js";

describe("hover page", () => {
  it("caption should appear on hover", async () => {
    await HoverPage.open();
    await HoverPage.hover();
    await expect(HoverPage.figcaption).toBePresent();
  });
});
