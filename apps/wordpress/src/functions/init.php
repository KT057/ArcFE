<?php
  function add_css_js() {
    // テーマ全体のCSS
    wp_enqueue_style('style', get_template_directory_uri().'/style.css' );
  };

  add_action('wp_enqueue_scripts', 'add_css_js');

  /**
   * 投稿タイプのスラッグをIDにする
   */
  function slug_auto_setting_post($slug, $post_ID, $post_status, $post_type) {
    // 除外する投稿タイプ
    $exclude = ['attachment', 'revision', 'nav_menu_item'];

    if (!in_array($post_type, $exclude, true)) {
        $slug = $post_ID;
    }
    return $slug;
  }
  add_filter('wp_unique_post_slug', 'slug_auto_setting_post', 10, 4);


  add_action('created_term', function ($term_id, $tt_id, $taxonomy) {
    // 除外するタクソノミー
    $exclude = ['nav_menu', 'link_category', 'post_format'];
    if (in_array($taxonomy, $exclude, true)) return;

    $term = get_term($term_id, $taxonomy);
    if (is_wp_error($term) || !$term) return;

    // 英数字とハイフンのみ許可するパターン
    if (preg_match('/^[a-zA-Z0-9-]+$/', $term->slug)) {
        // 許可パターン → そのまま
        return;
    }

    // 許可パターン以外 → term_id に置き換える
    $desired = (string) $term_id;
    $unique  = wp_unique_term_slug($desired, $term); 

    if ($unique !== $term->slug) {
        wp_update_term($term_id, $taxonomy, ['slug' => $unique]);
    }
  }, 10, 3);

  // ローカルでメールの確認をするための設定
  add_action('phpmailer_init', function ($phpmailer) {
    $phpmailer->isSMTP();
    $phpmailer->Host       = 'mailhog';
    $phpmailer->Port       = 1025;
    $phpmailer->SMTPAuth   = false;  // 認証なし
    $phpmailer->SMTPSecure = '';     // 暗号化なし
    // 任意: 送信元を統一
    $phpmailer->From     = 'noreply@example.local';
    $phpmailer->FromName = 'WP Site';
  });

/**
 * CSRのSEO対策(BotのみスナップショットをしたHTMLを返す)
 */
add_action('template_redirect', function () {
  if (is_admin()) return;
  if ($_SERVER['REQUEST_METHOD'] !== 'GET') return;

  $ua = $_SERVER['HTTP_USER_AGENT'] ?? '';
  $is_bot = preg_match('~googlebot|bingbot|duckduckbot|twitterbot|facebookexternalhit|slackbot|line|embedly~i', $ua);
  if (!$is_bot) return; // ← 人間はCSRでOK

  // 静的ファイル等はスキップ
  $uri = parse_url($_SERVER['REQUEST_URI'] ?? '/', PHP_URL_PATH);
  if (preg_match('~\.(js|css|png|jpe?g|gif|svg|webp|ico|json|xml|txt)$~i', $uri)) return;

  // テーマ内 snapshots を見る
  $theme_snap_dir = get_stylesheet_directory() . '/screenshots';
  $path = rtrim($uri, '/');
  $path = $path === '' ? '/index' : $path;

  $try = [
    $theme_snap_dir . $path . '.html',           // /about → snapshots/about.html
    $theme_snap_dir . rtrim($uri, '/') . '/index.html', // /about/ → snapshots/about/index.html
  ];

  foreach ($try as $p) {
    if (is_file($p)) {
      header('Content-Type: text/html; charset=utf-8');
      header('X-Snapshot: HIT');
      readfile($p);
      exit;
    }
  }
});


/**
 * JSON-LD形式の構造化データを出力
 */
function json_article() {

  /** 表示ページのWPオブジェクトを取得 **/
  $post = get_queried_object();

  /** 投稿者情報を取得 **/
  $author = get_userdata( $post->post_author );
  $author_name = $author->display_name; // 表示名
  $author_url = $author->user_url; // サイト

  $permalink = ( empty($_SERVER["HTTPS"] ) ? "http://" : "https://") . $_SERVER["HTTP_HOST"] . $_SERVER["REQUEST_URI"];

  /**
  * 除外設定
  **/
  if( is_admin() ) { return false; }

  /** 各種詳細 ＆ トップページ **/
  if ( is_singular() || is_page() || is_home() || is_front_page() ) {

    if( has_post_thumbnail() ) {
      /** アイキャッチ画像 **/
      $image_url = get_the_post_thumbnail_url();
    } else {
      $image_url = '代替え画像のURL';
    }

    if( is_home() || is_front_page() ) {
      $title = get_bloginfo( 'name' );
    } else {
      $title = get_the_title() . ' | ' . get_bloginfo( 'name' );
    }

    $json_article = array(
      "@context"         => "https://schema.org",
      "@type"            => "NewsArticle",
      "mainEntityOfPage" => array(
        "@type" => "WebPage",
        "@id"   => esc_url( $permalink ),
      ),
      "headline"         => $title,
      "image"            => array(
        $image_url,
      ),
      "datePublished"    => get_the_time( 'c' ),
      "dateModified"     => get_the_modified_time( 'c' ),
      "author"           => array(
        "@type" => "Person",
        "name"  => $author_name,
        "url"   => esc_url( $author_url ),
      ),
      "publisher"        => array(
        "@context"    => "http://schema.org",
        "@type"       => "Organization",
        "name"        => get_bloginfo( 'name' ),
        "description" => get_bloginfo( 'description' ),
        "logo"        => array(
          "@type" => "ImageObject",
          "url"   => "サイトのロゴ画像のURL",
        ),
      ),
    );

    echo '<script type="application/ld+json">' . json_encode( $json_article , JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT ) . '</script>';
  }
}

add_action('wp_head', 'json_article');