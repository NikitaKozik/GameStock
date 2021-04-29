function toggleMobNav() {
    const toggleMobileNavigation = document.querySelectorAll('.toggle-mobile-nav'),
          mobileNavigation = document.querySelector('.mobile-navigation');

          for (let i = 0; i < toggleMobileNavigation.length; i++) {
            toggleMobileNavigation[i].addEventListener('click', (e) => {
                mobileNavigation.classList.toggle('hide');
             });
            }

    window.addEventListener('click', (e) => {

        if(!mobileNavigation.contains(e.target) && !toggleMobileNavigation[0].contains(e.target)) {
            mobileNavigation.classList.add('hide');
        }
    });
}

toggleMobNav();