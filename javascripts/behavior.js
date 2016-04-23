$(function(){
    $('[role="tab"]').click(function(e){ // Selecting each anchor element of tabs.
                       var $this = $(this),
                           url = $this.attr('href'),
                           targ = $this.attr('data-target');
        $.ajax(url,{
            success: function(data){
                $(targ).html(data);
            }
        });
        /*$.get(url, function(data){ // Using get instead of $.ajax();
            $(targ).html(data);
        });*/
        $this.tab('show'); // Show the tab.
        return false;
                       });
    $('[data-target="#Notre-Dame"]').click();
})