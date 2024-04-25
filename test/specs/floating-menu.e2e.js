import FloatingMenuPage from "../pageobjects/floating-menu.page.js";

describe("floating menu page", () => {
  it("menu is visilbe by default", async () => {
    await FloatingMenuPage.open();
    let menu = await FloatingMenuPage.menu;
    let isMenuVisible = await menu.isDisplayed();
    await expect(isMenuVisible).toBe(true);
  });

  it("menu is visilbe after scrolldown", async () => {
    await FloatingMenuPage.open();
    let menu = await FloatingMenuPage.menu;
    await browser.scroll(0, 500);
    let isMenuVisible = await menu.isDisplayed();
    await expect(isMenuVisible).toBe(true);
  });

  it("menu is visilbe after scrolldown and scrollup", async () => {
    await FloatingMenuPage.open();
    let menu = await FloatingMenuPage.menu;
    await browser.scroll(0, 500);
    await browser.scroll(0, -500);
    let isMenuVisible = await menu.isDisplayed();
    await expect(isMenuVisible).toBe(true);
  });
});
