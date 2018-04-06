(function($){
  $(window).on('load', function() {
    (function(d,b,w){
      var q = d.createElement('div');
      q.id = "sakura";

      let petalCount;
      let fallIntervalMsec = 60;
      if ((navigator.userAgent.indexOf('iPhone') > 0 && navigator.userAgent.indexOf('iPad') == -1) || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
        petalCount = 50;
      } else {
        petalCount = 90;
      }
      const petal_horizontal_shake_length = (Math.random() - 0.5) * 50;
      let fall_length = window.document.documentElement.scrollHeight;
      if(fall_length > 3000){
        fall_length = 3000;
      }

      let htmlCode = '<style>'+
      'html,body{overflow-x:hidden;}'+
      '.hana{'+
      'position:absolute;height:0;width:0;'+
      'border: 10px solid pink;'+
      'border-radius: 15px;'+
      'border-top-right-radius: 0;'+
      'border-bottom-left-radius: 0;'+
      '}'+
      '.hana::after{'+
      'content:"";display:block;position:absolute;top:-7px;left:-7px;height:0;width:0;'+
      'border: 10px solid pink;'+
      'border-radius: 15px;'+
      'border-top-right-radius: 0;'+
      'border-bottom-left-radius: 0;'+
      '-webkit-transform: rotate(15deg);-ms-transform: rotate(15deg);transform: rotate(15deg);'+
      '}'+
      '.hana_wrapper{'+
      'position:absolute;height:0;width:0;'+
      '}'+

      '.t1{border-color:#fff3f5;}'+
      '.t2{border-color:#ffe2e7;}'+
      '.t3{border-color:#ffd1d9;}'+
      '.t4{border-color:#ffc0cb;}'+
      '.t5{border-color:#ffafbd;}'+
      '.t6{border-color:#ffafbd;}'+
      '.t1::after{border-color:#fff3f5;}'+
      '.t2::after{border-color:#ffe2e7;}'+
      '.t3::after{border-color:#ffd1d9;}'+
      '.t4::after{border-color:#ffc0cb;}'+
      '.t5::after{border-color:#ffafbd;}'+
      '.t6::after{border-color:#ffafbd;}';

      htmlCode = htmlCode +
        '.y1{-webkit-animation:v1 10s infinite;animation:v1 10s infinite;}'+
        '.y2{-webkit-animation:v2 10s ease-in-out infinite;animation:v2 10s ease-in-out infinite;}'+
        '.y3{-webkit-animation:v3 9s infinite;animation:v3 9s infinite;}'+
        '.y4{-webkit-animation:v4 9s ease-in-out infinite;animation:v4 9s ease-in-out infinite;}'+
        '.y5{-webkit-animation:v5 8s infinite;animation:v5 8s infinite;}'+
        '.y6{-webkit-animation:v6 8s ease-in-out infinite;animation:v6 8s ease-in-out infinite;}'+
        '@-webkit-keyframes v1{'+
          'from{-webkit-transform: rotate(0deg) scale(1);}'+
          '50%{-webkit-transform: rotate(270deg) scale(1);}'+
          'to{-webkit-transform: rotate(1deg) scale(1);}'+
        '}'+
        '@-webkit-keyframes v2{'+
          'from{-webkit-transform: rotate(-90deg) scale(.9);}'+
          '50%{-webkit-transform: rotate(-360deg) scale(.9);}'+
          'to{-webkit-transform: rotate(-89deg) scale(.9);}'+
        '}'+
        '@-webkit-keyframes v3{'+
          'from{-webkit-transform: rotate(30deg) scale(.8);}'+
          '50%{-webkit-transform: rotate(300deg) scale(.8);}'+
          'to{-webkit-transform: rotate(29deg) scale(.8);}'+
        '}'+
        '@-webkit-keyframes v4{'+
          'from{-webkit-transform: rotate(-120deg) scale(.7);}'+
          '50%{-webkit-transform: rotate(-390deg) scale(.7);}'+
          'to{-webkit-transform: rotate(-119deg) scale(.7);}'+
        '}'+
        '@-webkit-keyframes v5{'+
          'from{-webkit-transform: rotate(60deg) scale(.6);}'+
          '50%{-webkit-transform: rotate(330deg) scale(.6);}'+
          'to{-webkit-transform: rotate(59deg) scale(.6);}'+
        '}'+
        '@-webkit-keyframes v6{'+
          'from{-webkit-transform: rotate(-150deg) scale(.5);}'+
          '50%{-webkit-transform: rotate(-420deg) scale(.5);}'+
          'to{-webkit-transform: rotate(-149deg) scale(.5);}'+
        '}'+
        '@keyframes v1{'+
          'from{transform: rotate(0deg) scale(1);}'+
          '50%{transform: rotate(270deg) scale(1);}'+
          'to{transform: rotate(1deg) scale(1);}'+
        '}'+
        '@keyframes v2{'+
          'from{transform: rotate(-90deg) scale(.9);}'+
          '50%{transform: rotate(-360deg) scale(.9);}'+
          'to{transform: rotate(-89deg) scale(.9);}'+
        '}'+
        '@keyframes v3{'+
          'from{transform: rotate(30deg) scale(.8);}'+
          '50%{transform: rotate(300deg) scale(.8);}'+
          'to{transform: rotate(29deg) scale(.8);}'+
        '}'+
        '@keyframes v4{'+
          'from{transform: rotate(-120deg) scale(.7);}'+
          '50%{transform: rotate(-390deg) scale(.7);}'+
          'to{transform: rotate(-119deg) scale(.7);}'+
        '}'+
        '@keyframes v5{'+
          'from{transform: rotate(60deg) scale(.6);}'+
          '50%{transform: rotate(330deg) scale(.6);}'+
          'to{transform: rotate(59deg) scale(.6);}'+
        '}'+
        '@keyframes v6{'+
          'from{transform: rotate(-150deg) scale(.5);}'+
          '50%{transform: rotate(-420deg) scale(.5);}'+
          'to{transform: rotate(-149deg) scale(.5);}'+
        '}'+
        '.fall_1{-webkit-animation:kf_petalFall 20s linear infinite;animation:kf_petalFall 20s linear infinite;}'+
        '.fall_2{-webkit-animation:kf_petalFall 25s linear infinite;animation:kf_petalFall 25s linear infinite;}'+
        '.fall_3{-webkit-animation:kf_petalFall 30s linear infinite;animation:kf_petalFall 30s linear infinite;}'+
        '.fall_4{-webkit-animation:kf_petalFall 35s linear infinite;animation:kf_petalFall 35s linear infinite;}'+
        '.fall_5{-webkit-animation:kf_petalFall 40s linear infinite;animation:kf_petalFall 40s linear infinite;}'+
        '.fall_6{-webkit-animation:kf_petalFall 50s linear infinite;animation:kf_petalFall 50s linear infinite;}'+
        '@keyframes kf_petalFall {'+
          'from {transform: translateY(0px);opacity: 1;}'+
          '90% {opacity: 1;}'+
          `to {transform: translateY(${fall_length}px); opacity: 0;} ` +
        '}'+
        '.horizontalshake_1{-webkit-animation:kf_petalHorizontalShake 1s ease-in-out infinite alternate; animation:kf_petalHorizontalShake 1s ease-in-out infinite alternate;}'+
        '.horizontalshake_2{-webkit-animation:kf_petalHorizontalShake 1.5s ease-in-out infinite alternate; animation:kf_petalHorizontalShake 1.5s ease-in-out infinite alternate;}'+
        '.horizontalshake_3{-webkit-animation:kf_petalHorizontalShake 2s ease-in-out infinite alternate; animation:kf_petalHorizontalShake 2s ease-in-out infinite alternate;}'+
        '.horizontalshake_4{-webkit-animation:kf_petalHorizontalShake 2.5s ease-in-out infinite alternate; animation:kf_petalHorizontalShake 2.5s ease-in-out infinite alternate;}'+
        '.horizontalshake_5{-webkit-animation:kf_petalHorizontalShake 3s ease-in-out infinite alternate; animation:kf_petalHorizontalShake 3s ease-in-out infinite alternate;}'+
        '.horizontalshake_6{-webkit-animation:kf_petalHorizontalShake 3.5s ease-in-out-in-out infinite alternate; animation:kf_petalHorizontalShake 3.5s ease-in-out infinite alternate;}'+
        '@keyframes kf_petalHorizontalShake {'+
          `from {transform: translateX(-${petal_horizontal_shake_length}px);}` +
          `to {transform: translateX(${petal_horizontal_shake_length}px);}` +
        '};';

      htmlCode += '</style>';

      q.innerHTML += htmlCode;
      b.appendChild(q);

      const z = 9999;
      for(var i=0;i<petalCount;i++){
        let m_wrapper = d.createElement('div');
        m_wrapper.setAttribute('style','z-index:'+(z+i)+';top:'+(Math.random()*-500)+'px;left:'+(Math.random()*w.innerWidth)+'px;');
        let wrapper_class = 'hana_wrapper fall_' + (Math.floor(Math.random()*6)+1);
        m_wrapper.setAttribute('class', wrapper_class);

        let m_wrapper_2 = d.createElement('div');
        let wrapper_class_2 = 'hana_wrapper horizontalshake_' + (Math.floor(Math.random()*6)+1);
        m_wrapper_2.setAttribute('class', wrapper_class_2);

        var m = d.createElement('div');
        m.id = 'hanabira'+i;
        var clss = 'hana t'+(Math.floor(Math.random()*6)+1)+' y'+(Math.floor(Math.random()*6)+1);
        m.setAttribute('class',clss);

        m_wrapper_2.appendChild(m);
        m_wrapper.appendChild(m_wrapper_2);
        q.appendChild(m_wrapper);
      }
    })(window.document,window.document.body,window);
  });
})(jQuery);

