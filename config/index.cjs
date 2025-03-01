/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx6917519273bacf4c',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'c9dd0a18c2fed06bd778639968562999',

  PROVINCE: '北京',
  CITY: '北京',

  USERS: [
    {
      // 想要发送的人的名字
      name: '亲爱的！',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ow-cv5nRkpm0UC4SyTYQ1bRnrKbg',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'Zifb-0nqBHXzBAVpavo4hGxZ73VnHCAJYNaECZv7am8',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      //horoscopeDate: '02-26',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '生日', name: '宝贝', year: '2001', date: '02-26',
        },
        {
          type: '生日', name: '老公~', year: '2001', date: '05-31',
        },
        
        {
          type: '节日', name: '相爱纪念日', year: '2021', date: '03-06',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2021-03-06' },
        
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'zOfNJ7fvav_273YFHLvLUV3di8SjnAau_Db5HaHYZFQ',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: '',
    }
  ],

}

module.exports = USER_CONFIG

