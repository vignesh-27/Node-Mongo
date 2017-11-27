$(document).ready(function(){

    $('form').on('submit', function(){
      
        var item = $('#item').val();
        var description = $('#description').val();
        var price = $('#price').val();
        var todo = {item: item, description: description, price:price};
        alert(todo);
        $.ajax({
            type: 'POST',
            url: '/contact',
            data: todo,
            success: function(data){
            location.reload();
            },
            error:function(a, b , e){
                console.log(e);
            }
        });
       
    });

    $('li').on('click', function(){
        var item = $(this).text();
        console.log
        $.ajax({
            type:'DELETE',
            url:'/contact/'+item,
            success: function(data){
                location.reload();
            }
        });
    });
});