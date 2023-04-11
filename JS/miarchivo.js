function solicitarCotizacion() {
  let edad = prompt(
    "Por favor ingrese su edad para proseguir con el pedido de cotización online"
  );
  if (edad >= 18) {
    let seleccion = prompt(
      "Bienvenido, usted es cliente de nuestra prestación? si/no"
    );

    if (seleccion == "no") {
      while (seleccion != "x") {
        let servicio = prompt(
          "Seleccione el tipo de servicio que desea adquirir: \n basico \n plata \n oro \n platino \n"
        );

        if (
          servicio == "basico" ||
          servicio == "plata" ||
          servicio == "oro" ||
          servicio == "platino"
        ) {
          switch (servicio) {
            case "basico":
              precio = 10000;
              alert("el costo por el servicio basico: $" + precio);
              seleccion = prompt(
                "Finaliza con x, de otro modo puede seguir cotizando, gracias"
              );
              break;

            case "plata":
              precio = 30000;
              alert("el costo por el servicio plata: $" + precio);
              seleccion = prompt(
                "Finaliza con x, de otro modo puede seguir cotizando, gracias"
              );
              break;
            case "oro":
              precio = 40000;
              alert("el costo por el servicio oro: $" + precio);
              seleccion = prompt(
                "Finaliza con x, de otro modo puede seguir cotizando, gracias"
              );
              break;

            case "platino":
              precio = 60000;
              alert("el costo por el servicio platino: $" + precio);
              seleccion = prompt(
                "Finaliza con x, de otro modo puede seguir cotizando, gracias"
              );
              break;

            default:
              break;
          }
        }
      }
    }
    if (seleccion == "si") {
      alert(
        "Por favor comuniquese al 0-800-clientes para poder solucionar su inquietud, ésta plataforma es para clientes nuevos, estamos para ayudarlo"
      );
    } else {
      alert("Gracias");
    }
  } else {
    alert(
      "Solicite nuestra prestación acompañado de un mayor, gracias por elegirnos"
    );
  }
}
