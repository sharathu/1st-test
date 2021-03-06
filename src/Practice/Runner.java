package Practice;

import java.io.File;
import java.util.Properties;

import org.junit.runner.RunWith;
import org.testng.annotations.AfterClass;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="./Features",glue={"StepDefinition"},plugin={"pretty:./Test Output/cucumber-pretty.txt"
		,"html:./Test Output/HTML Result",
		"json:./Test Output/Report.json","junit:./Test Output/CucumberResult.xml",
		//"com.cucumber.listener.ExtentCucumberFormatter:./Test Output/HTML Result/report.html"
		},
		monochrome=true,
		tags={"@Mobile,@SmokeTest"})
public class Runner {
	@AfterClass
	public static void reportSetup()
	{
		//Reporter.loadXMLConfig(new File("/src/test/java/com/cumberpr2/step/Extent-Config.xml"));
		Properties property= System.getProperties();
		property.list(System.out);
	}
	
}



