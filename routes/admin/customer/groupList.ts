import schema2component from "../../../utils/schema2component";
import "./group.scss"
const title = `<div class="wb100">
    <div  class="clAE">
        <span>首页</span>
        <span>/</span>
        <span >客户池</span>
        <span>/</span>
        <span class="cl34">客群管理</span>
    </div>
       <div class="disFlex mt-15 text-c cl34">
        <h2 class=" fs18 fw6">客群管理</h2>  
    </div>
</div>`
// <%= data.progress%>
const msg =`
    <div class="wb100">
        <div class="pull-left titleImg m-r m-t"></div>
        <div class="pull-left">  
            <div class="disFlex">
                <span class="cl-20  mr-15">用户名</span>
                <span class="cl-BE">2020/10/10 20:10</span>
            </div>
            <span class="bg9F wrapper-sm cl-ff inline r">
            <%= data.grade === "C" ? "哈哈哈" : "夕夕" %>
            </span>            
        </div>
    </div>
`

const msgRight =`
    <div class="wb100">
      <div class="pull-right titleImg  m-t"></div>
        <div class="pull-right m-r">  
            <div class="disFlex">
                <span class="cl-BE  mr-15">2020/10/10 20:10</span>
                <span class="cl-20">用户名</span>
            </div>
            <div class="text-r">
                <span class="bg0F wrapper-sm cl-ff inline r" style="max-width: 900px">
                三，慢点展现出你在哪下班美女壁纸小木虫门把手买不到按时到八十的八十多
                三，慢点展现出你在哪下班美女壁纸小木虫门把手买不到按时到八十的八十多
                三，慢点展现出你在哪下班美女壁纸小木虫门把手买不到按时到八十的八十多
                三，慢点展现出你在哪下班美女壁纸小木虫门把手买不到按时到八十的八十多
                三，慢点展现出你在哪下班美女壁纸小木虫门把手买不到按时到八十的八十多
                </span>
            </div>
                        
        </div>
      
    </div>
`

const friends = `
<div class="wb100 friends">
        <div class="pull-left titleImg m-r"></div>
        <div class="pull-left content">  
            <div>
                <p class="cl-20  mr-15 cl-0F">用户名</p>
                <div class="disFlex wb100">
                    <span>俺舍不得撒娇的空间和我去吧散步</span>
                    <div><span class="cl-CE" >2016/10/25 20:12</span><span>点赞</span></div>
                </div>
                <div class="m-t-sm"><img src=<%= data.image %> class="m-r" alt=""/></div>
            </div>
                    
        </div>
    </div>
`

const friendsRight = `
    <div class="wb100 friends">
      <div class="pull-right titleImg "></div>
        <div class="pull-right m-r content">  
             <div>
                <p class="cl-20  cl-0F text-r">用户名</p>
                <div class="disFlex wb100">
                    <div><span>点赞</span> <span class="cl-CE" >2016/10/25 20:12</span> </div>
                    <span>俺舍不得撒娇的空间和我去吧散步</span>
                </div>
                <div class="m-t-sm text-r"><img src=<%= data.image %> class="m-l" alt=""></div>
            </div>
            
        </div>
      
    </div>
`


