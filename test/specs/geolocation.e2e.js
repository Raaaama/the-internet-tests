import GeolocationPage from "../pageobjects/geolocation.page.js";

describe("geolocation page", () => {
  it("get right geolocation", async () => {
    let latitude = 13.37;
    let longitude = 26.57;
    await browser.emulate("geolocation", {
      latitude: latitude,
      longitude: longitude,
      accuracy: 100,
    });
    await GeolocationPage.open();
    await GeolocationPage.setGeolocation();

    expect(await GeolocationPage.latitudeValue).toBe(latitude.toString());
    expect(await GeolocationPage.longitudeValue).toBe(longitude.toString());
  });
});
