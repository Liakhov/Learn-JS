  var body = document.body;

  body.addEventListener('mouseover', show);
  body.addEventListener('mouseout', hide);

  function show(event) {
    var target = event.target;

    var button = target.getAttribute('data-tooltip');

    if(!button) return;

    var div = document.createElement('div');
    div.classList.add('toolip');
    div.innerHTML = button;
    body.insertBefore(div, target.nextSibling);

    var coord = target.getBoundingClientRect();
    var divCoord = div.getBoundingClientRect();

    div.style.left = coord.left + 'px';

    if(coord.top < divCoord.height + 10){
       div.style.top = coord.bottom + 4 + 'px';
    }else{
        div.style.top = (coord.top - divCoord.height - 4) + 'px';
    }
  }

  function hide(event) {
    var target = event.target;
    var button = target.getAttribute('data-tooltip');

    if(!button) return;
    var toolip = document.body.querySelector('.toolip');
    body.removeChild(toolip);
  }