const titleImg = [
    {
        img: "http://hiphotos.baidu.com/fex/%70%69%63/item/0d338744ebf81a4cff2f4cd6de2a6059252da694.jpg",
        id: "1",
        userName:"张三"
    },
    {
        img: "http://hiphotos.baidu.com/fex/%70%69%63/item/0d338744ebf81a4cff2f4cd6de2a6059252da694.jpg",
        id: "2",
        userName:"李四"
    },
    {
        img: "http://hiphotos.baidu.com/fex/%70%69%63/item/0d338744ebf81a4cff2f4cd6de2a6059252da694.jpg",
        id: "3",
        userName:"王麻子"
    },
    {
        img: "http://hiphotos.baidu.com/fex/%70%69%63/item/0d338744ebf81a4cff2f4cd6de2a6059252da694.jpg",
        id: "1",
        userName:"张三"
    },
    {
        img: "http://hiphotos.baidu.com/fex/%70%69%63/item/0d338744ebf81a4cff2f4cd6de2a6059252da694.jpg",
        id: "2",
        userName:"李四"
    },
    {
        img: "http://hiphotos.baidu.com/fex/%70%69%63/item/0d338744ebf81a4cff2f4cd6de2a6059252da694.jpg",
        id: "3",
        userName:"王麻子"
    },
    {
        img: "http://hiphotos.baidu.com/fex/%70%69%63/item/0d338744ebf81a4cff2f4cd6de2a6059252da694.jpg",
        id: "1",
        userName:"张三"
    },
    {
        img: "http://hiphotos.baidu.com/fex/%70%69%63/item/0d338744ebf81a4cff2f4cd6de2a6059252da694.jpg",
        id: "2",
        userName:"李四"
    },
    {
        img: "http://hiphotos.baidu.com/fex/%70%69%63/item/0d338744ebf81a4cff2f4cd6de2a6059252da694.jpg",
        id: "3",
        userName:"王麻子"
    },
    {
        img: "http://hiphotos.baidu.com/fex/%70%69%63/item/0d338744ebf81a4cff2f4cd6de2a6059252da694.jpg",
        id: "1",
        userName:"张三"
    },
    {
        img: "http://hiphotos.baidu.com/fex/%70%69%63/item/0d338744ebf81a4cff2f4cd6de2a6059252da694.jpg",
        id: "2",
        userName:"李四"
    },
    {
        img: "http://hiphotos.baidu.com/fex/%70%69%63/item/0d338744ebf81a4cff2f4cd6de2a6059252da694.jpg",
        id: "3",
        userName:"王麻子"
    },
    {
        img: "http://hiphotos.baidu.com/fex/%70%69%63/item/0d338744ebf81a4cff2f4cd6de2a6059252da694.jpg",
        id: "1",
        userName:"张三"
    },
    {
        img: "http://hiphotos.baidu.com/fex/%70%69%63/item/0d338744ebf81a4cff2f4cd6de2a6059252da694.jpg",
        id: "2",
        userName:"李四"
    },
    {
        img: "http://hiphotos.baidu.com/fex/%70%69%63/item/0d338744ebf81a4cff2f4cd6de2a6059252da694.jpg",
        id: "3",
        userName:"王麻子"
    },
    {
        img: "http://hiphotos.baidu.com/fex/%70%69%63/item/0d338744ebf81a4cff2f4cd6de2a6059252da694.jpg",
        id: "1",
        userName:"张三"
    },
    {
        img: "http://hiphotos.baidu.com/fex/%70%69%63/item/0d338744ebf81a4cff2f4cd6de2a6059252da694.jpg",
        id: "2",
        userName:"李四"
    },
    {
        img: "http://hiphotos.baidu.com/fex/%70%69%63/item/0d338744ebf81a4cff2f4cd6de2a6059252da694.jpg",
        id: "3",
        userName:"王麻子"
    },
    {
        img: "http://hiphotos.baidu.com/fex/%70%69%63/item/0d338744ebf81a4cff2f4cd6de2a6059252da694.jpg",
        id: "1",
        userName:"张三"
    },
    {
        img: "http://hiphotos.baidu.com/fex/%70%69%63/item/0d338744ebf81a4cff2f4cd6de2a6059252da694.jpg",
        id: "2",
        userName:"李四"
    },
    {
        img: "http://hiphotos.baidu.com/fex/%70%69%63/item/0d338744ebf81a4cff2f4cd6de2a6059252da694.jpg",
        id: "3",
        userName:"王麻子"
    },
    {
        img: "http://hiphotos.baidu.com/fex/%70%69%63/item/0d338744ebf81a4cff2f4cd6de2a6059252da694.jpg",
        id: "1",
        userName:"张三"
    },
    {
        img: "http://hiphotos.baidu.com/fex/%70%69%63/item/0d338744ebf81a4cff2f4cd6de2a6059252da694.jpg",
        id: "2",
        userName:"李四"
    },
    {
        img: "http://hiphotos.baidu.com/fex/%70%69%63/item/0d338744ebf81a4cff2f4cd6de2a6059252da694.jpg",
        id: "3",
        userName:"王麻子"
    },
    {
        img: "http://hiphotos.baidu.com/fex/%70%69%63/item/0d338744ebf81a4cff2f4cd6de2a6059252da694.jpg",
        id: "1",
        userName:"张三"
    },
    {
        img: "http://hiphotos.baidu.com/fex/%70%69%63/item/0d338744ebf81a4cff2f4cd6de2a6059252da694.jpg",
        id: "2",
        userName:"李四"
    },
    {
        img: "http://hiphotos.baidu.com/fex/%70%69%63/item/0d338744ebf81a4cff2f4cd6de2a6059252da694.jpg",
        id: "3",
        userName:"王麻子"
    },
    {
        img: "http://hiphotos.baidu.com/fex/%70%69%63/item/0d338744ebf81a4cff2f4cd6de2a6059252da694.jpg",
        id: "1",
        userName:"张三"
    },
    {
        img: "http://hiphotos.baidu.com/fex/%70%69%63/item/0d338744ebf81a4cff2f4cd6de2a6059252da694.jpg",
        id: "2",
        userName:"李四"
    },
    {
        img: "http://hiphotos.baidu.com/fex/%70%69%63/item/0d338744ebf81a4cff2f4cd6de2a6059252da694.jpg",
        id: "3",
        userName:"王麻子"
    },
    {
        img: "http://hiphotos.baidu.com/fex/%70%69%63/item/0d338744ebf81a4cff2f4cd6de2a6059252da694.jpg",
        id: "1",
        userName:"张三"
    },
    {
        img: "http://hiphotos.baidu.com/fex/%70%69%63/item/0d338744ebf81a4cff2f4cd6de2a6059252da694.jpg",
        id: "2",
        userName:"李四"
    },
    {
        img: "http://hiphotos.baidu.com/fex/%70%69%63/item/0d338744ebf81a4cff2f4cd6de2a6059252da694.jpg",
        id: "3",
        userName:"王麻子"
    },
    {
        img: "http://hiphotos.baidu.com/fex/%70%69%63/item/0d338744ebf81a4cff2f4cd6de2a6059252da694.jpg",
        id: "1",
        userName:"张三"
    },
    {
        img: "http://hiphotos.baidu.com/fex/%70%69%63/item/0d338744ebf81a4cff2f4cd6de2a6059252da694.jpg",
        id: "2",
        userName:"李四"
    },
    {
        img: "http://hiphotos.baidu.com/fex/%70%69%63/item/0d338744ebf81a4cff2f4cd6de2a6059252da694.jpg",
        id: "3",
        userName:"王麻子"
    },
    {
        img: "http://hiphotos.baidu.com/fex/%70%69%63/item/0d338744ebf81a4cff2f4cd6de2a6059252da694.jpg",
        id: "1",
        userName:"张三"
    },
    {
        img: "http://hiphotos.baidu.com/fex/%70%69%63/item/0d338744ebf81a4cff2f4cd6de2a6059252da694.jpg",
        id: "2",
        userName:"李四"
    },
    {
        img: "http://hiphotos.baidu.com/fex/%70%69%63/item/0d338744ebf81a4cff2f4cd6de2a6059252da694.jpg",
        id: "3",
        userName:"王麻子"
    },
    {
        img: "http://hiphotos.baidu.com/fex/%70%69%63/item/0d338744ebf81a4cff2f4cd6de2a6059252da694.jpg",
        id: "1",
        userName:"张三"
    },
    {
        img: "http://hiphotos.baidu.com/fex/%70%69%63/item/0d338744ebf81a4cff2f4cd6de2a6059252da694.jpg",
        id: "2",
        userName:"李四"
    },
    {
        img: "http://hiphotos.baidu.com/fex/%70%69%63/item/0d338744ebf81a4cff2f4cd6de2a6059252da694.jpg",
        id: "3",
        userName:"王麻子"
    },
    {
        img: "http://hiphotos.baidu.com/fex/%70%69%63/item/0d338744ebf81a4cff2f4cd6de2a6059252da694.jpg",
        id: "1",
        userName:"张三"
    },
    {
        img: "http://hiphotos.baidu.com/fex/%70%69%63/item/0d338744ebf81a4cff2f4cd6de2a6059252da694.jpg",
        id: "2",
        userName:"李四"
    },
    {
        img: "http://hiphotos.baidu.com/fex/%70%69%63/item/0d338744ebf81a4cff2f4cd6de2a6059252da694.jpg",
        id: "3",
        userName:"王麻子"
    },
    {
        img: "http://hiphotos.baidu.com/fex/%70%69%63/item/0d338744ebf81a4cff2f4cd6de2a6059252da694.jpg",
        id: "1",
        userName:"张三"
    },
    {
        img: "http://hiphotos.baidu.com/fex/%70%69%63/item/0d338744ebf81a4cff2f4cd6de2a6059252da694.jpg",
        id: "2",
        userName:"李四"
    },
    {
        img: "http://hiphotos.baidu.com/fex/%70%69%63/item/0d338744ebf81a4cff2f4cd6de2a6059252da694.jpg",
        id: "3",
        userName:"王麻子"
    },
    {
        img: "http://hiphotos.baidu.com/fex/%70%69%63/item/0d338744ebf81a4cff2f4cd6de2a6059252da694.jpg",
        id: "1",
        userName:"张三"
    },
    {
        img: "http://hiphotos.baidu.com/fex/%70%69%63/item/0d338744ebf81a4cff2f4cd6de2a6059252da694.jpg",
        id: "2",
        userName:"李四"
    },
    {
        img: "http://hiphotos.baidu.com/fex/%70%69%63/item/0d338744ebf81a4cff2f4cd6de2a6059252da694.jpg",
        id: "3",
        userName:"王麻子"
    },
    {
        img: "http://hiphotos.baidu.com/fex/%70%69%63/item/0d338744ebf81a4cff2f4cd6de2a6059252da694.jpg",
        id: "1",
        userName:"张三"
    },
    {
        img: "http://hiphotos.baidu.com/fex/%70%69%63/item/0d338744ebf81a4cff2f4cd6de2a6059252da694.jpg",
        id: "2",
        userName:"李四"
    },
    {
        img: "http://hiphotos.baidu.com/fex/%70%69%63/item/0d338744ebf81a4cff2f4cd6de2a6059252da694.jpg",
        id: "3",
        userName:"王麻子"
    },
    {
        img: "http://hiphotos.baidu.com/fex/%70%69%63/item/0d338744ebf81a4cff2f4cd6de2a6059252da694.jpg",
        id: "1",
        userName:"张三"
    },
    {
        img: "http://hiphotos.baidu.com/fex/%70%69%63/item/0d338744ebf81a4cff2f4cd6de2a6059252da694.jpg",
        id: "2",
        userName:"李四"
    },
    {
        img: "http://hiphotos.baidu.com/fex/%70%69%63/item/0d338744ebf81a4cff2f4cd6de2a6059252da694.jpg",
        id: "3",
        userName:"王麻子"
    },
    {
        img: "http://hiphotos.baidu.com/fex/%70%69%63/item/0d338744ebf81a4cff2f4cd6de2a6059252da694.jpg",
        id: "1",
        userName:"张三"
    },
    {
        img: "http://hiphotos.baidu.com/fex/%70%69%63/item/0d338744ebf81a4cff2f4cd6de2a6059252da694.jpg",
        id: "2",
        userName:"李四"
    },
    {
        img: "http://hiphotos.baidu.com/fex/%70%69%63/item/0d338744ebf81a4cff2f4cd6de2a6059252da694.jpg",
        id: "3",
        userName:"王麻子"
    },
    {
        img: "http://hiphotos.baidu.com/fex/%70%69%63/item/0d338744ebf81a4cff2f4cd6de2a6059252da694.jpg",
        id: "1",
        userName:"张三"
    },
    {
        img: "http://hiphotos.baidu.com/fex/%70%69%63/item/0d338744ebf81a4cff2f4cd6de2a6059252da694.jpg",
        id: "2",
        userName:"李四"
    },
    {
        img: "http://hiphotos.baidu.com/fex/%70%69%63/item/0d338744ebf81a4cff2f4cd6de2a6059252da694.jpg",
        id: "3",
        userName:"王麻子"
    },
    {
        img: "http://hiphotos.baidu.com/fex/%70%69%63/item/0d338744ebf81a4cff2f4cd6de2a6059252da694.jpg",
        id: "1",
        userName:"张三"
    },
    {
        img: "http://hiphotos.baidu.com/fex/%70%69%63/item/0d338744ebf81a4cff2f4cd6de2a6059252da694.jpg",
        id: "2",
        userName:"李四"
    },
    {
        img: "http://hiphotos.baidu.com/fex/%70%69%63/item/0d338744ebf81a4cff2f4cd6de2a6059252da694.jpg",
        id: "3",
        userName:"王麻子"
    },
    {
        img: "http://hiphotos.baidu.com/fex/%70%69%63/item/0d338744ebf81a4cff2f4cd6de2a6059252da694.jpg",
        id: "1",
        userName:"张三"
    },
    {
        img: "http://hiphotos.baidu.com/fex/%70%69%63/item/0d338744ebf81a4cff2f4cd6de2a6059252da694.jpg",
        id: "2",
        userName:"李四"
    },
    {
        img: "http://hiphotos.baidu.com/fex/%70%69%63/item/0d338744ebf81a4cff2f4cd6de2a6059252da694.jpg",
        id: "3",
        userName:"王麻子"
    },
    {
        img: "http://hiphotos.baidu.com/fex/%70%69%63/item/0d338744ebf81a4cff2f4cd6de2a6059252da694.jpg",
        id: "1",
        userName:"张三"
    },
    {
        img: "http://hiphotos.baidu.com/fex/%70%69%63/item/0d338744ebf81a4cff2f4cd6de2a6059252da694.jpg",
        id: "2",
        userName:"李四"
    },
    {
        img: "http://hiphotos.baidu.com/fex/%70%69%63/item/0d338744ebf81a4cff2f4cd6de2a6059252da694.jpg",
        id: "3",
        userName:"王麻子"
    }
]

