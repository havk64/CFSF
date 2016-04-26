$(function(){
    $('#language').modal('toggle');
    var url = '/views/english.json';
    //var source = $('#template').html();
    //var template = Handlebars.compile(source);
    var template = Handlebars.templates['main']; // Using precompiled template.
    $.ajax(url,{
        success: function(data){
            var html = template(data);
            $('#container').prepend(html);
            renderTabs();
        }
    });
    function renderTabs(){
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
    $('[data-target="#Notredame"]').click();
    }
})
