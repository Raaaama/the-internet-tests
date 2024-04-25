import { Key } from "webdriverio";

import HorizontalSliderPage from "../pageobjects/horizontal-slider.page.js";

describe("horizontal slider page", () => {
  it("slides left and right with arrow keys", async () => {
    await HorizontalSliderPage.open();
    await HorizontalSliderPage.focus();
    await browser.keys(Key.ArrowLeft);
    await browser.keys(Key.ArrowLeft);
    await browser.keys(Key.ArrowLeft);
    await browser.keys(Key.ArrowLeft);
    await browser.keys(Key.ArrowRight);
    const sliderValue = await HorizontalSliderPage.value;
    await expect(sliderValue).toBe("1.5");
  });

  it("slides with a mouse", async () => {
    await HorizontalSliderPage.open();
    await HorizontalSliderPage.focus();
    await expect(await HorizontalSliderPage.value).toBe("2.5");
  });
});
