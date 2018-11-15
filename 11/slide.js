document.querySelectorAll('.slides').forEach(function (element) {
    var slideSize = element.clientWidth,
        currentPosition = 0;

    var button_next = document.querySelector('.btn-next');

    button_next.onclick = function () {
        
        if (currentPosition != 2432) {
            currentPosition += slideSize;
        }

        element.scroll({left: currentPosition, behavior: 'smooth'});
    };

    var button_previous = document.querySelector('.btn-previous');

    button_previous.onclick = function () {
        
        if (currentPosition != 0) {
            currentPosition -= slideSize;
        }

        element.scroll({left: currentPosition, behavior: 'smooth'});
    };
});

