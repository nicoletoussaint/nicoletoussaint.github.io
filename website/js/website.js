<script>

  $(window).scroll(function() {
    console.log("calling function");
    console.log($(window).scrollTop());
    if ($(window).scrollTop() > 720) {
        // > 100px from top - show div
        $("#navMeow").fadeIn("slow");
    }
    else {
        // <= 100px from top - hide div
        $("#navMeow").fadeOut("fast");
    }
  });


  $('body').scrollspy({
    target: '#navMeow',
    offset: 50
  });

</script>
