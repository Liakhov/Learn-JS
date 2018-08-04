var tables = document.getElementById('grid');
var tbody = tables.getElementsByTagName('tbody')[0];
var arr = [];


tables.onclick = function(event){
      if(event.target.tagName != 'TH') return;

      sortColumn(event.target.cellIndex, event.target.dataset.type)
}

function sortColumn(numberCol, type){
    for(i = tbody.children.length - 1; i >= 0; i--){
      var item = tbody.removeChild(tbody.children[i]);
      arr.push(item);
    }
    var typeFunc;
    switch (type) {
      case 'number':
         typeFunc = function(a, b){
            return  a.children[numberCol].innerHTML - b.children[numberCol].innerHTML;
        }
        break;
      case 'string':
          typeFunc = function(a, b){
              return  a.children[numberCol].innerHTML > b.children[numberCol].innerHTML;
          }
        break;
    }
    arr.sort(typeFunc);

    for(j = 0; j < arr.length; j++){
        tbody.appendChild(arr[j]);
    }

}
