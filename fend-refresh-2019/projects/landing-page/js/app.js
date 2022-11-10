/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 *
*/
const navBarList = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");


/**
 * End Global Variables
 * Start Helper Functions
 *
*/



/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav

//looping through sections
function navigation() {
  for (let i = 0; i < sections.length; + 1) {
    let section = sections[i++];
    li = document.createElement("sectionList");
    li.innerHTML = `<li><a class="menu__link" href="#${section?.id}">${section && section.dataset.nav}</a></li>`;
    navBarList.prepend(li);
  }
};

navigation();


// Add class 'active' to section when near top of viewport

// Removing active sections
let activeRemove = (section) => {
  if (section) {
    section.classList.remove('your-active-class');
    //section.style.cssText = "background-color: linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.2) 100%)";
    section.style.cssText = "background-color: rgb(136,203,171);";
  } else {
    section.classList.add('your-active-class');
    section.style.cssText = "background-color: pink;";
  };
};
// Set sections as active
let activeAdd = (visibleViewport, section) => {
  if (visibleViewport) {
    section.classList.add('your-active-class');
    section.style.cssText = "background-color: pink;";
  } else {
    section.classList.remove('your-active-class');
    section.style.cssText = "background-color: rgb(136,203,171);";
  };

};

//making the section active

const activateSection = () => {

  for (let i = 0; i < sections.length; + 1) {
    let section = sections[i++];

    visibleViewport = () => section.getBoundingClientRect().top < 285 && section.getBoundingClientRect().top >= -285;

    activeRemove(section);
    activeAdd(visibleViewport(), section);


  };

};

window.addEventListener('scroll', activateSection);

// Scroll to anchor ID using scrollTO event


function smooth() {
  const sectionScroll = document.querySelectorAll(".menu__link")
  for (let Scroller of sectionScroll) {
    Scroller.addEventListener('click', function (event) {


      event.preventDefault();
      //implementing scrollIntoView providing a smooth effect
      //when you click on each section in the nav
      const secId = (this.getAttribute('href'));
      document.querySelector(secId).scrollIntoView({
        // Scroll to section on link click
        behavior: "smooth",
        block: "end",
        inline: "nearest"
      });


    });

  };
};
smooth();




 








