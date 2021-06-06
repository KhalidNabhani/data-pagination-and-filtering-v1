# data-pagination-and-filtering-v1
FSJS Project 2 - Data Pagination and Filtering
Project Instructions
To complete this project, follow the instructions below. If you get stuck, ask a question on Slack or in the Treehouse Community.

 7 steps
Review Your Resources
Before you start the project, be sure to review the material and resources available to you.

The “Project Resources” section on the right-hand side of this page contains links to optional project resources that can help you complete the project. Here is a description of some of the resources you will find there:
Project Study Guide - A list of links to relevant Treehouse videos, Practice Sessions, Project Warm Ups, and other resources.
Project Walkthrough - An optional step by step description of how to accomplish each phase of the project.
Project Warm Ups - Code exercises that will help prepare you for writing the code for this project.
Practice Sessions - Mini-workshops with guided practice opportunities for techniques relevant to the project.
Google is a developer’s best friend. Even the pros use it every day to check on any number of things. If you get stuck, try using your Google skills to find the information you need. If you aren't finding the information you need, try rephrasing your search.
Your friendly Slack team is a helpful, friendly community of student developers of all levels working together to support one another on this journey. This is a great place to find guidance, advice, and encouragement. The “Get Help” button just below the “Project Resources” section will lead directly to your Slack team.
Pro Tip: A good “Help!” post in Slack begins with a friendly greeting, details any important info related to the problem you’re having, what you’ve tried so far to fix it, and most importantly, a link to your GitHub repository.
Getting Started with the Project Files
If you haven’t already, download the project's starter files, unzip them, add them to your project folder, and push them to your GitHub repo.
Open the project in your text editor, open the script.js file, load the index.html file in Chrome, and open the Chrome DevTools Console.
If you have trouble with any of the above steps, be sure to reach out to your Slack team.
Display a “page”
Create a function that will show a “page” of nine students.
This function should have two parameters:
A list parameter to represent student data that will be passed as an argument when the function is called.
A page parameter to represent the page number that will be passed as an argument when the function is called.
Inside the function:

Create two variables to store the start index and the end index of the list items to be displayed on the given page. To make this function dynamic, use the page parameter and some basic math to calculate the value of these variables like so:
Start Index = (page parameter * items per page) - items per page
End Index = page parameter * items per page
Select the UL element with a class of student-list and assign its value to a variable.
Use the innerHTML property set the HTML content of the student-list variable you just created to an empty string. This will remove any students that might have previously been displayed.
Loop over the list parameter.
Inside the loop:

Write a conditional statement that checks if the current index (i) is greater than or equal to the start index variable and less than the end index variable.
Inside that conditional:

Create the DOM elements needed to display the information for each matching student as you iterate over the list parameter. Here is an example of what the the final version of these elements should look like:
  <li class="student-item cf">
    <div class="student-details">
      <img class="avatar" src="https://randomuser.me/api/portraits/women/25.jpg" alt="Profile Picture">
      <h3>Ethel Dean</h3>
      <span class="email">ethel.dean@example.com</span>
    </div>
    <div class="joined-details">
      <span class="date">Joined 12-15-2005</span>
    </div>
  </li>
Pro Tip: Because you will need to create multiple elements to display the information for each student, you might consider using a template literal for this.
Insert the elements you have created to the student-list variable you created earlier. The insertAdjacentHTML method and beforeend option works well for this.
Pro Tip: If you call this function in the early stages of building the application, you’ll be able to use console.log statements and the Chrome DevTools Console to test and check that variables, values and indexes are working the way you expect. Don't forget to use the data variable and page number as arguments when you call the function!
Project Warm Ups: Creating and using functions, and selecting and manipulating sections of a list can feel confusing at first. For some helpful practice, check out the List Section Selection and What's the Deal with Functions project warm-ups.
Add Pagination Buttons
Create a function that creates and appends functioning pagination buttons.
This function should accept a single list parameter to represent student data that will be passed as an argument when the function is called.
Inside the function:

Create a variable to store the value of the number of pagination buttons needed. You can calculate this using the length of the list parameter. Remember, you will want to display nine students per page.
Select the UL element with a class of link-list and assign its value to a variable.
Use the innerHTML property set the HTML content of the link-list variable you just created to an empty string. This will remove any pagination buttons that might have previously been displayed.
Loop over the variable for the number of pages needed that you created earlier.
Inside the loop:

Create the DOM elements needed to display the pagination button as you iterate over the number of pages. Here is an example of what the the final version of these elements should look like:
 <li>
   <button type="button">1</button>
 </li>
Insert the elements you have created to the link-list variable you created earlier. The insertAdjacentHTML method and beforeend option works well for this.
Select the first pagination button and give it a class name of active.

Create an event listener to listen for clicks on the link-list variable that you created earlier.

Inside this event listener:

