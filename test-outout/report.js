$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/RNIS/Desktop/Cucumber/CucumberSeleniumFramework-master/src/main/java/Features/googlesearch.feature");
formatter.feature({
  "line": 1,
  "name": "google search",
  "description": "",
  "id": "google-search",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Google search",
  "description": "",
  "id": "google-search;google-search",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "google url is laucunched",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "search for the thing",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "click on serach",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "check results and close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "google-search;google-search;",
  "rows": [
    {
      "cells": [
        "googleserach"
      ],
      "line": 10,
      "id": "google-search;google-search;;1"
    },
    {
      "cells": [
        "Nobel price winner"
      ],
      "line": 11,
      "id": "google-search;google-search;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 456480,
  "status": "passed"
});
formatter.before({
  "duration": 19329657,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Google search",
  "description": "",
  "id": "google-search;google-search;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "google url is laucunched",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "search for the thing",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "click on serach",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "check results and close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "GoogleSearch.browserlaunch()"
});
formatter.result({
  "duration": 26605523537,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearch.searchForResult()"
});
formatter.result({
  "duration": 5077645707,
  "error_message": "org.openqa.selenium.ElementNotVisibleException: element not visible\n  (Session info: chrome\u003d77.0.3865.90)\n  (Driver info: chromedriver\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027RNIS-PC\u0027, ip: \u0027169.254.65.165\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, platformName\u003dXP, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb), userDataDir\u003dC:\\Users\\RNIS\\AppData\\Local\\Temp\\scoped_dir5736_30015}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d77.0.3865.90, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 02ebd8f0bfe74da59d4c409be5eb422c\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:275)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.sendKeys(RemoteWebElement.java:99)\r\n\tat stepDefinitions.GoogleSearch.searchForResult(GoogleSearch.java:29)\r\n\tat ✽.When search for the thing(C:/Users/RNIS/Desktop/Cucumber/CucumberSeleniumFramework-master/src/main/java/Features/googlesearch.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "GoogleSearch.clickOnSearch()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GoogleSearch.checkResultsandClose()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 110662,
  "status": "passed"
});
formatter.after({
  "duration": 91028,
  "status": "passed"
});
});