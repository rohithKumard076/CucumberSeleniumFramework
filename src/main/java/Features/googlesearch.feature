Feature: google search

Scenario Outline:Google search
Given google url is laucunched
When search for the thing
Then click on serach
Then check results and close the browser

Examples:
|googleserach|
|Nobel price winner|