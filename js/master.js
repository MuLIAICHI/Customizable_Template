// Check if there's Local Storage Color Options

let mainColors = localStorage.getItem("color_option");

if (mainColors !== null) {

    // console.log('local Storage Is Not empty You Can Set It on Root Element');

    // console.log(mainColors);

    document.documentElement.style.setProperty('--main-color', mainColors);

    // Remove active class from all Colors List Items 

    document.querySelectorAll(".colors-list li").forEach(element => {

        element.classList.remove('active');

        // Add Active class On Element with Data Color === Local Storage Item

        if (element.dataset.color === mainColors) {

            // Add Active Class

            element.classList.add("active");
        }

    });


}

// Random  Backround options 
let backgroundOption;

// Variable to control the background Interval

let backgroundInterval;

// Toggle Spin Class On Icon

document.querySelector(".toggle-settings .fa-gear").onclick = function () {


    // Toggle Class Fa-spin For Rotation on self 
    this.classList.toggle("fa-spin");

    // Toggle Class open  on main setting box
    
    document.querySelector(".settings-box").classList.toggle("open");

}

// Switch Colors 

const ColorsLi = document.querySelectorAll(".colors-list li");

// Loop On All List Items

ColorsLi.forEach(li => {

    // Click on every list item

    li.addEventListener("click", (e) => {

        // Set color on root

        document.documentElement.style.setProperty('--main-color', e.target.dataset.color);

        // Set Color On Local Storage 

        localStorage.setItem("color_option", e.target.dataset.color);

        // // Remove active class from all childrens 

        // e.target.parentElement.querySelectorAll(".active").forEach(element => {

        //     element.classList.remove('active');

        // })

        // // Add Active Class On self

        // e.target.classList.add("active");

        handlActive(e);

    })

})


// Switch random backgrounds options

const RandomBackEl = document.querySelectorAll(".random-background span");

// Loop On All span

RandomBackEl.forEach(span => {

    // Click on every span

    span.addEventListener("click", (e) => {

        // // Remove active class from all spans 

        // e.target.parentElement.querySelectorAll(".active").forEach(element => {

        //     element.classList.remove('active');

        // })

        // // Add Active Class On self

        // e.target.classList.add("active");

        handlActive(e);

        if (e.target.dataset.background === 'yes') {

            backgroundOption = true;

            randomizeImgs();

        } else {

            backgroundOption = false;

            clearInterval(backgroundInterval);


        }

    })

})



// Select Landing page :
let page = document.querySelector(".landing-page");

// Get Array Of Imgs
let imgsArray = ["../images/1.jpg","../images/2.jpg", "../images/3.jpg", "../images/4.jpg", "../images/5.jpg"];

// Function To Ranndomize Imgs

function randomizeImgs() {

    if (backgroundOption === true) {

    backgroundInterval = setInterval(() => {
    
    // Get Random Number 

    let randomNumber = Math.floor(Math.random() * imgsArray.length);

    // Change Background Image Url 

    page.style.backgroundImage = 'url("images/' + imgsArray[randomNumber] + '")';

    }, 1000);

    }

}

// select skills selectors :

let ourSkills = document.querySelector(".skills");

window.onscroll = function() {

    // Skills Offset Top
    let skillsOffsetTop = ourSkills.offsetTop;

    // console.log(skillsOffsetTop);

    // skills outer height :

    let skillsOuterHight = ourSkills.offsetHeight;

    // window height 

    let windowHeight = this.innerHeight;

    // Window scroll top :

    let windowScrollTop = this.scrollY;

    if (windowScrollTop > (skillsOffsetTop + skillsOuterHight - windowHeight)) {

        let allSkills = document.querySelectorAll(".skill-box .skill-progress span");

        allSkills.forEach((skill) => {

            skill.style.width = skill.dataset.progress;

        })

    }

};

// Create Pop up with Images :

let ourGallery = document.querySelectorAll(".gallery img");

