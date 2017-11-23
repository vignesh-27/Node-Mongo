$(document).ready(function(){

    $('form').on('submit', function(){
      
        var item = $('form input');
        var todo = {item: item.val()};
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