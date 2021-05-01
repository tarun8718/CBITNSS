$(document).ready(function(){

    $("#signup").submit(function(event) {
        event.preventDefault();

        $.ajax({
            type: 'POST',
            url: '/',
            data: $('#signup').serialize(),
            dataType: "json",
            success: function(response){
                //alert("a");
                //console.log(response.Success);
                $('#signup')[0].reset();

                setTimeout(function(){},3000);

                if (response.Success=="You are regestered,You can login now.") {
                    document.getElementById("aa").click();
                };
            },
                 error: function() {
                 }
             })
    });
});