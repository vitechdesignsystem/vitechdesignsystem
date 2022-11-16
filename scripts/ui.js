jQuery(window).on('load', function(){

    // Colors page primary color button group
    $("#primary-colors-button-group").click(function(){
        $selectedTab = $(this).children(".button-group-single.active").html();
        if($selectedTab == "RGB"){ $(".color-hex").hide(); $(".color-rgb").show(); }
        if($selectedTab == "Hex"){ $(".color-hex").show(); $(".color-rgb").hide(); }
    });

    // Buttons page anchor nav toggle by tabs
    $("#buttonsPageTabs ul.tabs-list li").click(function(){
        $selectedTab = $(this).attr("data-tabs-target");
        if($selectedTab == "#designGuidelines"){ $("#designGuidelinesNav").show(); $("#usecasesNav").hide(); }
        if($selectedTab == "#useCases"){ $("#usecasesNav").show(); $("#designGuidelinesNav").hide(); }
    });

    $('select').formSelect();

    // Chips Selector
    $(".chip.selectable").click(function(){
        $(this).toggleClass("selected");
    });
});


$(document).ready(function(){
    $('.tabs').tabs();
  });