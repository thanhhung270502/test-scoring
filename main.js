const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const form_start = $('.start');
const form = $('.form-toggle');

form_start.onclick = () => {
    form.classList.toggle('hide');
}