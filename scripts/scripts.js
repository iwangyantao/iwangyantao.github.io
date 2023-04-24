window.onload=function(){

// 判断操作系统
var u = navigator.userAgent, app = navigator.appVersion;
var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1;
var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);

// Android设备
if(isAndroid){
    document.getElementById('bg').innerHTML = '<p class="desc">Android设备不支持跳转，您可以点击下方按钮，复制红包码，再打开支付宝App，粘贴至搜索框，再进行领取红包！</p><h2 id="hbm">824569235</h2><button id="copy">一键复制</button><div class="androidimg"><img src="images/android.jpg" /></div>';

}

// IOS设备
if(isIOS){
    window.location = 'https://ulink.alipay.com/?scheme=alipays%3A%2F%2Fplatformapi%2Fstartapp%3FsaId%3D10000007%26clientVersion%3D3.7.0.0718%26qrcode%3Dhttps%253A%252F%252Frender.alipay.com%252Fp%252Fc%252Falipay-red-qrcode%252Fshared.html%253Fchannel%253Dsearch_pwd%2526shareId%253D2088502722382353%2526token%253D19613970koggrkxqz6x9y77nyb%2526campStr%253DkPPFvOxaCL3f85TiKss2wsBZgIjulHjG%2526sign%253DFa3GxuuYUoUP5ueA5H%2520HiURzSuwujfEL9Zl2YjaRVEY%253D%2526chInfo%253DDingtalk%2526c_stype%253Dsearch_pwd';
}

function hide(){
    $("#copytips .success").css("display","none");
}

// 一键复制
function copyArticle(event){
  const range = document.createRange();
  range.selectNode(document.getElementById('hbm'));
  const selection = window.getSelection();
  if(selection.rangeCount > 0) selection.removeAllRanges();
  selection.addRange(range);
  document.execCommand('copy');
  alert("已复制红包码，请打开支付宝App粘贴搜索！");
}

var obt = document.getElementById("copy");
obt.addEventListener('click', copyArticle, false);
}

