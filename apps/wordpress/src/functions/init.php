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