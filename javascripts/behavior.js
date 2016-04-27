$(function(){
    var url;
    $('#language').modal('toggle');
   /* $('#language').on('hidden.bs.modal', function(){
        if(!$('.jumbotron').lenght) {
            alert("Please, choose a language!");
            $(this).modal('toggle');
        } else { console.log('Thanks!');}
    });*/
    $('#english').click(function(){
        $('html').attr('lang', 'en');
        url = '/views/english.json';
        loadLang(url);
    });
    $('#french').click(function(){
        $('html').attr('lang', 'fr');
        url = '/views/french.json';
        loadLang(url);
    })

    function loadLang(url){
        $('#language').modal('hide');
        var template = Handlebars.templates['main']; // Using precompiled template.
        $.ajax(url,{
            success: function(data){
                var html = template(data);
                $('#root').prepend(html);
                renderTabs();
            }
        });
    }
    
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

        $this.tab('show'); // Show the tab.
        return false;
    });
        $('[data-target="#Notredame"]').click(); //Make the first tab active at load
        $('#footer').removeClass('hidden'); // Show footer that is hidden.
    }
})
