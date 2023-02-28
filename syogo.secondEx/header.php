<!DOCTYPE html>
<html lang="ja" dir="ltl">
  <head>
    <link rel="icon" href="<?php echo get_template_directory_uri(  ) ?>/画像/img/logo01.png" id="favicon" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css">
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/flatpickr@4.6.13/dist/flatpickr.min.css"
      integrity="sha256-GzSkJVLJbxDk36qko2cnawOGiqz/Y8GsQv/jMTUrx1Q="
      crossorigin="anonymous"
    />

    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="format-detection" content="telephone=no" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="robots" content="noindex , nofollow" />

    <title> <?php bloginfo('name'); ?> </title>
    <meta
      name="description"
      content="<?php bloginfo('description'); ?> "
    />
    <?php wp_head(); ?> 
  </head>
  <header class="l-header">
      <div class="l-header__inner">
        <div class="l-header__inner-left">
          <a href="index.html">
            <img
              src="<?php echo get_template_directory_uri(  ) ?>/画像/img/top-header-logo.png"
              alt="top-header-logo"
              class="header-logo"
          /></a>

          <nav class="l-header-nav">
            <ul class="p-nav-list">
              <li class="p-nav-list-item1">
                <a href="./html/page1.html">お部屋</a>
              </li>
              <li class="p-nav-list-item1">
                <a href="./html/page2.html">お料理</a>
              </li>
              <li class="p-nav-list-item1">
                <a href="./html/page3.html">温泉</a>
              </li>
            </ul>
            <ul class="p-nav-list2">
              <li class="p-nav-list-item1">
                <a href="./html/page1.html">お部屋</a>
              </li>
              <li class="p-nav-list-item1">
                <a href="./html/page2.html">お料理</a>
              </li>
              <li class="p-nav-list-item1">
                <a href="./html/page3.html">温泉</a>
              </li>
            </ul>
          </nav>
        </div>
        <div class="l-header__inner-right">
          <li class="c-button__contact" id="openModal">
            <img src="<?php echo get_template_directory_uri(  ) ?>/画像/img/calender.png" alt="calender" />
            宿泊予約
          </li>
          <div id="c-BTN1" class="c-ham-btn">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div class="p-mask"></div>
        <section id="modalArea" class="modalArea">
          <div id="modalBg" class="modalBg"></div>
          <div class="modalWrapper">
            <div class="modalContents">
              <h4>宿泊予約</h4>
              <form
                action="https://docs.google.com/forms/u/0/d/e/1FAIpQLScpTaDaJ24r0rbmgBYtnMFZnl_WTUtWyt4c-51OrTSbygTrIw/formResponse"
                id="form"
              >
                <label for="name">お名前</label>
                <input
                  type="text"
                  name="entry.478053331"
                  id="name"
                  placeholder="例：石井正悟"
                  required="required"
                />

                <label for="email">メールアドレス</label>
                <input
                  type="email"
                  name="entry.1756128907"
                  id="email"
                  placeholder="Example@example.com"
                  required="required"
                />

                <label for="plan"
                  >ご希望プラン（空いているプランのみ表示されます）</label
                >
                <select
                  name="plan"
                  id="plan"
                  form="reserve"
                  name="entry.615494420"
                  required="required"
                >
                  <option value="plan0">プランを選択してください</option>
                  <option value="plan1">
                    【期間限定】海辺の四季旬彩、贅沢美味懐石プラン
                  </option>
                  <option value="plan2">
                    平日に優雅に楽しむ、特別宿泊プラン
                  </option>
                  <option value="plan3">
                    絶景貸切露天と個室会席を満喫できるファミリープラン
                  </option>
                </select>
                <label for="date">日時選択</label>
                <input
                  id="calender"
                  placeholder="日時を選択してください"
                  tabindex="0"
                  type="input"
                  readonly="readonly"
                  name="entry.152101716"
                  required="required"
                />
                <input
                  class="c-button2"
                  id="js-submit"
                  type="submit"
                  value="送信する"
                />
              </form>
              <p class="c-form__end-message">
                お問い合わせありがとうございました。２営業日以内に返信をさせていただきます。お待ちください。
              </p>
              <div id="closeModal" class="closeModal">
                <img src="<?php echo get_template_directory_uri(  ) ?>/画像/img/close.jpg" alt="close" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </header>
 