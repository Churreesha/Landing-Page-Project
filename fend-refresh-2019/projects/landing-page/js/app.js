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


function navigation(){
    for (let i = 0; i <= sections.length + 1;) {
        const section = sections[i++];
        const li = document.createElement("sectionList");

        li.innerHTML =`<li><a class="menu__link" href="#${section && section.id}">${section.dataset.nav}</a></li>`;

        navBarList.prepend(li);
   }
};
navigation();










// Add class 'active' to section when near top of viewport



// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active


