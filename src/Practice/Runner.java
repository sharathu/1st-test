package Practice;

import org.junit.runner.RunWith;

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

	
}
