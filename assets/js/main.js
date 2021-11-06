

$(function () {
    $("#success").click(function () {
        alert("El correo fue enviado correctamente");
        });
    });


$(".textcolor1").dblclick(function () {
    $(".textcolor1").css({
    "color":"#B5838D"
    })
});


$(function () {
$(".diseñodevitrinas").click(function (){
    $(".titulovitrina").toggle("700");
    });
});

$(function () {
    $(".diseñoeditorial").click(function (){
        $(".tituloeditorial").toggle("700");
        });
    });

$(function () {
        $(".edicionvideo").click(function (){
            $(".titulovideo").toggle("700");
            });
    });

$(function () {
    $(".diseñobrand").click(function (){
        $(".titulobrand").toggle("700");
        });
    });
    
