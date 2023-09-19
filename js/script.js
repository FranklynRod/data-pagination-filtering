/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/


// global scoped to allow it to be accessed in multiple functions
const studentsPerPage = 9;

const showPage = (list, page) => {
  startIndex = (page * studentsPerPage)- studentsPerPage;
  endIndex = (page * studentsPerPage) -1;

  const studentList = document.querySelector('.student-list');
  studentList.innerHTML = "";
   //loop through array of student objects to display nine on each page
  for (let i = 0; i < list.length; i++) {
      if (i >= startIndex && i <= endIndex){
      const html = ` <li class="student-item cf">
          <div class="student-details">
            <img class="avatar" src="${list[i].picture.large}" alt="Photo of ${list[i].name.first} ${list[i].name.last}">
            <h3>${list[i].name.first} ${list[i].name.last}</h3>
            <span class="email">${list[i].email}</span>
          </div>
          <div class="joined-details">
            <span class="date">${list[i].registered.date}</span>
          </div>
        </li>`;
        studentList.insertAdjacentHTML("beforeend", html);
      }
  }
};




const addPagination = (list) => {
   const pageNum = Math.ceil(list.length / studentsPerPage);
   const linkList = document.querySelector('.link-list');
   linkList.innerHTML = '';
   //create buttons and activated button of displayed page
   for (let i = 1; i <= pageNum ; i++){
      const html =  
      `<li><button type="button">${i}</button>
    </li>`
    linkList.insertAdjacentHTML("beforeend", html);
   };
   linkList.querySelector("button").classList.add("active");
   //Allows buttons to interactive
   linkList.addEventListener("click",(e) => {
      const activeButton = linkList.querySelector(".active");
      const buttonClicked = e.target.closest("button");
         if (buttonClicked){
         activeButton.classList.remove("active")
         buttonClicked.classList.add("active");
         showPage(list, buttonClicked.textContent);
         };

   });
  
}

showPage(data, 1);
addPagination(data);
