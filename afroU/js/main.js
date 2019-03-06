$('.owl-carousel').owlCarousel({
/*    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,*/
    loop:true,
    nav:true,
    dots:false,
    navText: ["<img src='images/arrow-left.png'>","<img src='images/arrow-right.png'>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
/*-----Achnor----*/
$(document).ready(function() {
    $('a.achnor').on('click', function(){
        var id = $(this).attr('href');
        $("html, body").animate({ scrollTop: $(id).offset().top - 60 +'px'},1000)
    });
});
/*---------MODEL-WINDOS--*/
$(document).ready(function () {
    $('#myModal').modal('show');
});

$('.log_in_model').on('click', function(){
    if($(".log_in_modal_block").not('openw')){
        $(".log_in_modal_block").addClass('openw');
        $(".sing_up_model_block").removeClass('openw');
        $(".log_in_model").addClass('change_b1');
        $(".log_in_model").removeClass('change_b2');
        $(".sing_up_model").addClass('change_b2');
        $(".sing_up_model").removeClass('change_b1');   
        };
    });
$('.sing_up_model').on('click', function(){
    if($(".sing_up_model_block").not('openw')){
        $(".sing_up_model_block").addClass('openw');
        $(".log_in_modal_block").removeClass('openw');
        $(".log_in_model").addClass('change_b2');
        $(".log_in_model").removeClass('change_b1');
        $(".sing_up_model").addClass('change_b1');
        $(".sing_up_model").removeClass('change_b2'); 
        };
    });
/*-----CHECK EMAIL AND PASS-------*/
function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validate() {

   var $result_email = $("#result_email");
    var email = $("#email").val();
    $result_email.text("");


    if (validateEmail(email)) {
    $result_email.text("Email address is valid");
    $result_email.css("color", "green");
    } else {
    $result_email.text("Email address is invalid");
    $result_email.css("color", "red");
    }

    return false;
}
document.getElementById('validate').onclick = form_val;
function form_val(){
    var pass_m = document.getElementById('pass_m').value;
    var result_pass = document.getElementById('result_pass');
            if(pass_m==undefined || pass_m==''){
                result_pass.innerHTML = "Password invalid. Try again.";
            }
            else{
                result_pass.innerHTML = ""; 
            }
} 
/*document.getElementById('validate_sing').onclick = form_val;
function form_val_sing(){
    var first_name =document.getElementById("first_name").value;
    var last_name  =document.getElementById("last_name").value;
    var email_sing  =document.getElementById("email_sing").value;
    var pass_sing  =document.getElementById("pass_sing").value;
    var result_first_name = document.getElementById("result_first_name");
    var result_last_name  = document.getElementById("result_last_name");
    var result_email_sing = document.getElementById("result_email_sing");
    var result_pass_sing  = document.getElementById("result_pass_sing");
            if(first_name==undefined || first_name==''){
                result_first_name.innerHTML = "Enter the First Name";
            }
            else{
                result_first_name.innerHTML = ""; 
            }
            if(last_name==undefined || last_name==''){
                result_last_name.innerHTML = "Enter the Last Name";
            }
            else{
                result_last_name.innerHTML = ""; 
            }
            if(email_sing==undefined || email_sing==''){
                result_email_sing.innerHTML = "Enter the Email";
            }
            else{
                result_email_sing.innerHTML = ""; 
            }
            if(pass_sing==undefined || pass_sing==''){
                result_pass_sing.innerHTML = "Enter the Email";
            }
            else{
                result_pass_sing.innerHTML = ""; 
            }
}
$("#validate_sing").bind("click", validate);*/
$("#validate").bind("click", validate);
/*-----CHECK EMAIL AND PASS-------*/
/*---------FIXED NAV----------*/
$(document).ready(function (){
var secondaryNav = $('#video_page');
var  video_page = secondaryNav.offset().top;
     
    $(".navbar-fixed").removeClass("on");
    $(window).scroll(function nax_fix(){
        if($(this).scrollTop()>= video_page || x.matches  ){
            $(".navbar-fixed").addClass('on');
        }else{
            $(".navbar-fixed").removeClass('on');
        };
    });
var x = window.matchMedia("(max-width: 767px)")
});
$('.navbar-toggle').on('click', function(){
    $('.navbar-toggle').toggleClass('open');
});

/*----------FIXED NAV SEARCH---------*/
$('#search_fixed label, .button_close_search').on('click', function(){
    $('#search_fixed').toggleClass('open');
});
/*-----------INST_BLOCK--------*/
$('.arrow_inst').on('click', function(){
    $('.inst_foto').toggleClass('on');
    if ($(".fas").hasClass("fa-angle-down")) {
        $(".fas").removeClass('fa-angle-down');
        $(".fas").addClass('fa-angle-up');
        }else{
        $(".fas").removeClass('fa-angle-up');
        $(".fas").addClass('fa-angle-down');
        };
    });