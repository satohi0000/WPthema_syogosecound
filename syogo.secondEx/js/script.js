jQuery("#c-BTN1").on("click", function () {
  jQuery(this).toggleClass("active");
  jQuery(".p-nav-list2").toggleClass("open");
  jQuery(".p-mask").toggleClass("open1");
  jQuery(".p-fv h6").toggleClass("u-flex__no");
  jQuery("html").toggleClass("no_scroll");
  jQuery(".l-header").toggleClass("c-filter");
  return false;
});

jQuery(".p-nav-item2 a").on("click", function () {
  jQuery("#c-BTN1").toggleClass("active");
  jQuery(".p-nav-list2").toggleClass("open");
  jQuery(".p-mask").toggleClass("open1");
  jQuery("body").toggleClass("no_scroll");
  return false;
});

jQuery(function () {
  // #で始まるa要素をクリックした場合に処理（"#"←ダブルクォーテンションで囲むのを忘れずに。忘れるとjQueryのバージョンによっては動かない。。）
  jQuery('a[href^="#"]').click(function () {
    // 移動先を0px調整する。0を30にすると30px下にずらすことができる。
    var adjust = -100;
    // スクロールの速度（ミリ秒）
    var speed = 1000;
    // アンカーの値取得 リンク先（href）を取得して、hrefという変数に代入
    var href = jQuery(this).attr("href");
    // 移動先を取得 リンク先(href）のidがある要素を探して、targetに代入
    var target = jQuery(href == "#" || href == "" ? "html" : href);
    // 移動先を調整 idの要素の位置をoffset()で取得して、positionに代入
    var position = target.offset().top + adjust;
    // スムーススクロール linear（等速） or swing（変速）
    jQuery("body,html").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
});

jQuery("#menu1").on("click", function () {
  jQuery("#menu1").css("text-decoration", "underline");
  jQuery("#menu2").css("text-decoration", "none");
  jQuery(".p-article3__other").css("display", "none");
  jQuery(".p-article3__info").css("display", "flex");
  return false;
});

jQuery("#menu2").on("click", function () {
  jQuery("#menu2").css("text-decoration", "underline");
  jQuery("#menu1").css("text-decoration", "none");
  jQuery(".p-article3__other").css("display", "flex");
  jQuery(".p-article3__info").css("display", "none");
  return false;
});

jQuery(function () {
  //is-showクラスのつけ外しだけでモーダル表示非表示できるようにしています
  //アニメーションはcss側に記載しています
  jQuery("#openModal").on("click", function () {
    jQuery("#modalArea").toggleClass("is-show");
    jQuery("html").toggleClass("no_scroll");
    jQuery(".p-fv h6").toggleClass("u-flex__no");
  });
  jQuery("#closeModal").on("click", function () {
    jQuery("#modalArea").toggleClass("is-show");
    jQuery("html").toggleClass("no_scroll");
    jQuery(".p-fv h6").toggleClass("u-flex__no");
  });
  jQuery("#modalBg").on("click", function () {
    jQuery("#modalArea").toggleClass("is-show");
    jQuery("html").toggleClass("no_scroll");
    jQuery(".p-fv h6").toggleClass("u-flex__no");
  });
});

jQuery(document).ready(function () {
  jQuery("#form").submit(function (event) {
    var formData = jQuery("#form").serialize();
    jQuery.ajax({
      url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLScpTaDaJ24r0rbmgBYtnMFZnl_WTUtWyt4c-51OrTSbygTrIw/formResponse",
      type: "POST",
      dataType: "xml",
      statusCode: {
        0: function () {
          jQuery(".c-form__end-message").slideDown();
          jQuery(".c-button").fadeOut();
          //window.location.href = "thanks.html";
        },
        200: function () {
          jQuery(".c-form__false-message").slideDown();
        },
      },
    });
    event.preventDefault();
  });
});

jQuery(document).ready(function () {
  const jQuerysubmitBtn = jQuery("#js-submit");
  jQuery("#form input,#form textarea").on("change", function () {
    if (
      jQuery('#form input[type="text"]').val() !== "" &&
      jQuery('#form input[type="email"]').val() !== "" &&
      jQuery("#form #calender").val() !== true
    ) {
      jQuerysubmitBtn.prop("disabled", false);
    } else {
      jQuerysubmitBtn.prop("disabled", true);
    }
  });
});

flatpickr("#calender", {
  locale: "ja",
  minDate: "today",
  mode: "multiple",
  altFormat: "Y年n月j日",
  dateFormat: "Y-m-d",
});

AOS.init({
  offset: 100,
  duration: 1000,
  easing: "ease-in-sine",
  delay: 100,
});

jQuery(function () {
  var jQuerywin = jQuery(window),
    jQueryfv = jQuery(".p-fv");
  jQueryheader = jQuery(".l-header");
  (fvHeight = jQueryfv.outerHeight()),
    (fixedClass = "is-fixed"),
    (changeColor = "is-fixed2");
  jQuerywin.on("load scroll", function () {
    var value = jQuery(this).scrollTop();
    if (jQuerywin.width() > 300)
      if (value > fvHeight) {
        jQueryheader.addClass(fixedClass);
        jQuery(".header-logo").addClass(changeColor);
        jQuery(".p-nav-list").children("li").addClass(changeColor);
        jQuery(".c-ham-btn").addClass(changeColor);
      } else {
        jQueryheader.removeClass(fixedClass);
        jQuery(".header-logo").removeClass(changeColor);
        jQuery(".p-nav-list").children("li").removeClass(changeColor);
        jQuery(".c-ham-btn").removeClass(changeColor);
      }
  });
});

jQuery(function () {
  var jQuerywin2 = jQuery(window),
    jQueryfv2 = jQuery(".p-fv2");
  jQueryheader2 = jQuery(".l-header");
  (fvHeight2 = jQueryfv2.outerHeight()),
    (fixedClass2 = "is-fixed3"),
    (changeColor2 = "is-fixed4"),
    jQuerywin2.on("load scroll", function () {
      var value = jQuery(this).scrollTop();
      if (jQuerywin2.width() > 300)
        if (value > fvHeight2) {
          jQueryheader2.addClass(fixedClass2);
          jQuery(".header-logo").addClass(changeColor2);
          jQuery(".p-nav-list").children("li").addClass(changeColor2);
          jQuery(".c-ham-btn").addClass(changeColor2);
        } else {
          jQueryheader2.removeClass(fixedClass2);
          jQuery(".header-logo").removeClass(changeColor2);
          jQuery(".p-nav-list").children("li").removeClass(changeColor2);
          jQuery(".c-ham-btn").removeClass(changeColor2);
        }
    });
});
