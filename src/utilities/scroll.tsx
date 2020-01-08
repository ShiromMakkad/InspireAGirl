import debounce from "lodash/debounce";

let scrollTopIsShowing = false;
let active = 0;
const navItems = document.getElementsByClassName("nav-item");
//This function runs on every scroll
export const handleScroll = debounce((e) => {
    //This determines whether the scroll to top button should be visible.
    if (!scrollTopIsShowing && window.pageYOffset > 450) {
        scrollTopIsShowing = true;
        // @ts-ignore
        document.getElementById("scrollTop").style.opacity = 100;
    } else if (scrollTopIsShowing && window.pageYOffset <= 450) {
        scrollTopIsShowing = false;
        // @ts-ignore
        document.getElementById("scrollTop").style.opacity = 0;
    }

    //These checks determine which nav item to highlight
    //@ts-ignore
    if ((active !== 4 && window.pageYOffset >= document.getElementById("contactRef").offsetTop - document.getElementsByClassName("navbar")[0].offsetHeight) || (window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
        removeActive();

        navItems[4].className += " active";
        active = 4;
        //@ts-ignore
    } else if (active !== 3 && window.pageYOffset >= document.getElementById("whoWeHelpRef").offsetTop - document.getElementsByClassName("navbar")[0].offsetHeight && window.pageYOffset < document.getElementById("contactRef").offsetTop - document.getElementsByClassName("navbar")[0].offsetHeight) {
        removeActive();

        navItems[3].className += " active";
        active = 3;
        //@ts-ignore
    } else if (active !== 2 && window.pageYOffset >= document.getElementById("aboutUsRef").offsetTop - document.getElementsByClassName("navbar")[0].offsetHeight && window.pageYOffset < document.getElementById("whoWeHelpRef").offsetTop - document.getElementsByClassName("navbar")[0].offsetHeight) {
        removeActive();

        navItems[2].className += " active";
        active = 2;
        //@ts-ignore
    } else if (active !== 1 && window.pageYOffset >= document.getElementById("problemRef").offsetTop - document.getElementsByClassName("navbar")[0].offsetHeight && window.pageYOffset < document.getElementById("aboutUsRef").offsetTop - document.getElementsByClassName("navbar")[0].offsetHeight) {
        removeActive();

        navItems[1].className += " active";
        active = 1;
    }
    //@ts-ignore
    else if (active !== 0 && window.pageYOffset < document.getElementById("problemRef").offsetTop - document.getElementsByClassName("navbar")[0].offsetHeight) {
        removeActive();

        navItems[0].className += " active";
        active = 0;
    }
}, 10);

const removeActive = () => {
    for (let i = 0; i < navItems.length; i++) {
        //Remove active from any nav-items. See https://stackoverflow.com/questions/195951/how-to-change-an-elements-class-with-javascript
        // @ts-ignore
        navItems[i].className = navItems[i].className.replace(/(?:^|\s)active(?!\S)/g, '');
    }
};
