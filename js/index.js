document.getElementsByClassName('agregarBtn')[0].addEventListener("click", (event) => {
  event.preventDefault();
  var nombre = document.getElementsByClassName('textLista')[0].value;
  document.getElementsByClassName('textLista')[0].value = "";

  var contenedor = document.querySelector('.results > ul');

  var nuevaCaja = document.createElement('li');
  var html = '<div class="box"> ' + nombre + '<br><button class="btnCheck"> check </button> <button class="btnDelete"> delete </button> </div>';


  nuevaCaja.innerHTML = html;
  contenedor.appendChild(nuevaCaja);

  var listaBorrar = document.querySelectorAll('.results > ul > li ');

  listaBorrar.forEach((item) => {
    var btnCheck = item.querySelector('.box > .btnCheck');
    btnCheck.addEventListener('click',() => {
      event.preventDefault();
      // item.style.textDecoration = 'line-through';
      if(item.matches('.checked')){
        item.classList.remove("checked");
      } else {
        item.classList.add("checked");
      }
    });

    var btnDelete = item.querySelector('.box > .btnDelete');
    btnDelete.addEventListener('click',() => {
      event.preventDefault();
      item.parentNode.removeChild(item);
    });
  });

});
