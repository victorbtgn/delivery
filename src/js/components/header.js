import refs from '../helpers/refs';

refs.menuButton.addEventListener('click', handleChange);
refs.navBoxREf.addEventListener('click', handleNavLink);

function handleChange () {
    if(refs.menuButton.classList.contains('menuButtonActive')) {
        refs.menuButton.classList.remove('menuButtonActive');

        refs.navigation.classList.remove('header-nav__menuActive');
        refs.navigation.classList.add('header-nav__menu');
        
        refs.bodyRef.removeAttribute('style');
    } else {
        refs.menuButton.classList.add('menuButtonActive');

        refs.navigation.classList.remove('header-nav__menu');
        refs.navigation.classList.add('header-nav__menuActive');

        refs.bodyRef.setAttribute('style', 'overflow: hidden');
    }
};

function handleNavLink(evt) {
  
  if(evt) {
      const timerId = setTimeout(() => {
        handleChange(evt);
        clearTimeout(timerId);
      } , 50);
  }
};
