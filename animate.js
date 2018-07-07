$(document).ready(function(){
    $(function(){
    $('body').removeClass('fade-out');
    });
    
    $('.toggle').click(function(){
        $('.sidenav').toggle('slow');
        $('.sidenav-open').toggle('slow');
    });
    
    $('#about').click(function(){
        $('.about').show('slow');
        $('.work').hide('slow');
        $('.contact').hide('slow');
        $('.main-head').hide('slow');
    });
    
    $('#work').click(function(){
        $('.work').show('slow');
        $('.about').hide('slow');
        $('.contact').hide('slow');
        $('.main-head').hide('slow');
    });
    
    $('#contact').click(function(){
        $('.contact').show('slow');
        $('.about').hide('slow');
        $('.work').hide('slow');
        $('.main-head').hide('slow');
    });
    
    $('#home').click(function(){
        $('.main-head').show('slow');
        $('.about').hide('slow');
        $('.work').hide('slow');
        $('.contact').hide('slow');
    });

});