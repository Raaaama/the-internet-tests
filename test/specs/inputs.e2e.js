import InputsPage from "../pageobjects/inputs.page.js";

describe("inputs page", () => {
  it("can set a positive value", async () => {
    await InputsPage.open();
    await InputsPage.focus();
    await InputsPage.input.setValue(5);
    await expect(await InputsPage.value).toBe("5");
  });

  it("can set a negative value", async () => {
    await InputsPage.open();
    await InputsPage.focus();
    await InputsPage.input.setValue(-7);
    await expect(await InputsPage.value).toBe("-7");
  });

  it("can set a decimal value", async () => {
    await InputsPage.open();
    await InputsPage.focus();
    await InputsPage.input.setValue(5.7);
    await expect(await InputsPage.value).toBe("5.7");
  });

  it("can't set a string value", async () => {
    await InputsPage.open();
    await InputsPage.focus();
    await InputsPage.input.setValue("qweasdzxc");
    await expect(await InputsPage.value).toBe("");
  });

  it("can't set a space value", async () => {
    await InputsPage.open();
    await InputsPage.focus();
    await InputsPage.input.setValue("   ");
    await expect(await InputsPage.value).toBe("");
  });

  it("can't set a value with special characters", async () => {
    await InputsPage.open();
    await InputsPage.focus();
    await InputsPage.input.setValue("!");
    await InputsPage.input.addValue("@");
    await InputsPage.input.addValue("$");
    await InputsPage.input.addValue("%");
    await InputsPage.input.addValue("^");
    await InputsPage.input.addValue("&");
    await InputsPage.input.addValue("*");
    await expect(await InputsPage.value).toBe("");
  });
});
