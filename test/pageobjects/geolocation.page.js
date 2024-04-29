import Page from "./page.js";

class GeolocationPage extends Page {
  get whereAmIButton() {
    return $("button");
  }

  get latitudeValue() {
    return $("#lat-value").getText();
  }

  get longitudeValue() {
    return $("#long-value").getText();
  }

  async setGeolocation() {
    await this.whereAmIButton.click();
  }

  open() {
    return super.open("geolocation");
  }
}

export default new GeolocationPage();
