﻿# [the-internet-tests](http://the-internet.herokuapp.com/)

End-to-end tests for the "the-internet" website.

## Features

- WebdriverIO: For browser automation.
- Mocha: As the test framework.
- Chrome: The browser used for testing.
- Allure Reporter: For generating test reports.
- Screenshot on Failure: Captures a screenshot on every test failure.
- Jenkinsfile: For CI/CD integration with Jenkins.

## Installation

Clone the repository and install dependencies:

```bash
  git clone https://github.com/Raaaama/the-internet-tests.git
  cd the-internet-tests
  npm install
```

## Usage

Run the tests with the following command:

```bash
  npm run wdio
```

An Allure report is generated with each run. To view the report, use:

```bash
  npx allure serve allure-results
```

## Pages:

- [A/B Testing](http://the-internet.herokuapp.com/abtest) ❌
- [Add/Remove Elements](http://the-internet.herokuapp.com/add_remove_elements/) ✅
- [Basic Auth](http://the-internet.herokuapp.com/basic_auth) (user and pass: admin) ❌
- [Broken Images](http://the-internet.herokuapp.com/broken_images) ❌
- [Challenging DOM](http://the-internet.herokuapp.com/challenging_dom) ❌
- [Checkboxes](http://the-internet.herokuapp.com/checkboxes) ❌
- [Context Menu](http://the-internet.herokuapp.com/context_menu) ❌
- [Digest Authentication](http://the-internet.herokuapp.com/digest_auth) (user and pass: admin) ❌
- [Disappearing Elements](http://the-internet.herokuapp.com/disappearing_elements) ❌
- [Drag and Drop](http://the-internet.herokuapp.com/drag_and_drop) ❌
- [Dropdown](http://the-internet.herokuapp.com/dropdown) ❌
- [Dynamic Content](http://the-internet.herokuapp.com/dynamic_content) ❌
- [Dynamic Controls](http://the-internet.herokuapp.com/dynamic_controls) ❌
- [Dynamic Loading](http://the-internet.herokuapp.com/dynamic_loading) ❌
- [Entry Ad](http://the-internet.herokuapp.com/entry_ad) ✅
- [Exit Intent](http://the-internet.herokuapp.com/exit_intent) ✅
- [File Download](http://the-internet.herokuapp.com/download) ❌
- [File Upload](http://the-internet.herokuapp.com/upload) ❌
- [Floating Menu](http://the-internet.herokuapp.com/floating_menu) ✅
- [Forgot Password](http://the-internet.herokuapp.com/forgot_password) ❌
- [Form Authentication](http://the-internet.herokuapp.com/login) ✅
- [Frames](http://the-internet.herokuapp.com/frames) ❌
- [Geolocation](http://the-internet.herokuapp.com/geolocation) ✅
- [Horizontal Slider](http://the-internet.herokuapp.com/horizontal_slider) ✅
- [Hovers](http://the-internet.herokuapp.com/hovers) ✅
- [Infinite Scroll](http://the-internet.herokuapp.com/infinite_scroll) ❌
- [Inputs](http://the-internet.herokuapp.com/inputs) ✅
- [JQuery UI Menus](http://the-internet.herokuapp.com/jqueryui/menu) ❌
- [JavaScript Alerts](http://the-internet.herokuapp.com/javascript_alerts) ❌
- [JavaScript onload event error](http://the-internet.herokuapp.com/javascript_error) ❌
- [Key Presses](http://the-internet.herokuapp.com/key_presses) ❌
- [Large & Deep DOM](http://the-internet.herokuapp.com/large) ❌
- [Multiple Windows](http://the-internet.herokuapp.com/windows) ❌
- [Nested Frames](http://the-internet.herokuapp.com/nested_frames) ❌
- [Notification Messages](http://the-internet.herokuapp.com/notification_message) ❌
- [Redirect Link](http://the-internet.herokuapp.com/redirector) ❌
- [Secure File Download](http://the-internet.herokuapp.com/download_secure) ❌
- [Shadow DOM](http://the-internet.herokuapp.com/shadowdom) ❌
- [Shifting Content](http://the-internet.herokuapp.com/shifting_content) ❌
- [Slow Resources](http://the-internet.herokuapp.com/slow) ❌
- [Sortable Data Tables](http://the-internet.herokuapp.com/tables) ❌
- [Status Codes](http://the-internet.herokuapp.com/status_codes) ❌
- [Typos](http://the-internet.herokuapp.com/typos) ❌
- [WYSIWYG Editor](http://the-internet.herokuapp.com/tinymce) ❌
