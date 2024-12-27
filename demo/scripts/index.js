Document.prototype.ready = function(fn) {
    var readyFunc = function(resolve, reject) {
        // The ready event handler and self cleanup method
        function completed() {
            document.removeEventListener("DOMContentLoaded", completed);
            window.removeEventListener("load", completed);
            resolve();
        }

        // Catch cases where $(document).ready() is called
        // after the browser event has already occurred.
        if (document.readyState !== "loading") {
            // Handle it asynchronously to allow scripts the opportunity to delay ready
            window.setTimeout(completed);

        } else {
            // Use the handy event callback
            document.addEventListener("DOMContentLoaded", completed);
            // A fallback to window.onload, that will always work
            window.addEventListener("load", completed);
        }
    }
    var promise = new Promise(readyFunc);
    promise
        .then(fn)
        .catch(function(error) {
            throw error;
        });
    return promise;
};
var sitePage;
document.ready(function() {

    sitePage = new SitePage("sitePage", {
        brandName: "Bougie by Lili",
        backgroundColor: "",
        verticalAlignMiddle: true, //true||false
        autoScrolling:true,
        sections: [{
                pageId:'home',
                anchor: "Home",
                //anchorClass: [],
                templateId: "home-template",
                backgroundColor: "#ff5f45",
                verticalAlignMiddle: true, //true||false
                sectionClass: 'text-right',
                background-image: url("./candlebg.jpg"),
                height: 100%,
                background-position: center,
                background-repeat: no-repeat,
                background-size: cover
            },
            {
                pageId:'skills',
                anchor: "Skills",
                templateUrl: "./views/skills.html",
                backgroundColor: "#fec401"
            },
            {
                pageId:'projects',
                anchor: "Projects",
                template: "<h1>Projects</h1>",
                backgroundColor: "#fc6c7c"
            },
            {
                pageId:'open_source',
                anchor: "Open Source",
                templateUrl: "./views/opensource.html",
                backgroundColor: "#ff5f45"
            },
            {
                pageId:'achivements',
                anchor: "Achievements",
                templateUrl: "./views/achievements.html",
                backgroundColor: "#fec401"
            },
            {
                pageId:'contactus',
                anchor: "Contact Us",
                template: "<h2>Contact Us</h2>",
                backgroundColor: "#fec401"
            }
        ],
        
        anchors: false, //default true
        hamburger: true,
        pageIndicator:true,
        easing: "ease",
        sameurl: false,
        //sameurl: true|false,
        transitionSpeed: 1000,
        keyboardNavigation: true,

        pageTransitionStart: (prevPage, currentPage) => {
            console.log(`prevPage: ${prevPage ? prevPage.id : ""} currentPage :${currentPage.id}`);
        },
        pageTransitionEnd: (currentPage) => {
            console.log(`currentPage :${currentPage.id}`);

        }
    });

});
