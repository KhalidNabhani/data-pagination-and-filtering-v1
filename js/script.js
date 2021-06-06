/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

const itemsPerPage = 9;
let header = document.getElementsByClassName('header')[0];
let enteredKeys;
let searchedWord = "";
let searchedList =[];
const studentList = document.getElementsByClassName('student-list')[0];
const linkList = document.getElementsByClassName('link-list')[0];



/*
********************************************************************
/*  parameters --> list : array of all student  page : number of page of nine student to display 
*********************************************************************
*/
function showPage (list, page) {
         
   // calculate the starting index and ending index of student array position
   const startIndex = (page * itemsPerPage)-itemsPerPage;   
   const endIndex = page * itemsPerPage;    
   // this function returns collections of elements pointing to first index 
   
   // clean innerHTML 
   studentList.innerHTML ="";   

   // this variable contains html elements 
   let studentItems =''; 
   if (list.length === 0){
      studentList.innerHTML="";
      studentList.insertAdjacentHTML('beforeend', '<h2>No results found </h2>');
   } else {
      for (let i = startIndex; i < endIndex; i++){
         let student = list[i];
          if (i < list.length){
            studentItems +=`<li class="student-item cf">
               <div class="student-details">
                <img class="avatar" src= ${student.picture.large} alt="Profile Picture">
                <h3>${student.name.first} ${student.name.last}</h3>
                  <span class="email">${student.email} </span>
               </div>
            <div class="joined-details">
             <span class="date">${student.registered.date}</span>
          </div>
         </li>`;
      }
    }
      studentList.insertAdjacentHTML('beforeend', studentItems);

   }
}
/*
**********************************************************************
*/



/* 
*****************************************************************
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
****************************************************************
*/
function addPagination (list){
   const numberOfPages = Math.ceil(list.length / itemsPerPage);
   

   linkList.innerHTML ='';
   let buttonItems="";
   if (numberOfPages >= 1){
      for (i=1; i <= numberOfPages; i++){ 
         buttonItems +=`<li><button type="button">${i}</button></li>`;
      }
      linkList.insertAdjacentHTML('beforeend', buttonItems);
   
      let buttonActive = document.querySelector(".link-list button");
      buttonActive.className = "active";
   }
   

   showPage(list, 1);

   linkList.addEventListener("click", (e) => {
      let clickedButton = e.target;
      if (clickedButton.tagName === "BUTTON"){
         let oldActiveButton = document.querySelector("button.active");
         
         oldActiveButton.classList.remove("active");
         
         clickedButton.className = "active";
         showPage(list,clickedButton.textContent);
      }
   });
}
/*
**********************************************************************
*/


/* 
*****************************************************************

This function will create Search Bar
****************************************************************
*/
function searchBar(){
   let searchBarHTML =`<label for="search" class="student-search">
   <span>Search by name</span>
   <input id="search" placeholder="Search by name...">
   <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
 </label>`;

 
 header.insertAdjacentHTML('beforeend', searchBarHTML);
 
}
/*
**********************************************************************
*/ 


/*
**********************************************************************

Search Function return SearchedList
 
*********************************************************************
*/
function searchFunc(searchString){
   
  //searchedWord = document.querySelector("#search").value; 
  
  searchedList=[];  
  for(let std= 0; std < data.length; std++){
   
    let fullName ="";
    fullName =data[std].name.first;
    fullName += " ";
    fullName += data[std].name.last;

    if (fullName.includes(searchString)){  
      searchedList.push(data[std]);
      
      }
   }
  return searchedList;
}
/*
**********************************************************************
*/




// Call functions
searchBar();      // insert search bar
addPagination(data); // Display all students with pagination buttons and mechanism 

header.addEventListener("keyup", (e)=> {  // listener for search bar 
  addPagination(searchFunc(e.target.value));
});
