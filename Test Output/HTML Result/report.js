$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("LaunchApplication.feature");
formatter.feature({
  "line": 1,
  "name": "browser launching",
  "description": "",
  "id": "browser-launching",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "launching the browser",
  "description": "",
  "id": "browser-launching;launching-the-browser",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I open the \"chrome\" browser and launch \"https://phlvdqapport08.nextgen.com/ppmain\" site",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "on \"PP_Main_Login_Page\" page, I verify the page title is displayed as \"Login - Patient Portal\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "on \"Main_LoginPage\" page, I verify \"WelcomeToPP_Label\" is displayed as \"Welcome to Patient Portal, Your Medical Home on the Web\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "on \"Main_LoginPage\" page, I verify \"WelcomeMsg_Description_Label\" is displayed as \"With Patient Portal, you can connect with your doctor through a convenient, safe and secure environment.\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "on \"Main_LoginPage\" page, I verify \"LoginToPatientPortal_Label\" is displayed as \"Log into Patient Portal\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "on \"Main_LoginPage\" page, I verify \"Username_Label\" is displayed as \"Username\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "on \"Main_LoginPage\" page, I verify \"Password_Label\" is displayed as \"Password\"",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "on \"Main_LoginPage\" page, I verify \"ForgotUsername_Link\" is enabled",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "on \"Main_LoginPage\" page, I verify \"ForgotPassword_Link\" is enabled",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "on \"Main_LoginPage\" page, I verify \"IHaveMyPasswordResetToken_Link\" is enabled",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "on \"Main_LoginPage\" page, I verify \"CreateAccount_Link\" is enabled",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "on \"Main_LoginPage\" page, I verify \"OnlinePatientHelp_Link\" is enabled",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "on \"Main_LoginPage\" page, I verify \"Iam_not_receiving_email_notification_link\" is enabled",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "on \"Main_LoginPage\" page, I verify \"SiteMap_Link\" is enabled",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "on \"Main_LoginPage\" page, I verify \"Privacy_Policy_Footer_Link\" is enabled",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "on \"Main_LoginPage\" page, I verify \"MobileSite_Link\" is enabled",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "on \"Main_LoginPage\" page, I verify \"Privacy_Policy_Link\" is enabled",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "on \"Main_LoginPage\" page, I verify \"I_am_new_here_Label\" is displayed as \"I am new here\"",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "on \"Main_LoginPage\" page, I verify \"Footer_Msg_Label\" is displayed as \"Your security is important. We use technology to encrypt, safeguard, and secure your personal information. Please view our Privacy Policy for more information\"",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "on \"Main_LoginPage\" page, I verify \"CopyRight_Label\" is displayed as \"�1996-2018 QSI Management, LLC\"",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "on \"Main_LoginPage\" page, I set value in \"Username_EditBox\" to \"Skenrollment@32\"",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "on \"Main_LoginPage\" page, I set value in \"Password_EditBox\" to \"Skenrollment@32\"",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "on \"Main_LoginPage\" page, I click on \"Login_Btn\" \"button\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "on \"Main_DashboardPage\" page, I verify the page title is displayed as \"Dashboard - Patient Portal\"",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "on \"Main_DashboardPage\" page, I verify whether the \"DashboardNotificationGrid_List\" grid contains \"Personal Health Record\"",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "on \"Main_DashboardPage\" page, I click on \"Mail_Tab\" and move to \"Inbox_Tab1\" element",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "on \"Main_Inbox_Page\" page, I verify that the \"Inbox_Table\" table contains \"Personal Health Record/Personal Health Record\"",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "on \"Main_DashboardPage\" page, I click on \"Logout_Link\" \"Link\"",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "on \"PP_Main_LOgin_Page\" page, I verify the page title is displayed as \"Login - Patient Portal\"",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "I close the browser",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 12
    },
    {
      "val": "https://phlvdqapport08.nextgen.com/ppmain",
      "offset": 40
    }
  ],
  "location": "Definition.open_browser_and_launch_application(String,String)"
});
formatter.result({
  "duration": 16871458770,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PP_Main_Login_Page",
      "offset": 4
    },
    {
      "val": "Login - Patient Portal",
      "offset": 71
    }
  ],
  "location": "Definition.verifyTitle(String,String)"
});
formatter.result({
  "duration": 19821866,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Main_LoginPage",
      "offset": 4
    },
    {
      "val": "WelcomeToPP_Label",
      "offset": 36
    },
    {
      "val": "Welcome to Patient Portal, Your Medical Home on the Web",
      "offset": 72
    }
  ],
  "location": "Definition.TextVerification(String,String,String)"
});
formatter.result({
  "duration": 96754585,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Main_LoginPage",
      "offset": 4
    },
    {
      "val": "WelcomeMsg_Description_Label",
      "offset": 36
    },
    {
      "val": "With Patient Portal, you can connect with your doctor through a convenient, safe and secure environment.",
      "offset": 83
    }
  ],
  "location": "Definition.TextVerification(String,String,String)"
});
formatter.result({
  "duration": 45414886,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Main_LoginPage",
      "offset": 4
    },
    {
      "val": "LoginToPatientPortal_Label",
      "offset": 36
    },
    {
      "val": "Log into Patient Portal",
      "offset": 81
    }
  ],
  "location": "Definition.TextVerification(String,String,String)"
});
formatter.result({
  "duration": 41162597,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Main_LoginPage",
      "offset": 4
    },
    {
      "val": "Username_Label",
      "offset": 36
    },
    {
      "val": "Username",
      "offset": 69
    }
  ],
  "location": "Definition.TextVerification(String,String,String)"
});
formatter.result({
  "duration": 47308652,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Main_LoginPage",
      "offset": 4
    },
    {
      "val": "Password_Label",
      "offset": 36
    },
    {
      "val": "Password",
      "offset": 69
    }
  ],
  "location": "Definition.TextVerification(String,String,String)"
});
formatter.result({
  "duration": 37581960,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Main_LoginPage",
      "offset": 4
    },
    {
      "val": "ForgotUsername_Link",
      "offset": 36
    }
  ],
  "location": "Definition.VerifyObjectIsEnabled(String,String)"
});
formatter.result({
  "duration": 30842027,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Main_LoginPage",
      "offset": 4
    },
    {
      "val": "ForgotPassword_Link",
      "offset": 36
    }
  ],
  "location": "Definition.VerifyObjectIsEnabled(String,String)"
});
formatter.result({
  "duration": 31770788,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Main_LoginPage",
      "offset": 4
    },
    {
      "val": "IHaveMyPasswordResetToken_Link",
      "offset": 36
    }
  ],
  "location": "Definition.VerifyObjectIsEnabled(String,String)"
});
formatter.result({
  "duration": 32075467,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Main_LoginPage",
      "offset": 4
    },
    {
      "val": "CreateAccount_Link",
      "offset": 36
    }
  ],
  "location": "Definition.VerifyObjectIsEnabled(String,String)"
});
formatter.result({
  "duration": 34085894,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Main_LoginPage",
      "offset": 4
    },
    {
      "val": "OnlinePatientHelp_Link",
      "offset": 36
    }
  ],
  "location": "Definition.VerifyObjectIsEnabled(String,String)"
});
formatter.result({
  "duration": 33248876,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Main_LoginPage",
      "offset": 4
    },
    {
      "val": "Iam_not_receiving_email_notification_link",
      "offset": 36
    }
  ],
  "location": "Definition.VerifyObjectIsEnabled(String,String)"
});
formatter.result({
  "duration": 34298075,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Main_LoginPage",
      "offset": 4
    },
    {
      "val": "SiteMap_Link",
      "offset": 36
    }
  ],
  "location": "Definition.VerifyObjectIsEnabled(String,String)"
});
formatter.result({
  "duration": 30975678,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Main_LoginPage",
      "offset": 4
    },
    {
      "val": "Privacy_Policy_Footer_Link",
      "offset": 36
    }
  ],
  "location": "Definition.VerifyObjectIsEnabled(String,String)"
});
formatter.result({
  "duration": 33848041,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Main_LoginPage",
      "offset": 4
    },
    {
      "val": "MobileSite_Link",
      "offset": 36
    }
  ],
  "location": "Definition.VerifyObjectIsEnabled(String,String)"
});
formatter.result({
  "duration": 37347882,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Main_LoginPage",
      "offset": 4
    },
    {
      "val": "Privacy_Policy_Link",
      "offset": 36
    }
  ],
  "location": "Definition.VerifyObjectIsEnabled(String,String)"
});
formatter.result({
  "duration": 34095710,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Main_LoginPage",
      "offset": 4
    },
    {
      "val": "I_am_new_here_Label",
      "offset": 36
    },
    {
      "val": "I am new here",
      "offset": 74
    }
  ],
  "location": "Definition.TextVerification(String,String,String)"
});
formatter.result({
  "duration": 41290585,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Main_LoginPage",
      "offset": 4
    },
    {
      "val": "Footer_Msg_Label",
      "offset": 36
    },
    {
      "val": "Your security is important. We use technology to encrypt, safeguard, and secure your personal information. Please view our Privacy Policy for more information",
      "offset": 71
    }
  ],
  "location": "Definition.TextVerification(String,String,String)"
});
formatter.result({
  "duration": 47037575,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Main_LoginPage",
      "offset": 4
    },
    {
      "val": "CopyRight_Label",
      "offset": 36
    },
    {
      "val": "�1996-2018 QSI Management, LLC",
      "offset": 70
    }
  ],
  "location": "Definition.TextVerification(String,String,String)"
});
formatter.result({
  "duration": 428975294,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Main_LoginPage",
      "offset": 4
    },
    {
      "val": "Username_EditBox",
      "offset": 42
    },
    {
      "val": "Skenrollment@32",
      "offset": 64
    }
  ],
  "location": "Definition.Set_value_in_editbox(String,String,String)"
});
formatter.result({
  "duration": 126624057,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Main_LoginPage",
      "offset": 4
    },
    {
      "val": "Password_EditBox",
      "offset": 42
    },
    {
      "val": "Skenrollment@32",
      "offset": 64
    }
  ],
  "location": "Definition.Set_value_in_editbox(String,String,String)"
});
formatter.result({
  "duration": 88131080,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Main_LoginPage",
      "offset": 4
    },
    {
      "val": "Login_Btn",
      "offset": 38
    },
    {
      "val": "button",
      "offset": 50
    }
  ],
  "location": "Definition.ClickOnObject(String,String,String)"
});
formatter.result({
  "duration": 41453286925,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Main_DashboardPage",
      "offset": 4
    },
    {
      "val": "Dashboard - Patient Portal",
      "offset": 71
    }
  ],
  "location": "Definition.verifyTitle(String,String)"
});
formatter.result({
  "duration": 20247360,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Main_DashboardPage",
      "offset": 4
    },
    {
      "val": "DashboardNotificationGrid_List",
      "offset": 52
    },
    {
      "val": "Personal Health Record",
      "offset": 99
    }
  ],
  "location": "Definition.GridData(String,String,String)"
});
formatter.result({
  "duration": 9284557920,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Main_DashboardPage",
      "offset": 4
    },
    {
      "val": "Mail_Tab",
      "offset": 42
    },
    {
      "val": "Inbox_Tab1",
      "offset": 65
    }
  ],
  "location": "Definition.mouseHover(String,String,String)"
});
formatter.result({
  "duration": 9465480874,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Main_Inbox_Page",
      "offset": 4
    },
    {
      "val": "Inbox_Table",
      "offset": 46
    },
    {
      "val": "Personal Health Record/Personal Health Record",
      "offset": 75
    }
  ],
  "location": "Definition.TableVerificationStep(String,String,String)"
});
formatter.result({
  "duration": 8636548770,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Main_DashboardPage",
      "offset": 4
    },
    {
      "val": "Logout_Link",
      "offset": 42
    },
    {
      "val": "Link",
      "offset": 56
    }
  ],
  "location": "Definition.ClickOnObject(String,String,String)"
});
formatter.result({
  "duration": 13440998969,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PP_Main_LOgin_Page",
      "offset": 4
    },
    {
      "val": "Login - Patient Portal",
      "offset": 71
    }
  ],
  "location": "Definition.verifyTitle(String,String)"
});
formatter.result({
  "duration": 28549951,
  "status": "passed"
});
formatter.match({
  "location": "Definition.browser_close()"
});
formatter.result({
  "duration": 938087531,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Requesting the Manual PHR.",
  "description": "",
  "id": "browser-launching;requesting-the-manual-phr.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 37,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 40,
  "name": "I open the \"chrome\" browser and launch \"https://phlvdqapport08.nextgen.com/ppmain\" site",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "on \"PP_Main_Login_Page\" page, I verify the page title is displayed as \"Login - Patient Portal\"",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "on \"Main_LoginPage\" page, I set value in \"Username_EditBox\" to \"Skenrollment@32\"",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "on \"Main_LoginPage\" page, I set value in \"Password_EditBox\" to \"Skenrollment@32\"",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "on \"Main_LoginPage\" page, I click on \"Login_Btn\" \"button\"",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "on \"Main_DashboardPage\" page, I verify the page title is displayed as \"Dashboard - Patient Portal\"",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "on \"Main_DashboardPage\" page, I click on \"Mychart_Tab\" and move to \"RequestHealthRecord_Tab\" element",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "on \"Main_RequestHealthRecord_Page\" page, I verify the page title is displayed as \"Request Health Record - Patient Portal\"",
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "on \"Main_RequestHealthRecord_Page\" page, I verify \"Request_Personal_Health_Record_Label\" is displayed as \"Request Personal Health Record\"",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "on \"Main_RequestHealthRecord_Page\" page, I verify \"Select_Practice_And_Patient_Label\" is displayed as \"1) Select Practice and Patient\"",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "on \"Main_RequestHealthRecord_Page\" page, I verify \"Please_select_medical_practice_Label\" is displayed as \"Please select the medical practice and the person on which behalf the request will be sent to the practice.\"",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "on \"Main_RequestHealthRecord_Page\" page, I verify \"Practice_Label\" is displayed as \"*Practice:\"",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "on \"Main_RequestHealthRecord_Page\" page, I verify \"Select_Chart_Date_Label\" is displayed as \"2) Select Chart Date\"",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "on \"Main_RequestHealthRecord_Page\" page, I verify \"Please_Select_chart_Description_Label\" is displayed as \"Please select the medical practice and the person on which behalf the request will be sent to the practice.\"",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "on \"Main_RequestHealthRecord_Page\" page, I click on \"Submit_Btn\" \"button\"",
  "keyword": "When "
});
formatter.step({
  "line": 55,
  "name": "on \"Main_DashboardPage\" page, I click on \"Logout_Link\" \"Link\"",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "I close the browser",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 12
    },
    {
      "val": "https://phlvdqapport08.nextgen.com/ppmain",
      "offset": 40
    }
  ],
  "location": "Definition.open_browser_and_launch_application(String,String)"
});
formatter.result({
  "duration": 13962130351,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PP_Main_Login_Page",
      "offset": 4
    },
    {
      "val": "Login - Patient Portal",
      "offset": 71
    }
  ],
  "location": "Definition.verifyTitle(String,String)"
});
formatter.result({
  "duration": 11092272,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Main_LoginPage",
      "offset": 4
    },
    {
      "val": "Username_EditBox",
      "offset": 42
    },
    {
      "val": "Skenrollment@32",
      "offset": 64
    }
  ],
  "location": "Definition.Set_value_in_editbox(String,String,String)"
});
formatter.result({
  "duration": 106937729,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Main_LoginPage",
      "offset": 4
    },
    {
      "val": "Password_EditBox",
      "offset": 42
    },
    {
      "val": "Skenrollment@32",
      "offset": 64
    }
  ],
  "location": "Definition.Set_value_in_editbox(String,String,String)"
});
formatter.result({
  "duration": 90350290,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Main_LoginPage",
      "offset": 4
    },
    {
      "val": "Login_Btn",
      "offset": 38
    },
    {
      "val": "button",
      "offset": 50
    }
  ],
  "location": "Definition.ClickOnObject(String,String,String)"
});
formatter.result({
  "duration": 22045007892,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Main_DashboardPage",
      "offset": 4
    },
    {
      "val": "Dashboard - Patient Portal",
      "offset": 71
    }
  ],
  "location": "Definition.verifyTitle(String,String)"
});
formatter.result({
  "duration": 11588366,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Main_DashboardPage",
      "offset": 4
    },
    {
      "val": "Mychart_Tab",
      "offset": 42
    },
    {
      "val": "RequestHealthRecord_Tab",
      "offset": 68
    }
  ],
  "location": "Definition.mouseHover(String,String,String)"
});
formatter.result({
  "duration": 17927859837,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Main_RequestHealthRecord_Page",
      "offset": 4
    },
    {
      "val": "Request Health Record - Patient Portal",
      "offset": 82
    }
  ],
  "location": "Definition.verifyTitle(String,String)"
});
formatter.result({
  "duration": 13165372,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Main_RequestHealthRecord_Page",
      "offset": 4
    },
    {
      "val": "Request_Personal_Health_Record_Label",
      "offset": 51
    },
    {
      "val": "Request Personal Health Record",
      "offset": 106
    }
  ],
  "location": "Definition.TextVerification(String,String,String)"
});
formatter.result({
  "duration": 56588708,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Main_RequestHealthRecord_Page",
      "offset": 4
    },
    {
      "val": "Select_Practice_And_Patient_Label",
      "offset": 51
    },
    {
      "val": "1) Select Practice and Patient",
      "offset": 103
    }
  ],
  "location": "Definition.TextVerification(String,String,String)"
});
formatter.result({
  "duration": 384645094,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Main_RequestHealthRecord_Page",
      "offset": 4
    },
    {
      "val": "Please_select_medical_practice_Label",
      "offset": 51
    },
    {
      "val": "Please select the medical practice and the person on which behalf the request will be sent to the practice.",
      "offset": 106
    }
  ],
  "location": "Definition.TextVerification(String,String,String)"
});
formatter.result({
  "duration": 39088365,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Main_RequestHealthRecord_Page",
      "offset": 4
    },
    {
      "val": "Practice_Label",
      "offset": 51
    },
    {
      "val": "*Practice:",
      "offset": 84
    }
  ],
  "location": "Definition.TextVerification(String,String,String)"
});
formatter.result({
  "duration": 41172790,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Main_RequestHealthRecord_Page",
      "offset": 4
    },
    {
      "val": "Select_Chart_Date_Label",
      "offset": 51
    },
    {
      "val": "2) Select Chart Date",
      "offset": 93
    }
  ],
  "location": "Definition.TextVerification(String,String,String)"
});
formatter.result({
  "duration": 41707394,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Main_RequestHealthRecord_Page",
      "offset": 4
    },
    {
      "val": "Please_Select_chart_Description_Label",
      "offset": 51
    },
    {
      "val": "Please select the medical practice and the person on which behalf the request will be sent to the practice.",
      "offset": 107
    }
  ],
  "location": "Definition.TextVerification(String,String,String)"
});
formatter.result({
  "duration": 35675735,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Main_RequestHealthRecord_Page",
      "offset": 4
    },
    {
      "val": "Submit_Btn",
      "offset": 53
    },
    {
      "val": "button",
      "offset": 66
    }
  ],
  "location": "Definition.ClickOnObject(String,String,String)"
});
formatter.result({
  "duration": 3062714752,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Main_DashboardPage",
      "offset": 4
    },
    {
      "val": "Logout_Link",
      "offset": 42
    },
    {
      "val": "Link",
      "offset": 56
    }
  ],
  "location": "Definition.ClickOnObject(String,String,String)"
});
formatter.result({
  "duration": 7311009854,
  "status": "passed"
});
formatter.match({
  "location": "Definition.browser_close()"
});
formatter.result({
  "duration": 853943703,
  "status": "passed"
});
formatter.scenario({
  "line": 59,
  "name": "Mobile site Login Logout",
  "description": "",
  "id": "browser-launching;mobile-site-login-logout",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 58,
      "name": "@Mobile"
    }
  ]
});
formatter.step({
  "line": 60,
  "name": "I open the \"firefox\" browser and launch \"https://phlvdqapport08.nextgen.com/ppmobile\" site",
  "keyword": "When "
});
formatter.step({
  "line": 61,
  "name": "on \"Mobile_LoginLocators\" page, I verify \"username_EditBox\" is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 62,
  "name": "on \"Mobile_LoginLocators\" page, I verify \"password_EditBox\" is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "on \"Mobile_LoginLocators\" page, I verify \"login_Btn\" is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "on \"Mobile_LoginLocators\" page, I verify \"CreateAccount_Link\" is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "on \"Mobile_LoginLocators\" page, I set value in \"username_EditBox\" to \"Skenrollment@32\"",
  "keyword": "When "
});
formatter.step({
  "line": 66,
  "name": "on \"Mobile_LoginLocators\" page, I set value in \"password_EditBox\" to \"Skenrollment@32\"",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "on \"Mobile_LoginLocators\" page, I click on \"login_Btn\" \"button\"",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "on \"Mobile_DashboardLocators\" page, I verify the page title is displayed as \"Dashboard Patient Portal\"",
  "keyword": "Then "
});
formatter.step({
  "line": 69,
  "name": "on \"Mobile_DashboardLocators\" page, I click on \"Menu_btn\" \"Button\"",
  "keyword": "When "
});
formatter.step({
  "line": 70,
  "name": "on \"Mobile_DashboardLocators\" page, I click on \"LogOut_link\" \"Link\"",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "on \"Mobile_LoginLocators\" page, I verify the page title is displayed as \"Login Patient Portal\"",
  "keyword": "Then "
});
formatter.step({
  "line": 72,
  "name": "I close the browser",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "firefox",
      "offset": 12
    },
    {
      "val": "https://phlvdqapport08.nextgen.com/ppmobile",
      "offset": 41
    }
  ],
  "location": "Definition.open_browser_and_launch_application(String,String)"
});
formatter.result({
  "duration": 23075003464,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mobile_LoginLocators",
      "offset": 4
    },
    {
      "val": "username_EditBox",
      "offset": 42
    }
  ],
  "location": "Definition.VerifyObjectIsDisplayed(String,String)"
});
formatter.result({
  "duration": 91222419,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mobile_LoginLocators",
      "offset": 4
    },
    {
      "val": "password_EditBox",
      "offset": 42
    }
  ],
  "location": "Definition.VerifyObjectIsDisplayed(String,String)"
});
formatter.result({
  "duration": 53344463,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mobile_LoginLocators",
      "offset": 4
    },
    {
      "val": "login_Btn",
      "offset": 42
    }
  ],
  "location": "Definition.VerifyObjectIsDisplayed(String,String)"
});
formatter.result({
  "duration": 40508311,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mobile_LoginLocators",
      "offset": 4
    },
    {
      "val": "CreateAccount_Link",
      "offset": 42
    }
  ],
  "location": "Definition.VerifyObjectIsDisplayed(String,String)"
});
formatter.result({
  "duration": 44243741,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mobile_LoginLocators",
      "offset": 4
    },
    {
      "val": "username_EditBox",
      "offset": 48
    },
    {
      "val": "Skenrollment@32",
      "offset": 70
    }
  ],
  "location": "Definition.Set_value_in_editbox(String,String,String)"
});
formatter.result({
  "duration": 58301252,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mobile_LoginLocators",
      "offset": 4
    },
    {
      "val": "password_EditBox",
      "offset": 48
    },
    {
      "val": "Skenrollment@32",
      "offset": 70
    }
  ],
  "location": "Definition.Set_value_in_editbox(String,String,String)"
});
formatter.result({
  "duration": 45392989,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mobile_LoginLocators",
      "offset": 4
    },
    {
      "val": "login_Btn",
      "offset": 44
    },
    {
      "val": "button",
      "offset": 56
    }
  ],
  "location": "Definition.ClickOnObject(String,String,String)"
});
formatter.result({
  "duration": 8259864590,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mobile_DashboardLocators",
      "offset": 4
    },
    {
      "val": "Dashboard Patient Portal",
      "offset": 77
    }
  ],
  "location": "Definition.verifyTitle(String,String)"
});
formatter.result({
  "duration": 10029105,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mobile_DashboardLocators",
      "offset": 4
    },
    {
      "val": "Menu_btn",
      "offset": 48
    },
    {
      "val": "Button",
      "offset": 59
    }
  ],
  "location": "Definition.ClickOnObject(String,String,String)"
});
formatter.result({
  "duration": 3445756791,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mobile_DashboardLocators",
      "offset": 4
    },
    {
      "val": "LogOut_link",
      "offset": 48
    },
    {
      "val": "Link",
      "offset": 62
    }
  ],
  "location": "Definition.ClickOnObject(String,String,String)"
});
formatter.result({
  "duration": 5044704346,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mobile_LoginLocators",
      "offset": 4
    },
    {
      "val": "Login Patient Portal",
      "offset": 73
    }
  ],
  "location": "Definition.verifyTitle(String,String)"
});
formatter.result({
  "duration": 7652836,
  "status": "passed"
});
formatter.match({
  "location": "Definition.browser_close()"
});
formatter.result({
  "duration": 905134650,
  "status": "passed"
});
});