$(document).ready(function(){
    
    $('.login').click(function(){
        $('.login').addClass('active');
        $('.register').removeClass('active');
        $('.forgot').removeClass('active');
        
        $('.login_here').css('display', 'block');
        $('.register_here').css('display', 'none');
        $('.reset_here').css('display', 'none');
        
    });

    $('.register').click(function(){
        $('.register').addClass('active');
        $('.login').removeClass('active');
        $('.forgot').removeClass('active');
        
        $('.login_here').css('display', 'none');
        $('.register_here').css('display', 'block');
        $('.reset_here').css('display', 'none');
        
    });

    $('.forgot').click(function(){
        $('.forgot').addClass('active');
        $('.register').removeClass('active');
        $('.login').removeClass('active');
        
        $('.login_here').css('display', 'none');
        $('.register_here').css('display', 'none');
        $('.reset_here').css('display', 'block');
        
    });
    
});