The click event should only fire when the buttons are clicked. Click event should not fire if user clicks between or around buttons. So if the click target is a pagination button:
Remove the active class from any other pagination button.
Add the active class to the pagination button that was just clicked.
Call the showPage function passing the list parameter and the page number to display as arguments.
Pro Tip: The text content of the clicked pagination button will contain the page number you want to display.
Pro Tip: If you call this function in the early stages of building the application, you’ll be able to use console.log statements and the Chrome DevTools Console to test and check that variables, event listener, and other functionality is working the way you expect. Don't forget to use the data variable as an argument when you call the function!
Project Warm Ups: DOM manipulation and creating pagination buttons can be tricky at first. For some helpful practice, check out the Fun DOM Manipulation and Where's the Action project warm-ups.

Call Functions
Call the first function you created to display a “page”, passing in the data variable and 1 as arguments.
Call the second function you created to add pagination buttons, passing the data variable as an argument.
Note: You may have already called these functions in your app if you were testing things as you went along.
Finishing the Project
The final stage of the project is perhaps the most important. This is where your developer skills really shine as you carefully double-check that you've accomplished all requirements and that your project is ready for submission.

Code Comments - It’s a best practice for development code to be well commented. Replace provided comments with your own to briefly describe your code and what it does.
Code Readability - Readability is second only to functionality. Double-check your code to ensure the spacing and indentation is consistent and in keeping with best practices.
Quality Assurance Testing - This is a key step in the development process.
Open and run your app.
Open the Chrome DevTools Console.
Pretend to be a user and test all aspects of functionality and every possible state of the app, while monitoring the console for bugs and resolving any that arise.
Cross Browser Consistency - To pass, your project only needs to work in Chrome but it’s common for developers to test their projects in multiple browsers to know how they will perform out in the wild.
Before Submitting the Project
Before you submit your project, check off each item in the project submissions checklist below.

 I have read all of the project instructions, including the “How you’ll be graded” section for this project.

 I understand what is needed to receive a Meets or Exceeds Expectations grade and asked for clarification about grading requirements on Slack if necessary.

 My GitHub repo for this project contains only this project, only files needed to make this project run, and a README.md file providing details about my project.

 I wrote all of my own code for this project. Any code included in my project that I did not write myself is appropriately attributed to its source.

 I have completed all of the project requirements and believe the project is ready to receive a Meets or Exceeds Expectations grade.

 I have received a preliminary review of my project in Slack to catch anything I might have missed.

 I understand that in order to receive an Exceeds Expectations grade, I must complete all extra credit items.

 I understand that what I submit is what will get reviewed and that when I submit my project, any changes I make after the submission won't be seen by my reviewer.

Extra Credit
To get an "exceeds" rating, complete all of the steps below:

 4 steps
Add a Search Component
Dynamically create and add a search bar. Avoid making any changes in the index.html file and instead use your JavaScript skills for this. Below is an example of the format of the search bar elements. Search bar can't be unstyled. If you follow the example below, the provided CSS will style the search bar for you.
<label for="search" class="student-search">
  <span>Search by name</span>
  <input id="search" placeholder="Search by name...">
  <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
</label>
Add Functionality to the Search Component
When the "Search" is performed, the student data is filtered so that only students whose name includes the search value are shown. The search should be case insensitive and work for partial matches. For example, if the value B or b is typed into the search field, students with “Bill” in the name would be shown. Likewise, if LL were typed into the search field, students with the first name "Bill" would appear, as well as students with a last name "Williams".
Pro Tip: To improve the functionality and improve the user experience, consider adding a keyup event listener to the search input so that the list filters in real-time as the user types. This should be in addition to making the search button clickable since pasting text into the search bar might not trigger the keyup event.
Pro Tip: Remember you have already created a function to show nine students per page in Step 3. All you really need to do here is create a new student list based on the search matches and then use that new list as an argument when calling the already existing function to display the students.
Project Warm Up: Configuring a search feature might seem complicated at first but it's can actually be accomplished with just a few steps. For some helpful practice, check out the Simple Search project warm-up.
Add Pagination for Search Results
The pagination buttons should change based on the number of matches to the search. For example: if nine or fewer matches are found, there should be 0 or 1 pagination buttons. If 22 matches are found, there should be 3 pagination buttons.
Clicking on a pagination button should display the corresponding matching students for that page.
Pro Tip: Remember you already created a function to create pagination buttons in Step 4. Use this existing pagination function along with the matching student list you created in the previous step as an argument to create pagination for your search results.
Handle No Search Matches
If no matches are found for a search, display a “No results found” type message on the page.
Note: Don't use the built in alert() method for this. The "No results found" message should be printed to the page.
NOTE: Getting an "Exceed Expectations" grade.

See the rubric in the "How You'll Be Graded" tab above for details on what you need to receive an "Exceed Expectations" grade.
Passing grades are final. If you try for the "Exceeds Expectations" grade, but miss an item and receive a “Meets Expectations” grade, you won’t get a second chance. Exceptions can be made for items that have been misgraded in review.
Always mention in the comments of your submission or any resubmission, what grade you are going for. Some students want their project to be rejected if they do not meet all Exceeds Expectations Requirements, others will try for all the "exceeds" requirement but do not mind if they pass with a Meets Expectations grade. Leaving a comment in your submission will help the reviewer understand which grade you are specifically going for
