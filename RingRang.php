<?php
/*
Plugin Name: RingRang Button Enabler
Description: This plugin allows for the use of one or more RingRang buttons / icons on any WordPress site. The RR button when placed on a WP site allows customers and friends alike to send a notification immediately to the button/icon owner via email, text message or stored in a database. The notifications contains the phone / text number and an optional 120 characters.
The get your RR button script(s) just go to www.ringrang.us and register. It’s free. Read the RingRang blog at www.ringrang.us/blog
Version: 1.0
Author: RingRang
Author URI: http://www.ringrang.us
*/
add_action('wp_head', 'install_js');
function install_js(){
  $js = file_get_contents('button.js', true);
  echo '<script type="text/javascript">'.$js.'</script>';
  }
?>