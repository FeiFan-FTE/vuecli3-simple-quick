const COMMON = window.location.protocol + "//" + window.location.hostname
console.log(COMMON)

const subSiteUrl = (subSite) => window.location.protocol + '//' + subSite + '.' + window.location.hostname

const wsSiteUrl = (subSite) => 'ws' + window.location.protocol.slice(4) +
    '//' + subSite + '.' + window.location.hostname

const CENTER_URL = subSiteUrl('pro') //登录
const BANNER_URL = subSiteUrl('setting') //登录
const LOGIN_URL = subSiteUrl('login') //课程
const COURSE_URL = subSiteUrl('course') //用户
const USER_URL = subSiteUrl('user') //资讯
const ARTICLE_URL = subSiteUrl('article') //工具
const TOOL_URL = subSiteUrl('tool') //实验
const LAB_URL = subSiteUrl('lab') //竞赛
const GAME_URL = subSiteUrl('game') //专题
const SPECIAL_URL = subSiteUrl('special') //实训
const TRAINING_URL = subSiteUrl('training') //个人成长
const GROWTH_URL = subSiteUrl('user') //考试
const EXAM_URL = subSiteUrl('exam') //班级
const CLASSROOM_URL = subSiteUrl('classroom')

const FILE_URL = COMMON + '/data' //视频地址
const VIDEO_URL = COMMON + '/hls/file/' //socket
const WEBSOCKET_URL = wsSiteUrl('target')
const SCREENSOCKET_URL = wsSiteUrl('screen')
const VERSION = 'v1.0-01-20200312-0-dev'

const HEAD_TITLE = '穿山甲实验室'
const COPYRIGHT = 'www.uenit.cn'
const BEI_AN = '浙ICP备15025374号-4'

var _hmt = _hmt || [];
(function () {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?8b80e8a33f4119185301250c08dda2c8";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
})();