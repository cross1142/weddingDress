initHeader();
commonFooter();
headerClick();
slidClick();
/**
 * 小屏头部导航
 * */
function headerClick() {
    $('.header-doots').click(function() {
        $('.nav-text').toggleClass('active');
    })
}
/**
 * 页面公共头部
 */
function initHeader() {
    $('.banner').prepend($(`    <div class="header">
    <div class="header-center">
        <div class="logo">
            <a href="javascript:;"><img src="img/logo.jpg" alt=""></a>
        </div>
        <div class="header-nav">
            <ul class="nav-list">
                <li class="homepage change-page"><a class = "change-page-a" href="file:///D:/web/14-psd/Wedding%20dress/homePage.html">首页</a></li>
                <li class = "change-page"><a class = "change-page-a" href="file:///D:/web/14-psd/Wedding%20dress/WeddingDress.html">婚纱礼服</a></li>
                <li class = "change-page"><a class = "change-page-a" href="file:///D:/web/14-psd/Wedding%20dress/jewelry.html">珠宝配饰</a></li>
                <li class = "change-page"><a class = "change-page-a" href="file:///D:/web/14-psd/Wedding%20dress/last-activites.html">最新活动</a></li>
                <li class = "about-us-li change-page"><a class = "change-page-a" href="file:///D:/web/14-psd/Wedding%20dress/about-us.html">关于我们</a>
                <div class = "header-nav-list" >
                <ul>
                <li class = "designer nav-list-li"><a href="file:///D:/web/14-psd/Wedding%20dress/designer.html">设计师 <span class = "go-pro"></span></a></li>
                <li class =  "brand  nav-list-li"><a href="#">品牌故事<span class = "go-pro"><span></a></li>
                </ul>
                </div>
                </li>
            </ul>
        </div>
    </div>
</div>
<div class="header-m">
    <div class="header-m-logo">
        <a href="javascript:;">
            <img src="img/logo.jpg" alt="">
        </a>
    </div>
    <div class="header-m-nav">
        <ul class="header-doots">
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
    <div class="nav-text">
        <ul class="nav-text-list">
            <li><a href="file:///D:/web/14-psd/Wedding%20dress/homePage.html">首页</a></li>
            <li><a href="file:///D:/web/14-psd/Wedding%20dress/WeddingDress.html">婚纱礼服</a></li>
            <li><a href="file:///D:/web/14-psd/Wedding%20dress/jewelry.html">珠宝配饰</a></li>
            <li><a href="file:///D:/web/14-psd/Wedding%20dress/last-activites.html">最新活动</a></li>
            <li><a href="file:///D:/web/14-psd/Wedding%20dress/about-us.html">关于我们</a></li>
            <li><a href="file:///D:/web/14-psd/Wedding%20dress/designer.html">设计师</a></li>
        </ul>
    </div>
</div>`))
}
/**
 * 下拉点击动画
 */
function slidClick() {
    $('.header .header-center .header-nav .about-us-li ').mouseenter(function() {
        $('.header .header-center .header-nav .about-us-li .header-nav-list').show('slow');
    })
    $('.header .header-center .header-nav .about-us-li ').mouseleave(function() {
        $('.header .header-center .header-nav .about-us-li .header-nav-list').hide('slow');
    })
}
/**
 * 页面公共底部
 */
function commonFooter() {
    $('.footer').append($(`      <div class="contact-us">
    <div class="contact-center">
        <div class="number">
            <p class="p1">网站备案号：豫ICP备110121210号</p>
            <p class="p2">增值电信业务经营许可证号：<a href="javascript:;">豫B2-201000333</a></p>
        </div>
        <div class="contact-say">
            <ul>
                <li>@2018 VERONICA</li>
                <li>联系我们</li>
                <li>假如我们</li>
            </ul>
        </div>
    </div>
</div>
<div class="contact-us-m">
    <ul class="contact-say">
        <li>@2018 VERONICA</li>
        <li>联系我们</li>
        <li>假如我们</li>
    </ul>
    <ul class="waring">
        <li>网站备案号：豫ICP备110121210号</li>
        <li>增值电信业务经营许可证号：<a href="javascript:;">豫B2-201000333</a></li>
    </ul>
</div>`))
}