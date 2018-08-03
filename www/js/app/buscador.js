function buscar() {
    event.preventDefault();
    var references = $('#reference').val();
    var city = $('#city').val();
    city = city.split(",");


    var url = 'lista-clientes.html?references='+references+'&city='+city[0];

    $(location).attr('href',url);

    // clients.forEach(function (client) {
    //   // dividimos el string para sacar la ciudad

    //   // si solo se envio la ciudad
    //   if (references == '') {
    //     //buscamos coincidencia
    //     if (client.city == add[0]){

    //       data[i] = client;
    //       i++;
    //     }

    //   }else{// si se enviaron todos los parametros
    //     //buscamos
    //     if (client.city == add[0] && client.category == references) {
    //       data[i] = client;
    //       i++;
    //     }
    //   }
    // });



}

function mostrar(id) {
  var url = 'detalles-cliente.html?id='+id;

  $(location).attr('href',url);
}

function viewCat(id) {
  var url = 'lista-categoria.html?category='+id;

  $(location).attr('href',url);
}

function ver(cliente) {
  var c;
  clients.forEach(function (client) {
    if (client.name == cliente) {
      c = client;
    }
  });

  $('#buscador').load('./pages/detalles-cliente.html', function(){
    var direccion = '<p>'+c.address+', '+c.city+', '+c.country+'</p>';
    var image = '<img src="'+c.avatar+'" width="320">';
    // $('#tit-cliente').html(c.name);
    // $('#address-cliente').html(direccion);
    $('#image').html(image);
  });

  // $('#example').html(ejemplo);
}

// mostrar anuncio
function mostrarAd (id) {
  var url = 'ad.html?id='+id;

  $(location).attr('href',url);
}