/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

//const studentList = document.querySelectorAll('div li');
//Create Global Variable with a value of student list
const studentList = document.getElementsByClassName('student-item');
const itemsPerPage = 10;
//console.log(studentList);

   function getNumberOfPages() {
      return Math.ceil(studentList.length / itemsPerPage);
   }
/*** 
   Create showPage function below
      create two vaiables for start and end index
      this functions only allows 10 items to show per page
         - insert a for loop to only display the pages you want created by the previous 2 variables
         - if i is greater than or equal to [0]1 and i is less than 10 then display student list 
***/


function showPage(studentList, page) {
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
   Create the append page function with a parameter of total items
      create element starting with parent and append child
***/

function appendPageLinks() {
   
   //create div element dynamically
   let page = document.querySelector('.page');
   let div = document.createElement('div');
   let ul = document.createElement('ul');
   div.className =('pagination');
   div.setAttribute('class', 'pagination');
   page.appendChild(div);
   div.appendChild(ul);
   

for(let i = 1; i <= getNumberOfPages(studentList); i++) {
    let li = document.createElement('li');
    let a = document.createElement('a');
    a.setAttribute('href', '#');
    ul.appendChild(li);
    li.appendChild(a);
    a.textContent = i;
    a.addEventListener('click', (event) => {
         let a = document.querySelectorAll('.pagination li a');
         for(let j = 0; j < a.length; j++ ){
            a[j].className = '';
         }
            event.target.className = 'active';
            showPage(studentList, event.target.textContent);
         
    });
  }
}

//showPage(studentList, textContent);
showPage(studentList, 1);
appendPageLinks();
// Remember to delete the comments that came with this file, and replace them with your own code comments.

//let link = document.querySelectAll('.pagination a')