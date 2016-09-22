Hi Liam, it was nice speaking with you earlier.  Below you will find the coding exercise.  Please feel free to reach out to me if you have any questions about the exercise or how we would like you to approach it.  Please send this back to us by Sunday night so we can look it over before your interview on Monday. 


About:
This is the coding challenge given to developer candidates for hire at Earthling Interactive
Drafted by Thomas and Stevens
This version of the coding challenge was first adopted in September 2015



Overview:
--------------------------------------
Create a one page application that shows a survey question with possible answers.  After the question is answered then results will be displayed.

A site visitor who views the survey page will see 1 Survey Question with 2 ... N Survey Answers.
The visitor will only be able to select a single answer for the question. 
The visitor will be required to select a single answer before submitting the form.
After form submission the visitor should see other answers that have been submitted in the past.

Tech:
--------------------------------------
The application question and its answers should come from a datastore on the server. This could be a simple JSON file, Redis, LevelDB, or any other database (completely up to you).
The application webpage should be served from a web server running Node.js or PHP
The application should use ReactJS for the front end if you have sufficient React experience.  If not, you may choose JQuery, Angular, or something else if you prefer / are more comfortable with.
At its simplest, a node/express server with HTML/CSS/jQuery on the front end and a JSON file for data storage can get the job done.
The application should have its visitor answers persist after it is restarted.
The submission and results should be displayed without refreshing the webpage. I.E. using Ajax.
The rendered HTML should be semantic and page should have a good user experience based on best practices.

Delivery:
---------------------------------------
The preferred delivery method for code is to put the code on a private repo such as Bitbucket and share it from there.   Alternatively you may zip up the code files and delivery those files via email or Google Drive.

The preferred delivery method for the application UI is to get the app running on a server and then we just have to hit a URL.  If that is not an option you can send us the info we need to get it running locally but sometimes that can be problematic.

Boilerplates/Scaffolding:
---------------------------------------
 If you use a boilerplate or scaffolding tool to get the project started, please install the scaffold and create a branch from there so that we can use diff tools to easily see your code separate from the generated code. 

Also take care to make sure your code is the star and the scaffold is playing a supporting role rather than the other way around. While we appreciate the ability to find a tool that makes a problem very easy to solve, the point of this exercise is to give us a sample of your code and an insight into how you approach projects.


Survey Question Structure
================
id
question text


Survey Question Answer Structure
================
id
order
answer text
survey question id


Question Example
--------------------------------------
How many people live in your household?

1
2
3
4
More than 4


Survey Results Example
--------------------------------------
How many people live in your household?

1                       ( 5 answered     25% )
2                       ( 0 answered     0%  )
3                       ( 0 answered     0%  )
4                       ( 10 answered    50% )
More than 4             ( 5 answered     25% )


The examples provided are just here to give you a better idea of what the application will do.  Please take liberties with the visual design.
If you have any questions please reach out for clarification of requirements.

...

www.earthlinginteractive.com