ourGallery.forEach(img => {

    img.addEventListener('click', (e) => {

        // Create Overly Element 

        let overly = document.createElement("div");

        // Add class To Overly 

        overly.className = 'popup-overlay';

        // Appand overlay to body :

        document.body.appendChild(overly);

        // Create The PopUp

        let popupBox = document.createElement("div");

        // Add Class To The Popup Box

        popupBox.className = 'popup-box';

        // if (img.alt !== null) {
            
        //     // Create Heading 
        //     let imgHeading = document.createElement("h3");

        //     // Create text For Heading 

        //     let imgText = document.createTextNode(img.alt);

        //     // Append The Text To The Heading
        //     imgHeading.appendChild(imgText);

        //     // Append The Heading To The Popup Box 
        //     popupBox.appendChil(imgHeading);
        // }

        // Create The Image 

        let popupImage = document.createElement("img");

        // Set Image Source 

        popupImage.src = img.src;

        // Add image to popup box :

        popupBox.appendChild(popupImage);

        // Append The Popup Box To Body 

        document.body.appendChild(popupBox);

        // Create the close span 

        let closeButton = document.createElement("span");

        // Create The close Button Text 
        let closeButtonText = document.createTextNode("X");

        // Append Text To The Close Button 
        closeButton.appendChild(closeButtonText);

        // Add class to the close button
        closeButton.className = 'close-button';

        // Add the close button ot ht eclose button 
        popupBox.appendChild(closeButton);

    });

});

// Close popup

document.addEventListener("click", (e) => {
    if (e.target.className == 'close-button') {

        // Remove The Current PopUp

        e.target.parentNode.remove();

        // Rmeove Overly 

        document.querySelector('.popup-overlay').remove();
    }
})

// Select all bullets :

const allBullets = document.querySelectorAll(".nav-bullets .bullet");

// allBullets.forEach(bullet => {

//     bullet.addEventListener("click", e => {

//         document.querySelector(e.target.dataset.section).scrollIntoView({

//             behavior: 'smooth'

//         })

//     })

// });

// Select all bullets :

const allLinks = document.querySelectorAll(".links a");

// allLinks.forEach(link => {

//     link.addEventListener("click", e => {

//         e.preventDefault();

//         document.querySelector(e.target.dataset.section).scrollIntoView({

//             behavior: 'smooth'

//         })

//     })

// });

function scrollToSomewhere(elements) {

    elements.forEach(ele => {

    ele.addEventListener("click", e => {

        e.preventDefault();

        document.querySelector(e.target.dataset.section).scrollIntoView({

            behavior: 'smooth'

        })

    })

});

}

scrollToSomewhere(allBullets);
scrollToSomewhere(allLinks);

// Handle Active Function 

function handlActive (ev) {

        // Remove active class from all spans 

        ev.target.parentElement.querySelectorAll(".active").forEach(element => {

            element.classList.remove('active');

        })

        // Add Active Class On self

        ev.target.classList.add("active");

}

// show or hide bullets

let bulletSpan = document.querySelectorAll(".bullets-option span");
let bulletContainer = document.querySelector(".nav-bullets");
let bulletLocalItem = localStorage.getItem("bullets_option")

if (bulletLocalItem !== null) {

    bulletSpan.forEach(span => {

        span.classList.remove("active");

    });

    if (bulletLocalItem === 'block') {

        bulletContainer.style.display = 'block';

        document.querySelector(".bullets-option .yes").classList.add("active");

    } else {

        bulletContainer.style.display = 'none';

        document.querySelector(".bullets-option .no").classList.add("active");

    }

}

bulletSpan.forEach(span => {

    span.addEventListener("click", (e) => {

        if (span.dataset.display === 'show') {

            bulletContainer.style.display = 'block';

            localStorage.setItem("bullets_option", 'block');

        } else {

            bulletContainer.style.display = 'none';

            localStorage.setItem("bullets_option", 'none');

        }

        handlActive(e);

    });

})

// Reset Button

document.querySelector(".reset-options").onclick = function () {
    // First method 
    localStorage.clear();


    // Second method
    localStorage.removeItem("bullets_option");
    localStorage.removeItem("color_option");
    localStorage.removeItem("background_option");


    // Reload window
    window.location.reload();

}

// Toggle menu
let toggleBtn = document.querySelector(".toggle-menu");
let tLinks = document.querySelector(".links");

toggleBtn.onclick = function (e) {

    // Stop propagation

    e.stopPropagation();

    // Togle class "menu-active"
    this.classList.toggle("menu-active");

    // toggle class "open" On Links
    tLinks.classList.toggle("open");
};

// Click anywhere to close the toggle menu

document.addEventListener("click", (e) => {

    if (e.target !== toggleBtn && e.target !== tLinks) {

        // Check if menu is open 

        if (tLinks.classList.contains("open")) {

                // Togle class "menu-active"

                toggleBtn.classList.toggle("menu-active");

                // toggle class "open" On Links

                tLinks.classList.toggle("open");

        }

    }

})

// Stop propagation On The menu

tLinks.onclick = function (e) {

    e.stopPropagation();

}