// config.js 所有内容在这里，后台可视化修改
window.SITE_CONFIG = {
  base: {
    title: "XX装饰 | 汕头本地装修设计",
    tel: "138XXXX1234",
    wx: "decorate001",
    address: "广东省汕头市龙湖区XXX",
    notice: "免费上门量房 · 免费出初步方案"
  },
  swiper: [
    {title:"新房整装｜一站式装修，省心交付", img:"https://picsum.photos/id/1048/750/400"},
    {title:"旧房改造｜老房翻新，焕新居住空间", img:"https://picsum.photos/id/1060/750/400"},
    {title:"商铺工装｜门店办公室商业空间设计施工", img:"https://picsum.photos/id/1059/750/400"}
  ],
  service: [
    {icon:"🏠", name:"新房整装", desc:"设计+主材+施工+软装一站式服务"},
    {icon:"🛠️", name:"旧房翻新", desc:"局部改造、全屋翻新、水电改造"},
    {icon:"🏪", name:"商业工装", desc:"门店、办公室、餐饮店设计施工"},
    {icon:"🚿", name:"局部改造", desc:"阳台、卫生间、厨房专项改造"}
  ],
  advantage: [
    "本地施工团队，不转包",
    "透明报价，无隐形增项",
    "全程工地实拍，实时跟进",
    "售后质保，快速响应"
  ],
  cases: [
    {id:1, name:"现代简约三房", area:"115㎡", tag:"新房整装", style:"现代简约", img:"https://picsum.photos/id/1018/600/400", desc:"刚需自住，简洁通透，收纳拉满"},
    {id:2, name:"奶油风两房", area:"89㎡", tag:"新房整装", style:"奶油风", img:"https://picsum.photos/id/1019/600/400", desc:"柔和暖调，温馨治愈居家"},
    {id:3, name:"老房厨卫翻新", area:"72㎡", tag:"旧房改造", style:"实用改造", img:"https://picsum.photos/id/1021/600/400", desc:"水电全改，厨卫焕新"},
    {id:4, name:"临街奶茶店", area:"45㎡", tag:"商铺工装", style:"网红简约", img:"https://picsum.photos/id/1031/600/400", desc:"商业门店设计+落地施工"}
  ],
  packages: [
    {
      name:"基础简装套餐",
      price:"699元/㎡起",
      tip:"适合出租房基础装修",
      include:["基础水电改造","墙地面找平铺贴","基础乳胶漆","简易吊顶"],
      exclude:["全屋定制柜子","门窗更换","拆改大工程","软装家具"]
    },
    {
      name:"全屋整装套餐",
      price:"1099元/㎡起",
      tip:"自住刚需优选",
      include:["全套设计方案","品牌主材","基础施工","厨卫基础配套","工地巡检"],
      exclude:["个性化造型、大型拆改、定制柜升级"]
    },
    {
      name:"旧房翻新套餐",
      price:"899元/㎡起",
      tip:"老房局部/全屋翻新",
      include:["拆除清运","水电重做","墙地翻新","厨卫改造"],
      exclude:["全屋家具家电、门窗换新"]
    }
  ]
}

// 本地存储读写封装
window.Store = {
  save(){
    localStorage.setItem("decorateConfig", JSON.stringify(window.SITE_CONFIG))
  },
  load(){
    const raw = localStorage.getItem("decorateConfig")
    if(raw){
      try{
        window.SITE_CONFIG = JSON.parse(raw)
      }catch(e){}
    }
  }
  reset(){
    localStorage.removeItem("decorateConfig")
    location.reload()
  }
}
Store.load()
