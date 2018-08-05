var contents = document.body.querySelector('#contents');

contents.onclick = function (event) {
    var target = event.target;

    while(target != this){
      if(target.tagName == 'A'){
         return mainAsk();
      }
      target = target.parentNode;
    }

    function mainAsk() {
        var href = target.getAttribute('href');

        var ask = confirm('Перейти на страницу ' + href + '?');

        if(ask != true) return false;
    }
}