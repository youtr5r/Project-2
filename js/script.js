/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add two global variables
   First variable has a value of all items by class name
   Second variable holds a value of 10
***/
//const studentList = document.querySelectorAll('div li');
const studentList = document.getElementsByClassName('student-item cf');

//const studentList = document.querySelector('.student-list');
console.log(studentList);
const numberItems = 10;

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
function showPage(studentList, page){
   let startIndex = (page * numberItems) - numberItems;
   let endIndex = page * numberItems;

   for(let i = 0; i < studentList.length; i++ ){
      if (i => startIndex && i < endIndex)  {
         studentList[i].style.display ='none';  
      }  else {
         studentList[i].style.display = 'block';
      }
   }
}


return(showPage);





/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/





// Remember to delete the comments that came with this file, and replace them with your own code comments.