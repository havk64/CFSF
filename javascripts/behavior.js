$(function(){
    $('[aria-controls="Hudson"]').click(function(e){
                       var $this = $(this),
                           url = $this.attr('href'),
                           targ = $this.attr('data-target');
        $.get(url, function(data){
            $(targ).html(data);
        });
        $this.tab('show');
        return false;
                           
                       })
})