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
const studentsPerPage = 9;

const showPage = (list, page) => {
  startIndex = (page * studentsPerPage)- studentsPerPage;
  endIndex = (page * studentsPerPage) -1;

  const studentList = document.querySelector('.student-list');
  studentList.innerHTML = "";

  for (let i = 0; i < list.length; i++) {
      if (i >= startIndex && i <= endIndex){
      const html = ` <li class="student-item cf">
          <div class="student-details">
            <img class="avatar" src="${list[i].picture}" alt="Photo of ${list[i].name}">
            <h3>${list[i].name}</h3>
            <span class="email">${list[i].email}</span>
          </div>
          <div class="joined-details">
            <span class="date">${list[i].registered[0]}</span>
          </div>
        </li>`;
        studentList.insertAdjacentHTML("beforeend", html);
        console.log(studentList)
      }
  }
};

console.log(showPage(data, 1));

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/



// Call functions
