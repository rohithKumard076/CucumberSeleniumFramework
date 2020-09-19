package stepDefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class GoogleSearch {
	
	public WebDriver driver;
	
	@Given("^google url is laucunched$")
	public void browserlaunch() {
		System.setProperty("webdriver.chrome.driver","./driver/chromedriver.exe");
		 driver = new ChromeDriver();
		 driver.get("https://www.google.com/");	
	}
	
	@When("^search for the thing$")
	public void searchForResult() {
		try {
			Thread.sleep(5000);
		} catch (Exception e) {
			// TODO: handle exception
		}
		driver.findElement(By.xpath("(//input)[5]")).sendKeys("nobel price winner 2019");
	}
	
	@Then("^click on serach$")
	public void clickOnSearch() {
		driver.findElement(By.xpath("(//input[@aria-label=\"Google Search\"])[2]")).click();
	}
	
	@Then("^check results and close the browser$")
	public void checkResultsandClose() {
		try {
			Thread.sleep(5000);
		} catch (Exception e) {
			// TODO: handle exception
		}
		driver.close();
	}

}
