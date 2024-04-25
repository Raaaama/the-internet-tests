import AddRemoveElementsPage from "../pageobjects/add-remove-elements.page.js";

describe("add and remove elements page", () => {
  it("no elements by default", async () => {
    await AddRemoveElementsPage.open();
    let buttons = await AddRemoveElementsPage.deleteButtons;
    await expect(buttons.length).toBe(0);
  });

  it("add 2 elements", async () => {
    await AddRemoveElementsPage.open();
    await AddRemoveElementsPage.clickAdd();
    await AddRemoveElementsPage.clickAdd();
    let buttons = await AddRemoveElementsPage.deleteButtons;
    await expect(buttons.length).toBe(2);
  });

  it("delete all elements after addition", async () => {
    await AddRemoveElementsPage.open();
    await AddRemoveElementsPage.clickAdd();
    await AddRemoveElementsPage.clickAdd();
    await AddRemoveElementsPage.deleteAllButtons();
    let buttons = await AddRemoveElementsPage.deleteButtons;
    await expect(buttons.length).toBe(0);
  });

  it("delete one element after addition", async () => {
    await AddRemoveElementsPage.open();
    await AddRemoveElementsPage.clickAdd();
    await AddRemoveElementsPage.clickAdd();
    let buttons = await AddRemoveElementsPage.deleteButtons;
    await expect(buttons.length).toBe(2);

    await AddRemoveElementsPage.deleteOneButton();
    buttons = await AddRemoveElementsPage.deleteButtons;
    await expect(buttons.length).toBe(1);
  });
});
