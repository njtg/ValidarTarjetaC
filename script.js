function ValidarTarjetaCredito() {

    let valor = document.querySelector("#numero").value;
    let p_resultado = document.querySelector(".resultado");
    p_resultado.style.display = "block";
    let mensaje = "";
    let numTarjeta = Number(valor);
    
    //Creamos la Variable tarjeta
    let tarjeta = [];
    tarjeta["valida"] = false;
    tarjeta["numero"] = valor;

    //si tiene 16 digitos
    if (valor.length == 16) { 
        //si es numero(si retorna null No es numero, si es diferente de NULL entoces es numero).
        if (!isNaN(numTarjeta)) { 
            let i;
            let num = valor[0];
            let digitosIgual = true;
            for (i = 0; i < valor.length; i++) {
            //si cumple que existan al menos dos digitos diferentes.
                if (num != valor[i]) { 
                    digitosIgual = false;
                    continue;
                }
            }
            //si es el mismo digito
            if (digitosIgual == false) { 
                tarjeta["valida"] = true;
                tarjeta["numero"] = numTarjeta;

            //si tiene digitos diferentes
            } else { 
                tarjeta["error"] = "El numero de tarjeta no debe contener el mismo digito";

                mensaje = " ,  Erorr: " + tarjeta["error"];
            }
            //si no es numero
            } else { 
                tarjeta["error"] = "El numero de tarjeta contiene caracteres";

                mensaje = " ,  Erorr: " + tarjeta["error"];

        }
    //si la longitud es diferente de 16
    } else { 
        tarjeta["error"] = "Longitud erronea";

        mensaje = " ,  Erorr: " + tarjeta["error"];
    }
    //Mostramos los resultados del objeto
    mensaje = "Valida: " + tarjeta["valida"] + " ,  Numero: " + tarjeta["numero"] + mensaje;
    p_resultado.textContent = mensaje;
}