const schema = {
    type: 'page',
    "data": {
        "text": "World!"
    },
    "initApi": "https://houtai.baidu.com/api/mock2/page/initData",
    body: [
        {
            "type": "card",
            "body": {

                "type": "tpl",
                className: "wb100",
                "tpl": title
            },
        },

        {
            type: "container",
            className: "bgff p20",
            body: [
                {
                    "type": "hbox",
                    "columns": [
                        {

                            type: "action",
                            label: "创建微信群",
                            level: "primary",
                            icon: "fa fa-plus",
                            "actionType": "dialog",
                            columnClassName: "wb50",
                            "dialog": {
                                "title": "创建微信群",
                                className: "newGroup",
                                closeOnEsc: true,
                                size:"lg",
                                "body": {
                                    type: "form",
                                    "mode": "horizontal",
                                    className: "w490 m-a",
                                    wrapWithPanel: false, // 去掉底部按钮
                                    title:"",
                                    controls: [
                                        {
                                            "name": "radios",
                                            "mode": "inline",
                                            "type": "radios",
                                            "label": "负责员工：",
                                            className: "radiosD",
                                            "options": [
                                                {
                                                    "label": "微信号归属员工",
                                                    "value": "a"
                                                },
                                                {
                                                    "label": "指定其他员工",
                                                    "value": "b"
                                                },
                                            ]
                                        },
                                        {
                                            "type": "text",
                                            "label": "",
                                            "name": "tttt",
                                            placeholder: "输入员工姓名指定其他员工",
                                            "visibleOn": 'this.radios == "b"'
                                        },
                                        {
                                            "type": "text",
                                            "label": "群名称：",
                                            "name": "ccc",
                                            placeholder: "企业微信"
                                        },
                                        {
                                            "type": "text",
                                            "label": "微信号：",
                                            "name": "ddd",
                                            placeholder: "请输入微信号"
                                        },
                                        {
                                            "type": "text",
                                            "label": "群备注：",
                                            "name": "remark",
                                            placeholder: "请输入群备注"
                                        },
                                        {
                                            "type": "text",
                                            "label": "群标签：",
                                            "name": "bq",
                                            placeholder: "请输入群标签"
                                        },
                                        {
                                            "type": "text",
                                            "label": "群分组：",
                                            "name": "fz",
                                            placeholder: "请输入群分组"
                                        },
                                        {
                                            "type": "text",
                                            "label": "群公告：",
                                            "name": "gg",
                                            placeholder: "请输入群公告"
                                        },
                                        {
                                            type: "button",
                                            label: "确认创建",
                                            level: "primary",
                                            className: "text-c",
                                            actionType: "ajax",
                                            api: "https://houtai.baidu.com/api/mock2/form/saveForm",
                                            feedback: {
                                                className: "newGroup",
                                                closeOnEsc: true,
                                                size:"lg",
                                                /* "visibleOn": "!(this.date % 2)", 根据返回条件判断显示 */
                                                "title": "创建成功",
                                                skipRestOnCancel: false,
                                                body: [
                                                    {
                                                        type: "container",
                                                        className: "text-c",
                                                        "body": [
                                                            {
                                                                type: "container",
                                                                body: {
                                                                    type: "image",
                                                                    className: "ERCode",
                                                                    src: "http://hiphotos.baidu.com/fex/%70%69%63/item/0d338744ebf81a4cff2f4cd6de2a6059252da694.jpg"
                                                                }
                                                            },
                                                            {
                                                                type: "tpl",
                                                                tpl: "下载二维码，邀请客户进入群聊",
                                                                className: "m-t-sm",
                                                            },
                                                            {
                                                                type: "container",
                                                                className: "m-t-xxl",
                                                                body: [
                                                                    {
                                                                        type: "button",
                                                                        label: "下载二维码",
                                                                        level: "primary",
                                                                        className: "m-r"
                                                                    },
                                                                    {
                                                                        type: "button",
                                                                        label: "完成",
                                                                        level: "primary",
                                                                        className: "padder-lg",
                                                                        "actionType": "confirm",
                                                                        "primary": true
                                                                    }
                                                                ]
                                                            }

                                                        ],
                                                    }
                                                ],
                                                actions: [
                                                ]
                                            }
                                        }
                                    ]
                                },
                                actions: []
                            }
                        },
                        {
                            columnClassName: "w560 text-r",
                            "type": "form",
                            "title": "",
                            target: "my_crud",
                            "mode": "inline",
                            "controls": [
                                {
                                    "type": "input-group",
                                    "size": "md",
                                    "label": "",
                                    "controls": [
                                        {
                                            "type": "icon",
                                            "addOnclassName": "no-bg",
                                            "className": "text-sm",
                                            "icon": "search",
                                            "vendor": "iconfont"
                                        },
                                        {
                                            "type": "text",
                                            "placeholder": "按客户名/昵称精确搜索",
                                            "inputClassName": "b-l-none p-l-none w370",
                                            "name": "perPage"
                                        }
                                    ]
                                },
                                {
                                    "type": "submit",
                                    level: "primary",
                                    "label": "搜索"
                                },
                                {
                                    type: "container",
                                    className: 'pos-rlt',
                                    body: [
                                        {
                                            "type": "collapse",
                                            collapsed: true,
                                            "title": "组合筛选",
                                            headingClassName: "a-Button a-Button--default p5 fs14",
                                            bodyClassName: "butremark borshadow",
                                            "body": {
                                                type: "form",
                                                target: "my_crud",
                                                "mode": "horizontal",
                                                wrapWithPanel: false, // 去掉底部按钮
                                                title:"",
                                                controls: [
                                                    {
                                                        className: "wb50",
                                                        "label": "跟进员工",
                                                        "type": "select",
                                                        "name": "select",
                                                        "mode": "inline",
                                                        labelClassName: "w70 text-l",
                                                        inputClassName: "w260",
                                                        "size": "md",
                                                        "options": [
                                                            {
                                                                "label": "A",
                                                                "value": "a"
                                                            },
                                                            {
                                                                "label": "B",
                                                                "value": "b"
                                                            },
                                                            {
                                                                "label": "C",
                                                                "value": "c"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "label": "添加微信号",
                                                        className: "wb50 text-r",
                                                        labelClassName: "w70 text-l",
                                                        inputClassName: "w260",
                                                        "type": "select",
                                                        "name": "addWx",
                                                        "mode": "inline",
                                                        "size": "md",
                                                        "options": [
                                                            {
                                                                "label": "A",
                                                                "value": "a"
                                                            },
                                                            {
                                                                "label": "B",
                                                                "value": "b"
                                                            },
                                                            {
                                                                "label": "C",
                                                                "value": "c"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "label": "归属部门",
                                                        className: "wb50",
                                                        labelClassName: "w70 text-l",
                                                        inputClassName: "w260",
                                                        "type": "select",
                                                        "name": "addWx",
                                                        "mode": "inline",
                                                        "size": "md",
                                                        "options": [
                                                            {
                                                                "label": "A",
                                                                "value": "a"
                                                            },
                                                            {
                                                                "label": "B",
                                                                "value": "b"
                                                            },
                                                            {
                                                                "label": "C",
                                                                "value": "c"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "label": "状态筛选",
                                                        className: "wb50 text-r",
                                                        labelClassName: "w70 text-l",
                                                        inputClassName: "w260",
                                                        "type": "select",
                                                        "name": "addWx",
                                                        "mode": "inline",
                                                        "size": "md",
                                                        "options": [
                                                            {
                                                                "label": "A",
                                                                "value": "a"
                                                            },
                                                            {
                                                                "label": "B",
                                                                "value": "b"
                                                            },
                                                            {
                                                                "label": "C",
                                                                "value": "c"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "label": "是否签约",
                                                        className: "wb50",
                                                        labelClassName: "w70 text-l",
                                                        inputClassName: "w260",
                                                        "type": "select",
                                                        "name": "addWx",
                                                        "mode": "inline",
                                                        "size": "md",
                                                        "options": [
                                                            {
                                                                "label": "A",
                                                                "value": "a"
                                                            },
                                                            {
                                                                "label": "B",
                                                                "value": "b"
                                                            },
                                                            {
                                                                "label": "C",
                                                                "value": "c"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "label": "客户性别",
                                                        className: "wb50 text-r",
                                                        labelClassName: "w70 text-l",
                                                        inputClassName: "w260",
                                                        "type": "select",
                                                        "name": "addWx",
                                                        "mode": "inline",
                                                        "size": "md",
                                                        "options": [
                                                            {
                                                                "label": "A",
                                                                "value": "a"
                                                            },
                                                            {
                                                                "label": "B",
                                                                "value": "b"
                                                            },
                                                            {
                                                                "label": "C",
                                                                "value": "c"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "label": "所在分组",
                                                        className: "wb50",
                                                        labelClassName: "w70 text-l",
                                                        inputClassName: "w260",
                                                        "type": "select",
                                                        "name": "addWx",
                                                        "mode": "inline",
                                                        "size": "md",
                                                        "options": [
                                                            {
                                                                "label": "A",
                                                                "value": "a"
                                                            },
                                                            {
                                                                "label": "B",
                                                                "value": "b"
                                                            },
                                                            {
                                                                "label": "C",
                                                                "value": "c"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        className: "wb50 text-r",
                                                        labelClassName: "w70 text-l",
                                                        inputClassName: "w260",
                                                        "mode": "inline",
                                                        "size": "md",
                                                        "type": "date-range",
                                                        "name": "select",
                                                        "label": "日期范围"
                                                    },
                                                    {
                                                        className: "wb50",
                                                        "label": "客户标签",
                                                        "type": "text",
                                                        "name": "select",
                                                        "mode": "inline",
                                                        labelClassName: "w70 text-l",
                                                        inputClassName: "w260",
                                                        "size": "md",
                                                    },
                                                    {
                                                        type: "container",
                                                        "mode": "inline",
                                                        className: "wb50 text-r",
                                                        body: [
                                                            {
                                                                "type": "reset",
                                                                className: 'mr-15 w70',
                                                                "label": "重置"
                                                            },
                                                            {
                                                                "type": "submit",
                                                                level: "primary",
                                                                className: 'w70',
                                                                "label": "提交"
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        },
                                        /*   {
                                               "type": "remark",
                                               "content": "导出",
                                               trigger: "click",
                                               placement: "bottom",
                                               className: 'butremark'
                                           }*/
                                    ]
                                },
                            ]

                        },
                    ]
                },
                {
                    type: "crud",
                    className: "bgff borN ",
                    name: "my_crud",
                    // draggable: true,
                    "api": {
                        "method": "get",
                        "url": "https://houtai.baidu.com/api/sample",
                        "data": {
                            "page": "1",
                            "perPage": "${perPage || 20}"
                        }
                    },
                    "headerToolbar": [],
                    "footerToolbar": [
                        "switch-per-page",
                        "pagination"
                    ],
                    columns: [
                        {
                            "label": "群名称",
                            "type": "button",
                            "actionType": "drawer",
                            drawer: {
                                actions: [],
                                className: "wDrawer",
                                "position": "right",
                                "closeOnOutside": true,
                                "title": {
                                    type:"container",
                                    body: [
                                        {
                                            type: "hbox",
                                            columns: [
                                                {
                                                    type:"container",
                                                    body: [
                                                        {
                                                            type: "tpl",
                                                            tpl:"${engine}"
                                                        }
                                                    ]
                                                },
                                                {
                                                    type: "action",
                                                    label: "重新分配",
                                                    level: "primary",
                                                    "columnClassName": "text-r padder-v-sm",
                                                }
                                            ]
                                        },
                                    ]
                                },
                                bodyClassName: "listDrawer",
                                "body": [
                                    {
                                        "type": "form",
                                        "mode": "horizontal",
                                        className: "listForm",
                                        wrapWithPanel: false, // 去掉底部按钮
                                        title:"",
                                        data: {
                                            bh: "184358",
                                            wx: "1234",
                                            userWx: "asddasd"
                                        },
                                        "controls": [
                                            {
                                                "mode": "inline",
                                                className: "wb25",
                                                "name": "bh",
                                                "type": "static",
                                                "label": "群成员数",
                                            },
                                            {
                                                "name": "wx",
                                                "mode": "inline",
                                                className: "wb25",
                                                "type": "static",
                                                "label": "微信群主",
                                            },
                                            {
                                                "mode": "inline",
                                                className: "wb25",
                                                "name": "userWx",
                                                "type": "static",
                                                "label": "当前跟进员工",
                                            },
                                            {
                                                "mode": "inline",
                                                className: "wb25",
                                                "name": "userWx",
                                                "type": "static",
                                                "label": "创建时间",
                                            },
                                            {
                                                "mode": "inline",
                                                className: "wb25",
                                                "name": "userWx",
                                                "type": "static",
                                                "label": "所属微信",
                                            },
                                            {
                                                "mode": "inline",
                                                className: "wb25",
                                                "name": "userWx",
                                                "type": "static",
                                                "label": "分组",
                                            },
                                            {
                                                "mode": "inline",
                                                className: "wb25",
                                                "name": "userWx",
                                                "type": "static",
                                                "label": "入群回复",
                                            }
                                        ]
                                    },
                                    {
                                        "type": "tabs",
                                        "mode": "radio",
                                        className: "listDrawerTba",
                                        "tabs": [
                                            {
                                                "title": "群成员",
                                                className: "m-t-xs headContent",
                                                "body": {
                                                    "type": "each",
                                                    "value": titleImg,
                                                    "items": {
                                                        "type": "tpl",
                                                        "tpl": "<div class='headImg'> <div class='groupImg'><img src=<%= data.img %> alt=''> <span class='details'>查看详情</span></div> <p class='userName'><%= data.userName %> </p></div> "
                                                    }
                                                },
                                            },
                                            {
                                                "title": "聊天记录",
                                                "body": [
                                                    {
                                                        "type": "form",
                                                        wrapWithPanel: false, // 去掉底部按钮
                                                        "title": "",
                                                        "md": 9,
                                                        target: "my_crud",
                                                        "mode": "inline",
                                                        "controls": [
                                                            {
                                                                "type": "input-group",
                                                                "size": "md",
                                                                "label": "",
                                                                "controls": [
                                                                    {
                                                                        "type": "icon",
                                                                        "addOnclassName": "no-bg",
                                                                        "className": "text-sm",
                                                                        "icon": "search",
                                                                        "vendor": "iconfont"
                                                                    },
                                                                    {
                                                                        "type": "text",
                                                                        "placeholder": "按聊天关键词搜索",
                                                                        "inputClassName": "b-l-none p-l-none w370",
                                                                        "name": "perPage"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "mode": "inline",
                                                                "size": "md",
                                                                "type": "date-range",
                                                                "name": "select",
                                                                "label": ""
                                                            }
                                                        ]

                                                    },
                                                    {
                                                        "type": "service",
                                                        "api": "https://houtai.baidu.com/api/sample?perPage=15",
                                                        body: [
                                                            {
                                                                type: "list",
                                                                source: "$rows",
                                                                className: "chartMsg borN",
                                                                listItem: {
                                                                    body: [
                                                                        {
                                                                            "type": "hbox",
                                                                            className:"wb100",
                                                                            "columns": [
                                                                                {
                                                                                    "name": "grade",
                                                                                    type: 'mapping',
                                                                                    map: {
                                                                                        'C': msg,
                                                                                        'X': msgRight,
                                                                                    }
                                                                                },
                                                                            ]
                                                                        }
                                                                    ]
                                                                }
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "title": "历史记录",
                                                "body": {
                                                    type: "crud",
                                                    className: "bgff borN m-t chartMsg",
                                                    // draggable: true,
                                                    "api": {
                                                        "method": "get",
                                                        "url": "https://houtai.baidu.com/api/sample",
                                                        "data": {
                                                            "page": "1",
                                                            "perPage": "${perPage || 20}"
                                                        }
                                                    },
                                                    "headerToolbar": [],
                                                    "footerToolbar": [
                                                        "switch-per-page",
                                                        "pagination"
                                                    ],
                                                    columns: [
                                                        {
                                                            label: "负责人",
                                                            name: "browser"
                                                        },
                                                        {
                                                            label: "时间",
                                                            name: "updatedAt"
                                                        },
                                                        {
                                                            label: "互动",
                                                            name: "updatedAt"
                                                        }
                                                    ]
                                                }
                                            },
                                            {
                                                "title": "分配记录",
                                                "body": {
                                                    type: "crud",
                                                    className: "bgff borN m-t chartMsg",
                                                    // draggable: true,
                                                    "api": {
                                                        "method": "get",
                                                        "url": "https://houtai.baidu.com/api/sample",
                                                        "data": {
                                                            "page": "1",
                                                            "perPage": "${perPage || 20}"
                                                        }
                                                    },
                                                    "headerToolbar": [],
                                                    "footerToolbar": [
                                                        "switch-per-page",
                                                        "pagination"
                                                    ],
                                                    columns: [
                                                        {
                                                            label: "分配人",
                                                            name: "browser"
                                                        },
                                                        {
                                                            label: "时间",
                                                            name: "updatedAt"
                                                        },
                                                        {
                                                            label: "负责人",
                                                            name: "updatedAt"
                                                        }
                                                    ]
                                                }
                                            }
                                        ]
                                    }
                                ]
                            }
                        },
                        {
                            label: "成员数",
                            type: 'mapping',
                            map: {
                                1: '♂',
                                '*': '♀'
                            }
                        },

                        {
                            name: "age",
                            label: "群主",
                        },

                        {
                            name: "gender",
                            label: "当前跟进员工",
                        },

                        {
                            name: 'tel',
                            label: '所属微信号'
                        },

                        {
                            name: 'company',
                            label: '群标签'
                        },
                        {
                            name: 'company',
                            label: '分组'
                        },

                        {
                            name: 'company',
                            label: '群公告'
                        },
                        {
                            name: '',
                            label: '操作'
                        }
                    ]
                }
            ]
        },

    ]
};

export default schema2component(schema);