$(document).ready(function () {
  //navbar menu

    // tv show navbar
    $("#sab").click(() => {
        $(".tv-show-card").css({
        background:
            "url(https://images.slivcdn.com/videoasset_images/blitz_assets/1700000084/portraitThumb/1760357358099_./TMKOC25_6_Portrait_Thumb_SP.jpg?h=494&w=344&q=high)",
        "background-size": "cover",
        });
        $("#tv-show-menu button").removeClass("active");
        $("#sab").addClass("active");
    });

    $("#set").click(() => {
        $(".tv-show-card").css({
        background:
            "url(https://images.slivcdn.com/videoasset_images/blitz_assets/1700001266/portraitThumb/1761213086685_./IGT2025_2_Portrait_Thumb_SP_2.jpg?h=494&w=344&q=high)",
        "background-size": "cover",
        });
        $("#tv-show-menu button").removeClass("active");
        $("#set").addClass("active");
    });

    $("#marathi").click(() => {
        $(".tv-show-card").css({
        background:
            "url(https://images.slivcdn.com/videoasset_images/cid_marathi_7nov_portrait_thumb.jpg?h=494&w=344&q=high)",
        "background-size": "cover",
        });
        $("#tv-show-menu button").removeClass("active");
        $("#marathi").addClass("active");
    });
    $("#yay").click(() => {
        $(".tv-show-card").css({
        background:
            "url(https://images.slivcdn.com/videoasset_images/honey_bunny_ka_jholmaal_8aug_portrait_thumb.jpg?h=494&w=344&q=high)",
        "background-size": "cover",
        });
        $("#tv-show-menu button").removeClass("active");
        $("#yay").addClass("active");
    });

    //sports menu navbar
    $("#crickets").click(() => {
        $(".sports-show-card").css({
        background:
            "url(https://images.slivcdn.com/videoasset_images/manage_file/1000008910/175828907400064_AsiaCup_2025_GOB_4_Portrait_Thumb_SP_5.jpg?h=494&w=344&q=high)",
        "background-size": "cover",
        });
        $("#sport-nav-menu button").removeClass("active");
        $("#crickets").addClass("active");
    });

     $("#football").click(() => {
        $(".sports-show-card").css({
        background:
            "url(https://images.slivcdn.com/videoasset_images/manage_file/1000008007/1757599136000857_UCL25_26_GOB_1_Portrait_Thumb.jpg?h=494&w=344&q=high)",
        "background-size": "cover",
        });
        $("#sport-nav-menu button").removeClass("active");
        $("#football").addClass("active");
    });

      $("#ufc").click(() => {
        $(".sports-show-card").css({
        background:
            "url(https://images.slivcdn.com/videoasset_images/manage_file/1000010515/1761311490000870_UFC_321_ASPINALLvsGANE_Portrait_Thumb.jpg?h=494&w=344&q=high)",
        "background-size": "cover",
        });
        $("#sport-nav-menu button").removeClass("active");
        $("#ufc").addClass("active");
    });

     $("#tennis").click(() => {
        $(".sports-show-card").css({
        background:
            "url(https://images.slivcdn.com/videoasset_images/manage_file/1000010563/1761530840000620_RolexParisMasters2025_Portrait_Thumb.jpg?h=494&w=344&q=high)",
        "background-size": "cover",
        });
        $("#sport-nav-menu button").removeClass("active");
        $("#tennis").addClass("active");
    });

    //movies nav
    $("#english").click(() => {
        $(".movies-show-card").css({
        background:
            "url(https://images.slivcdn.com/videoasset_images/sevenpounds_portrait_thumb.jpg?h=494&w=344&q=high)",
        "background-size": "cover",
        });
        $("#movies-menu button").removeClass("active");
        $("#english").addClass("active");
    });

     $("#hindi").click(() => {
        $(".movies-show-card").css({
        background:
            "url(https://images.slivcdn.com/portrait_thumb/Satya_rev_portrait_thumb.jpg?h=494&w=344&q=high)",
        "background-size": "cover",
        });
        $("#movies-menu button").removeClass("active");
        $("#hindi").addClass("active");
    });

     $("#tamil").click(() => {
        $(".movies-show-card").css({
        background:
            "url(https://images.slivcdn.com/videoasset_images/manage_file/1000004197/1749665857522959_Alappuzha_Gymkhana_tamil_11jun_portrait_thumb.jpg?h=494&w=344&q=high)",
        "background-size": "cover",
        });
        $("#movies-menu button").removeClass("active");
        $("#tamil").addClass("active");
    });
     $("#telgu").click(() => {
        $(".movies-show-card").css({
        background:
            "url(https://images.slivcdn.com/videoasset_images/marco_telugu_3mar_portrait_thumb.jpg?h=494&w=344&q=high)",
        "background-size": "cover",
        });
        $("#movies-menu button").removeClass("active");
        $("#telgu").addClass("active");
    });




  // expage navbar
  $("#search_icon").click(function () {
    window.location.href = "./search.html";
  });
  $(".tv-show").click(() => {
    window.Location.href = "";
  });





  
  // sport -page
  $("#foot-img").click(() => {
    $("#menu-sport .card-sport").css({
      background:
        "url(https://images.slivcdn.com/videoasset_images/manage_file/1000008007/1757599136000857_UCL25_26_GOB_1_Portrait_Thumb.jpg?h=494&w=344&q=high)",
      "background-size": "cover",
    });
    $(".selction-menu-sport button").removeClass("active");
    $("#foot-img").addClass("active");
  });

  $("#all-sports").click(() => {
    $("#menu-sport .card-sport").css({
      background:
        "url(https://images.slivcdn.com/videoasset_images/manage_file/1000010048/1760025834685167_AsiaCup_Glory_24x7_portrait_thumb_9OCT.jpg?h=494&w=344&q=high)",
      "background-size": "cover",
    });
    $(".selction-menu-sport button").removeClass("active");
    $("#all-sports").addClass("active");
  });
  $("#cricket-img").click(() => {
    $("#menu-sport .card-sport").css({
      background:
        "url(https://images.slivcdn.com/videoasset_images/manage_file/1000010048/1760025834685167_AsiaCup_Glory_24x7_portrait_thumb_9OCT.jpg?h=494&w=344&q=high)",
      "background-size": "cover",
    });
    $(".selction-menu-sport button").removeClass("active");
    $("#cricket-img").addClass("active");
  });
  $("#ufc-img").click(() => {
    $("#menu-sport .card-sport").css({
      background:
        "url(https://images.slivcdn.com/videoasset_images/manage_file/1000010515/1761311490000870_UFC_321_ASPINALLvsGANE_Portrait_Thumb.jpg?h=494&w=344&q=high)",
      "background-size": "cover",
    });
    $(".selction-menu-sport button").removeClass("active");
    $("#ufc-img").addClass("active");
  });
  $("#tennis-img").click(() => {
    $("#menu-sport .card-sport").css({
      background:
        "url(https://images.slivcdn.com/videoasset_images/manage_file/1000001624/1744967620000295_ATP_Masters_1000_Mutua_Madrid_Open_2025_GOB_Portrait_Thumb.jpg?h=494&w=344&q=high)",
      "background-size": "cover",
    });
    $(".selction-menu-sport button").removeClass("active");
    $("#tennis-img").addClass("active");
  });
  $("#other-img").click(() => {
    $("#menu-sport .card-sport").css({
      background:
        "url(https://images.slivcdn.com/videoasset_images/manage_file/1000002661/1747742820000233_Norway_Chess_GOB_Portrait_Thumb_1.jpg?h=494&w=344&q=high)",
      "background-size": "cover",
    });
    $(".selction-menu-sport button").removeClass("active");
    $("#other-img").addClass("active");
  });

 
    $(".card-epi").click(()=>{
    window.location.href = "tv_show_video.html"
    })
    $(".card-reality").click(()=>{
        window.location.href ="tv_show_nonvideo.html"
    })
    $(".outer-trend-card").click(()=>{
      window.location.href ="tv_show_nonvideo.html"
    })
    $(".ad-big-card").click(()=>{
      window.location.href = "tv_show_nonvideo.html"
    })
    $(".card-sport").click(()=>{
      window.location.href = "sports_nonvideo.html"
    })
    $(".card-regi").click(()=>{
      window.location.href = "originals_nonvideo.html"
    })
    $(".card-upcoming").click(()=>{
       window.location.href = "originals_nonvideo.html"
    })
    $(".ad-card").click(()=>{
       window.location.href = "originals_video.html"
    })
    $(".tv-show-card").click(()=>{
      window.location.href = "tv_show_nonvideo.html"
    })
    $(".sports-show-card").click(()=>{
      window.location.href = "sports_nonvideo.html"
    })
    $(".card-prew").click(()=>{
      window.location.href = "movie_nonvideo.html"
    })
     $(".card-diwali").click(()=>{
      window.location.href = "movie_nonvideo.html"
    })
    $(".movies-show-card").click(()=>{
      window.location.href = "movie_nonvideo.html"
    })
     $(".card-more").click(()=>{
       window.location.href = "./more.html"
    })
   
    $(".sub-btn").click(() =>{
      window.location.href = "./sub.html"
    })
    $("#signincl,.desc-buttons,.btn-share,.btn-add").click(()=>{
      window.location.href = "./signin.html"
    })
    $(".btnsub").click(()=>{
      window.location.href = "./sub.html"
    })
    $(".desc-buttons button:first-child").click(()=>{
      window.location.href = "./signin.html"
    })
   
  $(".user_table tr:contains('Activate TV')").click(() => {
    window.location.href = "./activate.html";
  });
    
  $(".user_table tr:contains('Subscribe  now')").click(() => {
    window.location.href = "./sub.html";
  });
  $(".user_table tr:contains('Setting & Preference')").click(() => {
    window.location.href = "./setting.html";
  });
  $(".user_table tr:contains('Activate Offer')").click(() => {
    window.location.href = "./signin.html";
  });
  $(".user_table tr:contains('Contact Us')").click(() => {
    window.location.href = "./contactus.html";
  });
   $(".user_table tr:contains('Chat With us on Whatsapp')").click(() => {
    window.location.href = "https://api.whatsapp.com/send?phone=918591975331&text=hey";
  });
  
  $("#list-show").click(()=>{
    $(".nav-links").toggle();
    // $(".nav-links li").after("<br>")
  })
$(" #user_icon img").click(()=>{
    $(".user_box").toggle()
  })

  $(".bottombar a").click((e)=>{
    e.preventDefault();
    window.location.href = "./tv_show.html"
  })
  $(".str a").eq(0).click((e)=>{
     e.preventDefault();
    window.location.href = "https://play.google.com/store/apps/details?id=com.sonyliv"
  })

   $(".str a").eq(1).click((e)=>{
     e.preventDefault();
    window.location.href = "https://apps.apple.com/in/app/sony-liv/id587794258"
  })

  $(".d a").eq(0).click((e)=>{
     e.preventDefault();
    window.location.href = "https://www.linkedin.com/company/sony-pictures-networks-india"
  })
  $(".d a").eq(1).click((e)=>{
     e.preventDefault();
    window.location.href = "https://www.instagram.com/sonylivindia/?hl=en"
  })
  $(".d a").eq(2).click((e)=>{
     e.preventDefault();
    window.location.href = "https://www.facebook.com/SonyLIV/"
  })
  $(".d a").eq(3).click((e)=>{
     e.preventDefault();
    window.location.href = "https://www.linkedin.com/company/sony-pictures-networks-india"
  })
});

// navigation of card clicl
