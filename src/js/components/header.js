import refs from '../helpers/refs';
import debounce from 'lodash.debounce';

refs.menuButton.addEventListener('click', handleChange);
refs.navBoxREf.addEventListener('click', handleNavLink);
document.addEventListener('scroll', debounce(handleNavPosition, 500));
refs.floatingNavBtn.addEventListener('click', handleFloatingNavBtn);

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

function handleNavPosition() {
  const scrollY = window.scrollY;
  const clientHeight = window.innerHeight;
  const isClassNone = refs.floatingNav.classList.contains('none');

  if(scrollY > ((clientHeight * 2)) && isClassNone) {
    refs.floatingNav.classList.remove('none');
    refs.floatingNav.classList.add('floatingNav');
  }
  if(scrollY <= ((clientHeight * 2)) && !isClassNone) {
    refs.floatingNav.classList.remove('floatingNav');
    refs.floatingNav.classList.add('none');

    refs.floatingNavBtn.classList.remove('floatingNav-btnActive');
    refs.floatingNavLinks.classList.remove('floatingNav-navActive');
    refs.floatingNavLinks.classList.add('floatingNav-nav');
  }
};

function handleFloatingNavBtn() {
  if(refs.floatingNavBtn.classList.contains('floatingNav-btnActive')) {
    refs.floatingNavBtn.classList.remove('floatingNav-btnActive');
    refs.floatingNavLinks.classList.remove('floatingNav-navActive');
    refs.floatingNavLinks.classList.add('floatingNav-nav');
  } else {
    refs.floatingNavBtn.classList.add('floatingNav-btnActive');
    refs.floatingNavLinks.classList.remove('floatingNav-nav');
    refs.floatingNavLinks.classList.add('floatingNav-navActive');
  }
};
