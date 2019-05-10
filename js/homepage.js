var newFeaturesNav = document.querySelector('.banner-center .new-features .new-features-nav');
var asideTapEl = document.querySelector('.aside-tap');
var timer = null;
var asideH = asideTapEl.offsetTop;
var navListEl = newFeaturesNav.children;
changePic();
phoneClick();
goTop();
/**
 * 点击切换的封装
 */
function changePic() {
    for (var i = 0; i < navListEl.length; i++) {
        navListEl[i].onclick = (function(a) {
            return function() {
                console.log(a);
                for (var j = 0; j < navListEl.length; j++) {
                    navListEl[j].classList.remove('active');
                }
                navListEl[a].classList.add('active');
            }
        })(i);
    }

}
//缓动动画
function animate(el, target) {
    clearInterval(el.timer);
    el.timer = setInterval(function() {
        var leader = el.offsetTop;
        var step = (target - leader) / 10;
        if (Math.abs(step) < 1) {
            step = step > 0 ? 1 : -1;
        }
        leader += step;
        el.style.top = leader + 'px';
        //停止条件
        if (target == leader) {
            el.style.top = target + 'px';
            clearInterval(el.timer);
        }

    }, 17)
}
/**
 * 滚动跟随
 */
window.onscroll = function() {
        //卷进去的高度
        var count = document.documentElement.scrollTop;
        var target = count + asideH;
        animate(asideTapEl, target);
    }
    /**
     * 联系方式点击
     */
function phoneClick() {
    $('.aside-tap .phone').click(function() {
        $('.aside-tap .phone .phone-number').slideToggle('slow');
    });

}

/**
 * goTop
 * */
function goTop() {
    $(' .go-top').click(function() {
        $('body,html').animate({
            scrollTop: '0'
        }, 1000, function() {
            // alert('结束...');
            return;
        });
    });
}