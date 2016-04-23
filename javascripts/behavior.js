$(function(){
    $('[role="tab"]').click(function(e){ // Selecting each anchor element of tabs.
                       var $this = $(this),
                           url = $this.attr('href'),
                           targ = $this.attr('data-target');
        $.get(url, function(data){ // Get the html data
            $(targ).html(data);
        });
        $this.tab('show'); // Show the tab.
        return false;
                       });
})