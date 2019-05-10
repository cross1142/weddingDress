var picListEl = document.querySelector('.banner-center .banner-pic .pic-list');
var pics = picListEl.children;
var bannerPicEl = document.querySelector('.banner .banner-center .banner-pic');
var imgs = ['img/dress.jpg', 'img/dress2.jpg', 'img/dress.jpg'];
changePic();
/**
 * 点击切换图片
 */
function changePic() {
    for (var i = 0; i < pics.length; i++) {
        pics[i].index = i;
        var index = pics[i].index
        pics[index].onclick = function() {
            // console.log(this.index);
            for (var j = 0; j < pics.length; j++) {
                pics[j].classList.remove('active');
            }
            this.classList.add('active');
            console.log(this.index);
            var newUrl = $(this).find('img').attr('src');
            $('.banner-pic').css('background', 'url(' + imgs[this.index] + ') no-repeat center');
            $('.banner-pic').css('backgroundSize', 'cover');
        }
    }
}