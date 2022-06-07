// Section Tabs
let firstTab = document.querySelector('.first-tab');
let secondTab = document.querySelector('.second-tab');
let thirdTab = document.querySelector('.thirdTab');
let viewTab = document.querySelector('.viewTab');

// Next buttons
let firstTabBtn = document.querySelector('.first-tab .next');
let secondTabBtn = document.querySelector('.second-tab .next');
let thirdTabBtn = document.querySelector('.thirdTab .next');

// Li Navigate
let  menuNavigate = document.querySelectorAll('.navMenu li');

// Next Tab
function tabsNavigate(originBtn, origin, destiny) {
    originBtn.addEventListener("click", e => {
        e.preventDefault();
        origin.classList.add('invisible');
        destiny.classList.remove('invisible');
    })
}

tabsNavigate(firstTabBtn, firstTab, secondTab);
tabsNavigate(secondTabBtn, secondTab, thirdTab);
tabsNavigate(thirdTabBtn, thirdTab, viewTab);

// Back or Next Tab

menuNavigate.forEach((item, index, list) => {

    if (index == 0 || index == 3 || index == 6) {

        // Basic Clicked

        list[index].addEventListener('click', e => {

            e.preventDefault();

            console.log(firstTab.disabled);

            firstTab.classList.remove('invisible');

            secondTab.classList.add('invisible');

            thirdTab.classList.add('invisible');

        });

    } else if (index == 1 || index == 4 || index == 7) {

        // Social Clicked

        list[index].addEventListener('click', e => {

            e.preventDefault();

            if (!firstTabBtn.disabled) {

                firstTab.classList.add('invisible');

                secondTab.classList.remove('invisible');

                thirdTab.classList.add('invisible');

            }

        });

    }
    else {

        //Certificates Clicked

        list[index].addEventListener('click', e => {

            if (!secondTabBtn.disabled) {

                e.preventDefault();

                firstTab.classList.add('invisible');

                secondTab.classList.add('invisible');

                thirdTab.classList.remove('invisible');

            }

        });

    }

});