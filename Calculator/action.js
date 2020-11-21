$(document).ready(function() {
    var value = "";
    var opt = "";
    var total = "";
    var operator = "";

    $('.btn').click(function() {
        if ($(this).val() == 'C') {
            value = "";
            opt = "";
            total = "";
            $('#number').val('');
        } else{
            value += $(this).val();
            $('#number').val(value);
        }
    });

    $('.opt').click(function() {
        opt = $(this).val();
        $.ajax({
            url:'ajax.php',
            data:{value, total, operator},
            type:'POST',
            success:function(result){
                total = result;
                $('#number').val(total);
                value = "";
                operator = opt;
            }
        });
    });
});