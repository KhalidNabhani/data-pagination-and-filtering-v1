/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/



/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
function showPage (list, page) {
   const itemsPerPage = 8;
   const startIndex = (page * itemsPerPage)-itemsPerPage;
   const endIndex = page * itemsPerPage;

   const studentList = document.getElementsByClassName('student-list')[0];
   studentList.innerHTML ='';
   
   let studentItems ='';
   for (let i = startIndex; i <= endIndex; i++){
      let student = list[i];
      studentItems +=`<li class="student-item cf">
                                 <div class="student-details">
                                    <img class="avatar" src= ${student.picture.large} alt="Profile Picture">
                                    <h3>${student.name.first} ${student.name.last}</h3>
                                    <span class="email">${student.email} </span>
                                 </div>
                                    <div class="joined-details">
                                    <span class="date">${student.registered.date}</span>
                                 </div>
                              </li>`
      
      
      

      


   }
   studentList.insertAdjacentHTML('beforeend', studentItems);

}


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/



// Call functions
showPage(data, 3);