
$(document).ready(function(){
let cont = 0;
let arr_preguntas = [];
let arr_respuestas = [];
    $("#grd_pregunta").on('click',function(){
        let v_preg = $("#preguntas").val();
        if(v_preg == "" || v_preg == " "){
            $("#errores").text("No has ingresado una pregunta");
            setTimeout(function() { 
            $("#errores").text(" ");
            }, 3000);
            return;
        }
        $("#cdr_3").html(
            `<h5>Su pregunta es: ${v_preg}</h5><ul id="respuestas_ul" key="${v_preg}"></ul>`
        );
        $('#preguntas[type="text"]').val("");
    });

    function recorrer_preguntas()
    {
        $("#seccion").html("");
        $.each(arr_preguntas, function(index, value) {
            $("#seccion").append(
                `<div class="cuadro"><h5 id="titulo1">${value.nombre}</h5><div id="respuestas_div${value.id}"></div></div>`
            );
            $.each(value.respuestas, function(index, val){ 
                $("#respuestas_div" + value.id).append(
                `<div class="form-check">
                    <input class="form-check-input" type="radio" name="res_1" value="">
                    <label class="form-check-label" for="exampleRadios1">
                        <h6>${val}</h6>
                    </label>
                </div>`
                );
            });
        });
    }

    function recorrer_respuestas()
    {
        $("#respuestas_ul").html("");
        $.each(arr_respuestas, function(index, value) {
            $("#respuestas_ul").append(
                `<li> ${value}</li>`
            );
          });
    }
            $("#grd_respuesta").on('click',function (){
                let id_ul = $("#respuestas_ul").attr("key");
                console.log(id_ul);
                let v_resp = $("#respuestas").val();
                if(v_resp == "" || v_resp == " "){
                    $("#errores").text("No has ingresado una respuesta");
                    setTimeout(function() { 
                        $("#errores").text(" ");
                    }, 3000);
                    return;
                }
                if(id_ul == undefined){
                    $("#errores").text("No has ingresado una pregunta");
                    setTimeout(function() { 
                        $("#errores").text(" ");
                    }, 3000);
                    return;
                }
                arr_respuestas.push(v_resp);
                recorrer_respuestas();
                $('#respuestas[type="text"]').val(""); 
                // console.log(arr_preguntas[posicion]);
                // arr_preguntas[posicion].respuestas.push(v_resp);
            });

            $("#add").on('click', function (){
                if(arr_respuestas.length <= 1)
                {
                    $("#errores").text("Minimo debe de ingresar dos respuestas");
                    setTimeout(function() { 
                        $("#errores").text(" ");
                    }, 3000); 
                    return;
                }
                let nom_pregunta = $("#respuestas_ul").attr("key"); 
                let pregunta = {
                    id: cont++,
                    nombre: nom_pregunta,
                    respuestas: arr_respuestas
                };
                arr_preguntas.push(pregunta);
                console.log(arr_preguntas);
                recorrer_preguntas();

                // seteo variables

                $("#cdr_3").html("");
                arr_respuestas = [];
            });
  });

 