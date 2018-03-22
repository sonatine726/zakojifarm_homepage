<?php
/**
 * WordPress の基本設定
 *
 * このファイルは、インストール時に wp-config.php 作成ウィザードが利用します。
 * ウィザードを介さずにこのファイルを "wp-config.php" という名前でコピーして
 * 直接編集して値を入力してもかまいません。
 *
 * このファイルは、以下の設定を含みます。
 *
 * * MySQL 設定
 * * 秘密鍵
 * * データベーステーブル接頭辞
 * * ABSPATH
 *
 * @link http://wpdocs.osdn.jp/wp-config.php_%E3%81%AE%E7%B7%A8%E9%9B%86
 *
 * @package WordPress
 */

// 注意:
// Windows の "メモ帳" でこのファイルを編集しないでください !
// 問題なく使えるテキストエディタ
// (http://wpdocs.osdn.jp/%E7%94%A8%E8%AA%9E%E9%9B%86#.E3.83.86.E3.82.AD.E3.82.B9.E3.83.88.E3.82.A8.E3.83.87.E3.82.A3.E3.82.BF 参照)
// を使用し、必ず UTF-8 の BOM なし (UTF-8N) で保存してください。

// ** MySQL 設定 - この情報はホスティング先から入手してください。 ** //
/** WordPress のためのデータベース名 */
define('DB_NAME', 'LAA0929252-wpzakojifarm');

/** MySQL データベースのユーザー名 */
define('DB_USER', 'LAA0929252');

/** MySQL データベースのパスワード */
define('DB_PASSWORD', '2VO06imZVNxRuEJs');

/** MySQL のホスト名 */
define('DB_HOST', 'mysql130.phy.lolipop.lan');

/** データベースのテーブルを作成する際のデータベースの文字セット */
define('DB_CHARSET', 'utf8mb4');

/** データベースの照合順序 (ほとんどの場合変更する必要はありません) */
define('DB_COLLATE', '');

/**#@+
 * 認証用ユニークキー
 *
 * それぞれを異なるユニーク (一意) な文字列に変更してください。
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org の秘密鍵サービス} で自動生成することもできます。
 * 後でいつでも変更して、既存のすべての cookie を無効にできます。これにより、すべてのユーザーを強制的に再ログインさせることになります。
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '[eu)32Lf5ueJ(Cybha{q~ZOH+hc0$#zi%yz4mEF);B%-Yde=!3Mo(PkO<8M60fy#');
define('SECURE_AUTH_KEY',  'UF/Ctg1Cadb.6E1E-r>Pj(Q$dj3P%)y BMcHpFmhz$jVhu{80Nz`emBm$H|WXe[ ');
define('LOGGED_IN_KEY',    'sLdUOwnOzg`P)<@V/`@g2U6WnK7.>a%ws4X/AiTw>n6^?yl4a!tbo0x&ioviRyc!');
define('NONCE_KEY',        ';b31I)vI2~F<WIU<fE1a B?`}@EZsi_u}$_<Bte*TRV|I~!pjjqQN&r<_rAsrr2Q');
define('AUTH_SALT',        'R)izlBx:}c<s0dA!,$^|W,3Q6O]-a+!Offc<.)`K!wt?[u1tRLLNv$c@nYb,B<I@');
define('SECURE_AUTH_SALT', '@.M?eIC5krq5}_Pv?(i%AIC#UjJA<fqKim,d1:%}Y|+V ax0~}[0j1AUvJOT.tn~');
define('LOGGED_IN_SALT',   'Pt%[10S5:feXpi|W@.]^mBYUjq|f=fk|9S-DU@<i4DVxn`1ZA03wS@HysTVSQe&9');
define('NONCE_SALT',       '3J;4S>ctW.xg9Qy7oiW~QTLB-,(kG>1i:fgWheASON?)`b(c;4pZN&k`5oP/0qKl');

/**#@-*/

/**
 * WordPress データベーステーブルの接頭辞
 *
 * それぞれにユニーク (一意) な接頭辞を与えることで一つのデータベースに複数の WordPress を
 * インストールすることができます。半角英数字と下線のみを使用してください。
 */
$table_prefix  = 'wp_';

/**
 * 開発者へ: WordPress デバッグモード
 *
 * この値を true にすると、開発中に注意 (notice) を表示します。
 * テーマおよびプラグインの開発者には、その開発環境においてこの WP_DEBUG を使用することを強く推奨します。
 *
 * その他のデバッグに利用できる定数については Codex をご覧ください。
 *
 * @link http://wpdocs.osdn.jp/WordPress%E3%81%A7%E3%81%AE%E3%83%87%E3%83%90%E3%83%83%E3%82%B0
 */
define('WP_DEBUG', false);

/* 編集が必要なのはここまでです ! WordPress でブログをお楽しみください。 */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
