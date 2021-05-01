$(document).ready(function(){

    $("#create").submit(function(event) {
        event.preventDefault();

        $.ajax({
            type: 'POST',
            url: '/create',
            data: $('#create').serialize(),
            dataType: "json",
            success: function(response){
                //alert("a");
                //console.log(response.Success);
                $('#create')[0].reset();

                setTimeout(function(){},3000);

                if (response.Success=="Success") {
                    window.location.reload();
                    document.getElementById("aa").click();
                };
            },
                 error: function() {
                 }
             })
    });
});