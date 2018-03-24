<?php require_once('blogs/wp-load.php'); ?>
<!DOCTYPE html>
<html lang="ja">
<head>
  <link rel="stylesheet" type="text/css" href="css/style.css">
  <link rel="stylesheet" type="text/css" href="css/wp_newblog_list.css">
</head>
<body>
  <main id="main">
    <article class="p-new-blodlist-art">
      <span class="p-new-blodlist-title">新着ブログ</span>
      <ul>
        <?php
        $posts = get_posts("numberposts=4&category=&orderby=post_date&offset=0");
        foreach ($posts as $post):
        setup_postdata($post);
        ?>
        <li>
          <p class="p-new-blodlist-date"><?php the_time('Y.m.d') ?></p>
          <div class="p-new-blodlist-link clearfix"><a href="<?php the_permalink() ?>" target="_blank"><?php the_title() ?><span class="p-new-blodlist-thumbnail"><?php the_post_thumbnail('thumbnail'); ?></span></a><div>
        </li>
        <?php endforeach; ?>
      </ul>
    </article>
  </main>
  <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
  <script type="text/javascript">
  $(window).on('load',function() {
    $(".p-wp-newblog-plgin", window.parent.document).height(document.body.scrollHeight);
  });
  </script>
</body>
</html>
