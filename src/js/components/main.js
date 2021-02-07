import Splide from '@splidejs/splide';
import { Toast } from "toaster-js";
import "toaster-js/default.scss";
import refs from '../helpers/refs';

new Splide( '#splide', {
    type: 'loop',
    perMove: 1,
    autoplay: true,
    rewind: true,
    pauseOnHover: true,
    pauseOnFocus: true,
    easing: 'cubic-bezier(.5,0,.5,1)',
    pagination: false,
    breakpoints: {
        '1200': {
            destroy: true,
        },
        '768': {
            perPage: 2,
            gap    : '1em',
        },
        '480': {
            perPage: 1,
            gap    : '1em',
        },
    }
} ).mount();

refs.mainCallbackBtnMobile.addEventListener('click', onOpenModal);
refs.mainCallbackBtnDesktop.addEventListener('click', onOpenModal);
refs.modalCallback.addEventListener('click', handleClickModal);

const user = { name: '', phone: '' };

function onOpenModal(evt) {
    evt.preventDefault();

    window.addEventListener('keydown', onPressEsc)

    if(refs.modalCallback.classList.contains('none')) {
        refs.modalCallback.classList.remove('none');
        refs.modalCallback.classList.add('main-overlay');
    }
};

function handleClickModal(evt) {
    evt.preventDefault();

    refs.inputCallbackName.addEventListener('input', onInput);
    refs.inputCallbackPhone.addEventListener('input', onInput);
    refs.inputCallbackMsg.addEventListener('input', onInput);

    refs.inputCallbackName.addEventListener('blur', onBlur);
    refs.inputCallbackPhone.addEventListener('blur', onBlur);
    refs.inputCallbackMsg.addEventListener('blur', onBlur);

    if(evt.target.classList.value === 'main-overlay' || evt.target.classList.value === 'main-overlay__modal-closeBtn-btn') {
        closeModal();
        return;
    }
    if (evt.target.classList.value === 'main-overlay__modal-submit') {
        user.dateUa = new Date().toLocaleString('uk-UA');
        console.log(user);
        new Toast("В найближчий час ми Вам передзвонимо.", Toast.TYPE_DONE, Toast.TIME_NORMAL);
        closeModal();
        return;
    }
};

function closeModal() {
    refs.modalCallback.classList.remove('main-overlay');
    refs.modalCallback.classList.add('none');
    window.removeEventListener('keydown', onPressEsc);
    refs.callbackSubmitBtn.setAttribute('disabled', 'disabled');

    user.name = '';
    user.phone = '';
    refs.inputCallbackName.value = '';
    refs.inputCallbackPhone.value = '';
    refs.inputCallbackMsg.value = '';

    refs.inputCallbackName.removeEventListener('input', onInput);
    refs.inputCallbackPhone.removeEventListener('input', onInput);
    refs.inputCallbackMsg.removeEventListener('input', onInput);
};

function onPressEsc(evt) {
    if(evt.code === 'Escape') {
        closeModal();
        return;
    };
    if(evt.code === 'Enter') {
        user.dateUa = new Date().toLocaleString('uk-UA');
        console.log(user);
        closeModal();
        new Toast("В найближчий час ми Вам передзвонимо.", Toast.TYPE_DONE, Toast.TIME_NORMAL);
        return;
    };
};

function onInput(evt) {
    evt.preventDefault();

    if(evt.target.id === 'callbackName') {
        user.name = evt.target.value;
    }
    if(evt.target.id === 'callbackPhone') {
        if(!+evt.target.value) {
            new Toast("Недопустимі символи для номеру телефона", Toast.TYPE_WARNING, Toast.TIME_NORMAL);
        }
        user.phone = evt.target.value;
    }
    if(evt.target.id === 'callbackMsg') {
        user.message = evt.target.value;
    }
    if(user.name.length > 2 && user.phone.length === 10) {
        refs.callbackSubmitBtn.removeAttribute('disabled');
    }
    if(user.name.length < 3 || user.phone.length !== 10 || !+user.phone) {
        refs.callbackSubmitBtn.setAttribute('disabled', 'disabled');
    }
};

function onBlur(evt) {
    evt.preventDefault();

    if(evt.target.id === 'callbackName' && evt.target.value.length < 3) {
        new Toast("Мінімальна довжина Імені 3 символа.", Toast.TYPE_WARNING, Toast.TIME_NORMAL);
    }
    if(evt.target.id === 'callbackPhone' && evt.target.value.length !== 10) {
        new Toast("Введіть номер в форматі 0123456789", Toast.TYPE_WARNING, Toast.TIME_NORMAL);
    }
}
