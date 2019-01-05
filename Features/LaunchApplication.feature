Feature: browser launching

@SmokeTest
Scenario: launching the browser

Given I open the "chrome" browser and launch "https://phlvdqapport08.nextgen.com/ppmain" site
Then on "PP_Main_Login_Page" page, I verify the page title is displayed as "Login - Patient Portal"
Then on "Main_LoginPage" page, I verify "WelcomeToPP_Label" is displayed as "Welcome to Patient Portal, Your Medical Home on the Web"
Then on "Main_LoginPage" page, I verify "WelcomeMsg_Description_Label" is displayed as "With Patient Portal, you can connect with your doctor through a convenient, safe and secure environment."
Then on "Main_LoginPage" page, I verify "LoginToPatientPortal_Label" is displayed as "Log into Patient Portal"
Then on "Main_LoginPage" page, I verify "Username_Label" is displayed as "Username"
Then on "Main_LoginPage" page, I verify "Password_Label" is displayed as "Password"
Then on "Main_LoginPage" page, I verify "ForgotUsername_Link" is enabled
Then on "Main_LoginPage" page, I verify "ForgotPassword_Link" is enabled
Then on "Main_LoginPage" page, I verify "IHaveMyPasswordResetToken_Link" is enabled
Then on "Main_LoginPage" page, I verify "CreateAccount_Link" is enabled
Then on "Main_LoginPage" page, I verify "OnlinePatientHelp_Link" is enabled
Then on "Main_LoginPage" page, I verify "Iam_not_receiving_email_notification_link" is enabled
Then on "Main_LoginPage" page, I verify "SiteMap_Link" is enabled
Then on "Main_LoginPage" page, I verify "Privacy_Policy_Footer_Link" is enabled
Then on "Main_LoginPage" page, I verify "MobileSite_Link" is enabled
Then on "Main_LoginPage" page, I verify "Privacy_Policy_Link" is enabled
Then on "Main_LoginPage" page, I verify "I_am_new_here_Label" is displayed as "I am new here"
Then on "Main_LoginPage" page, I verify "Footer_Msg_Label" is displayed as "Your security is important. We use technology to encrypt, safeguard, and secure your personal information. Please view our Privacy Policy for more information"
Then on "Main_LoginPage" page, I verify "CopyRight_Label" is displayed as "©1996-2018 QSI Management, LLC"
When on "Main_LoginPage" page, I set value in "Username_EditBox" to "Skenrollment@32"
When on "Main_LoginPage" page, I set value in "Password_EditBox" to "Skenrollment@32"
And on "Main_LoginPage" page, I click on "Login_Btn" "button"
Then on "Main_DashboardPage" page, I verify the page title is displayed as "Dashboard - Patient Portal"
When on "Main_DashboardPage" page, I verify whether the "DashboardNotificationGrid_List" grid contains "Personal Health Record"
When on "Main_DashboardPage" page, I click on "Mail_Tab" and move to "Inbox_Tab1" element
Then on "Main_Inbox_Page" page, I verify that the "Inbox_Table" table contains "Personal Health Record/Personal Health Record"
When on "Main_DashboardPage" page, I click on "Logout_Link" "Link"
Then on "PP_Main_LOgin_Page" page, I verify the page title is displayed as "Login - Patient Portal"
Then I close the browser

@SmokeTest
Scenario: Requesting the Manual PHR.

When I open the "chrome" browser and launch "https://phlvdqapport08.nextgen.com/ppmain" site
Then on "PP_Main_Login_Page" page, I verify the page title is displayed as "Login - Patient Portal"
When on "Main_LoginPage" page, I set value in "Username_EditBox" to "Skenrollment@32"
And on "Main_LoginPage" page, I set value in "Password_EditBox" to "Skenrollment@32"
And on "Main_LoginPage" page, I click on "Login_Btn" "button"
Then on "Main_DashboardPage" page, I verify the page title is displayed as "Dashboard - Patient Portal"
When on "Main_DashboardPage" page, I click on "Mychart_Tab" and move to "RequestHealthRecord_Tab" element
Then on "Main_RequestHealthRecord_Page" page, I verify the page title is displayed as "Request Health Record - Patient Portal"
And on "Main_RequestHealthRecord_Page" page, I verify "Request_Personal_Health_Record_Label" is displayed as "Request Personal Health Record"
And on "Main_RequestHealthRecord_Page" page, I verify "Select_Practice_And_Patient_Label" is displayed as "1) Select Practice and Patient"
And on "Main_RequestHealthRecord_Page" page, I verify "Please_select_medical_practice_Label" is displayed as "Please select the medical practice and the person on which behalf the request will be sent to the practice."
And on "Main_RequestHealthRecord_Page" page, I verify "Practice_Label" is displayed as "*Practice:"
And on "Main_RequestHealthRecord_Page" page, I verify "Select_Chart_Date_Label" is displayed as "2) Select Chart Date"
And on "Main_RequestHealthRecord_Page" page, I verify "Please_Select_chart_Description_Label" is displayed as "Please select the medical practice and the person on which behalf the request will be sent to the practice."
When on "Main_RequestHealthRecord_Page" page, I click on "Submit_Btn" "button"
And on "Main_DashboardPage" page, I click on "Logout_Link" "Link"
Then I close the browser

@Mobile
Scenario: Mobile site Login Logout
When I open the "firefox" browser and launch "https://phlvdqapport08.nextgen.com/ppmobile" site
Then on "Mobile_LoginLocators" page, I verify "username_EditBox" is displayed
And on "Mobile_LoginLocators" page, I verify "password_EditBox" is displayed
And on "Mobile_LoginLocators" page, I verify "login_Btn" is displayed
And on "Mobile_LoginLocators" page, I verify "CreateAccount_Link" is displayed 
When on "Mobile_LoginLocators" page, I set value in "username_EditBox" to "Skenrollment@32"
And on "Mobile_LoginLocators" page, I set value in "password_EditBox" to "Skenrollment@32"
And on "Mobile_LoginLocators" page, I click on "login_Btn" "button"
Then on "Mobile_DashboardLocators" page, I verify the page title is displayed as "Dashboard Patient Portal"
When on "Mobile_DashboardLocators" page, I click on "Menu_btn" "Button"
And on "Mobile_DashboardLocators" page, I click on "LogOut_link" "Link"
Then on "Mobile_LoginLocators" page, I verify the page title is displayed as "Login Patient Portal"
Then I close the browser

