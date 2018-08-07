var icon = document.getElementById("thumbs");

icon.onclick = function (event) {
    var target = event.target;
    var img = document.getElementById('largeImg');

    while(target.tagName != "A"){
        target = target.parentNode;
    }

    if(target.tagName != 'A') return;

    var href = target.getAttribute('href');
    var title = target.getAttribute('title');

    img.src = href;
    img.alt = title;

    return false;
};