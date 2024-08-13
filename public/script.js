/*
* Author:  Inaline Information Technology Ltd.
* Version: 1.0.0
* Guthub: https://inaline.github.io
* Open source software, free for everyone to use, please mark the original author's name and organization.
*/


//定义一些公共的变量
var titles = ["Inaline的个人主页","Inaline Welcomes you","凌云之志立于氤，至死不渝中国心"]; //标题列表
var name = "Inaline"; //用户名
var head = "http://q1.qlogo.cn/g?b=qq&nk=2291374026&s=640"; //头像的路径或者网址
var sgin = "凌云之志立于氤，至死不渝中国心!"; //个性签名
var introduction = ""; //个人简介
var tags = ["未成年","小男娘"]; //个人标签
var SetupTime = new Date(2024, 7, 13, 10, 00, 00); //建站日期
var record = "陕ICP备 1145141919810"; //网站备案号
var pages = [
  {
    "icon": "mdi-home",
    "title": "主页",
    "url": "/pages/index.html",
    "icon_color": "#FD6A62"
  },{
    "icon": "mdi-account",
    "title": "个人资料",
    "url": "/pages/personal_data.html",
    "icon_color": "#FD6A62"
  }
]; //页面列表


var currentTitleIndex = 0;

function changeTitle() {
    document.title = titles[currentTitleIndex];
    currentTitleIndex = (currentTitleIndex + 1) % titles.length;
}

window.addEventListener('load', function() {
    const loadingDiv = document.getElementById('loading');
    loadingDiv.style.display = 'none';
    
    changeTitle()
    setInterval(changeTitle, 2500);
});


$(document).ready(function() {
  var pages = [
    {
      "icon": "mdi-home",
      "title": "主页",
      "url": "/pages/index.html",
      "icon_color": "#FD6A62"
    },
    {
      "icon": "mdi-account",
      "title": "个人资料",
      "url": "/pages/personal_data.html",
      "icon_color": "#FD6A62"
    }
  ];

  function createItemHtml(index, page) {
    var html = `
      <div class="item${index === 0 ? ' active' : ''}" onclick="ChangePage(${index})">
        <div class="icon_wrapper" style="background-color: ${page.icon_color}">
          <i class="icon mdi ${page.icon}"></i>
        </div>
        <span>${page.title}</span>
      </div>
    `;
    return html;
  }

  // 遍历 pages 数组
  $.each(pages, function(index, page) {
    var itemHtml = createItemHtml(index, page);
    $('.page_list').append(itemHtml);
  });

});

function ChangePage(num) {
  var icon = pages[num].icon;
  var title = pages[num].title;
  var url = pages[num].url;

  if ($(window).width() <= 768) {
    $('.wrapper').animate({
      left: '-100vw'
    }, 500);
    $('.title_bar .title').text(title);
    $('#page_content').attr('src', url);
  } else {
    $('#page_content').attr('src', url);

    // 移除所有 .item 的 active 类
    $('.page_list .item').removeClass('active');

    // 给对应的 .item 添加 active 类
    $('.page_list .item:eq(' + num + ')').addClass('active');
  }
}


function formatTimeDifference(date) {
  const now = new Date();
  const diff = now - date;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return `${record} | 本站已安全运行${days}天${hours}小时${minutes}分钟${seconds}秒`;
}

$(document).ready(function() {
  function updateTime() {
    var timeDiff = formatTimeDifference(SetupTime);
    $('#main .bottom_text').text(timeDiff);
  }

  // 初始更新
  updateTime();

  // 每秒钟更新一次
  setInterval(updateTime, 1000);
  
  $(".back").click(function () {
    $('.wrapper').animate({
      left: '0'
    }, 500);
  })
});



//现在，将公共变量写入html页面
var $div = $('.head_image');
$div.css('background-image', `url('${head}')`);
$('.info_m .name').text(name);
$('.info .sgin').text(sgin);
$(document).ready(function() {

  // 遍历 tags 数组
  $.each(tags, function(index, tag) {
    // 创建 span 元素的 HTML 字符串
    var tagHtml = `<span class="tag">${tag}</span>`;

    // 追加到 .info_m 元素中
    $('.info_m').append(tagHtml);
  });
});
