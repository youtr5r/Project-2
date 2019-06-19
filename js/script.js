/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

//const studentList = document.querySelectorAll('div li');
//Create Global Variable with a value of student list
const studentList = document.getElementsByClassName('student-item cf');
const itemsPerPage = 10;
console.log(studentList);
/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.
   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/
function getNumberOfPages() {
   return Math.ceil(studentList.length / itemsPerPage);
}

//this functions only allows 10 items to show.
function showPage(studentList, page){
   let startIndex = (page * itemsPerPage) - itemsPerPage;
   let endIndex = page * itemsPerPage;

   for(let i = 0; i < studentList.length; i++ ){
      if (i >= startIndex && i < endIndex)  {
         studentList[i].style.display = 'block';  
      }  else {
         studentList[i].style.display = 'none';
      }
   }
}

/*** 
call the showPage function to verify only 10 items show
showPage(studentList, 1);
***/


/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/

function appendPageLinks(studentList) {
   let div = document.getElementsByTagName('div');
   let a = document.getElementsByTagName('a');
   ul.appendChild(li);


//place loop in function
for(let i = 0; i < getNumberOfPages(); i++) {
    
  }
}
// Remember to delete the comments that came with this file, and replace them with your own code comments.