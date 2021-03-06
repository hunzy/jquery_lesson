$(function(){

    // 1. トップ画像をフェードインで表示
    $(".top_img > img").css("display", "none").fadeIn(2000);
    
    // 2. 画像のキャプションをマウスオーバーに合わせて表示
    $(".frame__inner")
        .mouseover(function(){
            $(this).find(".frame__caption").slideDown();
        })
        .mouseout(function(){
            $(this).find(".frame__caption").slideUp();
    });
    
    // 3. トップに戻るボタン
    $(".to_top").click(function(){
        $("body").animate({scrollTop: 0}, 1000);
    });

    // 4. スクロールに合わせてナビゲーションの透明度を変える
    var $nav1 = $(".navigation1");
    $(window).scroll(function(){
        var opacity = $(this).scrollTop() / 300.0;
        $nav1.css("opacity", opacity);
    });
    
    // 5. 左から出てくるナビゲーション
    var $nav2 = $(".navigation2");
    var $nav2_btn = $(".navigation2__btn");
    var is_open = false;
    $nav2_btn.click(function(){
        if( is_open == false ){
            $nav2.animate({left: "0"}, 500);
            is_open = true;
            $nav2_btn.text("◀");
        } else{
            $nav2.animate({left: "-150px"}, 500);
            is_open = false;
            $nav2_btn.text("▶");
        }
    });

    // 6. モーダルウィンドウ
    $(".modal__open").click(function(){
        $(".overlay").css("display", "block");
        $(".modal")
            .css("top", $(window).scrollTop() + 100)
            .fadeIn(500);
    });
    $(".modal__close").click(function(){
        $(".overlay").css("display", "none");
        $(".modal").css("display", "none");
    });
    
    // 番外. スクロールに合わせてついてくるサイドバー
    var $side    = $(".main__side");
    var $ad_area = $(".ad_area");
    var offset   = $ad_area.offset().top - $nav1.height();
    $(window).scroll(function(){
        var scrolltop = $(this).scrollTop();
        if( scrolltop > offset ){
            $ad_area.css({
                position: "absolute",
                top: scrolltop + $nav1.height()
            });
        }else{
            $ad_area.css("position", "static");
        }
    });
    
});