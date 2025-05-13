//定义一些公共的变量
var titles = ["Inaline的个人主页","Inaline Welcomes you","凌云之志立于氤，至死不渝中国心"]; //标题列表
var name = "Inaline"; //用户名(最好不要用实名)
var head = "http://q1.qlogo.cn/g?b=qq&nk=2291374026&s=640"; //头像的路径或者网址
var sgin = "凌云之志立于氤，至死不渝中国心!"; //个性签名
var introduction = "　　我热衷于网页开发、安卓开发，并且正在构建'凌云阁'小说。我喜欢探索新技术，特别是开源项目。我还擅长使用 jQuery 和 AJAX 进行交互式网站设计。最近，我也开始关注域名管理和 DNS 配置，因为我刚刚注册了自己的域名 <a href=\"http://inaline.us.kg/\">inaline.us.kg</a> 运营我的互联网服务。"; //个人简介
var info_n = "一名热爱编程,喜欢二次元的在校学生"; //更剪短的简介，大概就一句话介绍自己，也可以叫小标题
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
  },{
    "icon": "mdi-book-minus",
    "title": "教育经历",
    "url": "/pages/educational_experience.html",
    "icon_color": "#FD6A62"
  },{
    "icon": "mdi-clock",
    "title": "生辰时钟",
    "url": "/pages/birthday_clock.html",
    "icon_color": "#FD6A62"
  },{
    "icon": "mdi-code-braces",
    "title": "我的项目",
    "url": "/pages/project.html",
    "icon_color": "#FD6A62"
  },{
    "icon": "mdi-contact-mail",
    "title": "联系方式",
    "url": "/pages/contact.html",
    "icon_color": "#FD6A62"
  },{
    "icon": "mdi-star-outline",
    "title": "技术栈",
    "url": "/pages/technology_stack.html",
    "icon_color": "#FD6A62"
  },{
    "icon": "mdi-image",
    "title": "我的图集",
    "url": "/pages/pictures.html",
    "icon_color": "#FD6A62"
  }
]; //页面列表
// 生日日期
var birthday = new Date(2011, 9, 10, 00, 00, 00); // 注意月份是从0开始的，所以9月应该是8

// 当前日期
var now = new Date();

function calculateAge(birthday, now) {
  var birthYear = birthday.getFullYear();
  var birthMonth = birthday.getMonth();
  var birthDay = birthday.getDate();
  
  var currentYear = now.getFullYear();
  var currentMonth = now.getMonth();
  var currentDay = now.getDate();
  
  var age = currentYear - birthYear;

  // 如果当前月份小于出生月份，或者当前月份等于出生月份但当前日期小于出生日期，则年龄减一
  if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {
    age--;
  }

  return age;
}

var age = calculateAge(birthday, now);
var information = [
  {
    "name": "姓名",
    "value": "Inaline(昵称)"
  },{
    "name": "性别",
    "value": "男"
  },{
    "name": "年龄",
    "value": age,
  },{
    "name": "生日",
    "value": "2011-10-10"
  },{
    "name": "爱好",
    "value": "编程,二次元,女装COS,谈恋爱,小说"
  },{
    "name": "住址",
    "value": "中国·陕西·西安"
  },{
    "name": "手机",
    "value": "+86 132 **** 3218"
  },{
    "name": "邮箱",
    "value": "InalineNET@outlook.com"
  },{
    "name": "单位",
    "value": "氤纳琳信息技术工作室"
  }
]; //个人资料
var educate_introduction = "";//受教育的简介
var educate_info = [
  {
    "school": "玉山镇前程小学",
    "school_grade": "寄宿制小学",
    "school_introduction": "蓝田县玉山镇前程小学学前班位于陕西西安市蓝田县。是一所公办的小学。更多详情请看官网介绍。",
    "school_url": "https://hdpx.webtrn.cn/entity/first/schoolMain_toMain.action?schoolId=ff8080814941b47a014947f278470b20",
    "start_time": "2017年末",
    "graduation_time": "2024年初",
    "recall": [
      {
        "title": "",
        "image": ["",""],
        "content": ""
      }
    ]
  },{
    "school": "蓝田县滋水初级中学",
    "school_grade": "寄宿制初级中学",
    "school_introduction": "滋水初级中学以“润泽学生 涵养教师 提升学校 造福社会”为办学理念，将学生的心理健康教育和教育教学有机结合，努力营造温馨、和谐、向善、向美的育人环境。",
    "school_url": "https://zishuischool.com",
    "start_time": "2017年末",
    "graduation_time": "2024年初",
    "recall": [
      {
        "title": "",
        "image": ["",""],
        "content": ""
      }
    ]
  }
]; //教育经历
var project = [
  {
    "name": "凌云阁 - Inaline Novel",
    "introduction": "凌云阁(Inaline Novel)是一个精心打造的在线小说阅读平台，它不仅支持网页浏览，还有专门的Android客户端。通过简洁易用的界面，用户可以轻松沉浸在精彩的故事世界中。凌云阁采用PHP开发，拥有丰富的功能和良好的用户体验。此项目预计开源到GitHub，欢迎贡献者加入。",
    "category": ["php", "android"],
    "startDate": "2024-7-01",
    "status": "开发中",
    "demo": "http://inaline.us.kg/",
    "github": "https://github.com/Inaline/Inaline_Novel/"
  }
];//项目列表

var contact = [
  {
    "icon": "mdi-email",
    "icon_color": "#FD6A62",
    "name": "电子邮箱",
    "image": "",
    "text": "电子邮箱地址: <a href=\"mailto:InalineNET@outlook.com\" target=\"_blank\">InalineNET@outlook.com</a>"
  },
  {
    "icon": "mdi-qqchat",
    "icon_color": "#FD6A62",
    "name": "QQ",
    "image": "/image/qq.png",
    "text": "QQ号: <a href=\"mqq://card/show_pslcard?src_type=internal&version=1&uin=2291374026&card_type=person&source=sharecard\" target=\"_blank\">2291374026</a>"
  }
]; // 联系方式列表

var technology_stack = [
  {
    "name": "HTML5",
    "extent": "9"
  },{
    "name": "CSS3",
    "extent": "7"
  },{
    "name": "JS",
    "extent": "6"
  },{
    "name": "PHP",
    "extent": "8"
  },{
    "name": "Java",
    "extent": "3"
  },{
    "name": "Python",
    "extent": "8"
  },{
    "name": "ChatGPT",
    "extent": "10"
  }
]

var images = [
  {
    "name": "女装COS",
    "cover": "/image/1.png",
    "content": [
      {
        "text": "关于图片的一点介绍",
        "url": "/image/1.png"
      },{
        "text": "关于图片的一点介绍",
        "url": "/image/1.png"
      },
    ]
  },{
    "name": "我画的画",
    "cover": "/image/2.png",
    "content": [
      {
        "text": "关于图片的一点介绍",
        "url": "/image/2.png"
      },{
        "text": "关于图片的一点介绍",
        "url": "/image/2.png"
      },
    ]
  }
]; //图集
