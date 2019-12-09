
// маска формы ввода телефона
$(function($){
    $(".phonesel").mask("+38(999)999-99-99");
});

// плавная прокрутка
function slowScroll (id) {
    $('html, body').animate ({
        scrollTop: $(id).offset ().top 
    }, 700);
    return false;
}