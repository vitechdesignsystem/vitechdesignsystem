$(document).ready(function(){

    // BUTTON GROUPS
    $(".button-group-single").click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    });

    // ANCHOR NAV
    $("ul.anchor-nav li").click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        $target = $(this).attr("data-scroll-target");
        $('body').scrollTo($target, 800, {offset:-100});
    });
    // TABS HORIZONTAL
    $("ul.tabs-list li").click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        $(this).parent().parent().siblings().removeClass('active');
        $target = $(this).attr("data-tabs-target");
        $($target).addClass("active");
    });
});