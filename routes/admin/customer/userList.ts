import schema2component from "../../../utils/schema2component";

const title = `<div class="wb100">
    <div  class="clAE">
        <span>首页</span>
        <span>/</span>
        <span >客户池</span>
        <span>/</span>
        <span class="cl34">客户列表</span>
    </div>
    
    <div class="disFlex mt-15 text-c cl34">
        <h2 class=" fs18 fw6">客户列表</h2>
        <span class="disFlex">
            <ul>
                <li class="cl8C">新客户</li>
                <li>677</li>
            </ul>
            <span class="my15 lineE9"></span>
            <ul>
                <li class="cl8C">活跃客户</li>
                <li><%= data.date %></li>
            </ul>
             <span class="my15 lineE9"></span>
            <ul>
                <li class="cl8C">休眠客户</li>
                <li class="clF6"><%= data.date %></li>
            </ul>
             <span class="my15 lineE9"></span>
            <ul>
                <li class="cl8C">流失客户</li>
                <li><%= data.date %></li>
            </ul>
           </span>
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
                            label: "一键分配",
                            level: "primary",
                            columnClassName: "wb50"
                        },
                        {
                            columnClassName: "w560",
                            "type": "form",
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
                                }
                            ]

                        },
                        {
                            "columnClassName": "w180",
                            "type": "hbox",
                            columns: [
                                {
                                    "columnClassName": "w100",
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

                                {
                                    "label": "导出",
                                    block: false,
                                    "type": "button",
                                    "actionType": "dialog",
                                    "dialog": {
                                        "title": "弹框",
                                        "body": "这是个简单的弹框。"
                                    }
                                }
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
                    "headerToolbar": ["bulkActions"],
                    bulkActions:[
                        {
                            "label": "批量删除",
                            "actionType": "ajax",
                            "api": "delete:https://houtai.baidu.com/api/sample/${ids|raw}",
                            "confirmText": "确定要批量删除?"
                        },
                    ],
                    "footerToolbar": [
                        "switch-per-page",
                        "pagination"
                    ],
                    columns: [
                        {
                            "label": "客户姓名",
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
                                                            tpl:"客户: ${engine}"
                                                        },
                                                        {
                                                            "type": "each",
                                                            "value": [
                                                                "A",
                                                                "B",
                                                                "C"
                                                            ],
                                                            "items": {
                                                                "type": "tpl",
                                                                "tpl": "<span class='label label-E6 m-l-sm'><%= data.item %></span> "
                                                            }
                                                        },
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
                                                "label": "客户编号",
                                            },
                                            {
                                                "name": "wx",
                                                "mode": "inline",
                                                className: "wb25",
                                                "type": "static",
                                                "label": "客户微信",
                                            },
                                            {
                                                "mode": "inline",
                                                className: "wb25",
                                                "name": "userWx",
                                                "type": "static",
                                                "label": "客户归属微信",
                                            },
                                            {
                                                "mode": "inline",
                                                className: "wb25",
                                                "name": "userWx",
                                                "type": "static",
                                                "label": "负责员工",
                                            },
                                            {
                                                "mode": "inline",
                                                className: "wb25",
                                                "name": "userWx",
                                                "type": "static",
                                                "label": "客户分类",
                                            },
                                            {
                                                "mode": "inline",
                                                className: "wb25",
                                                "name": "userWx",
                                                "type": "static",
                                                "label": "所在地区",
                                            },
                                            {
                                                "mode": "inline",
                                                className: "wb25",
                                                "name": "userWx",
                                                "type": "static",
                                                "label": "上次互动时间",
                                            },
                                            {
                                                "mode": "inline",
                                                className: "wb25",
                                                "name": "userWx",
                                                "type": "static",
                                                "label": "潜在商机",
                                            }
                                        ]
                                },
                                    {
                                        "type": "tabs",
                                        "mode": "radio",
                                        className: "listDrawerTba",
                                        "tabs": [
                                            {
                                                "title": "详细档案",
                                                "body": [
                                                    {
                                                        type: "grid",
                                                        className: "b-b",
                                                        columns: [
                                                            {
                                                                "md": 3,
                                                                "columnClassName": "w-xs2",
                                                                "type": "form",
                                                                wrapWithPanel: false, // 去掉底部按钮
                                                                title:"",
                                                                "mode": "horizontal",
                                                                data: {
                                                                    bh: "184358",
                                                                    wx: "1234",
                                                                    userWx: "asddasd",
                                                                    images: ['https://internal-amis-res.cdn.bcebos.com/images/2020-1/1578395693566/552b175ef11d.jpeg']
                                                                },
                                                                "controls": [
                                                                    {
                                                                        "mode": "inline",
                                                                        className: "wb100",
                                                                        "name": "images",
                                                                        "type": "static-images",
                                                                        "label": "微信头像",
                                                                        inputClassName: "listWximgs"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "md": 6,
                                                                "columnClassName": "w-xs4",
                                                                "type": "form",
                                                                wrapWithPanel: false, // 去掉底部按钮
                                                                title:"",
                                                                "mode": "horizontal",
                                                                data: {
                                                                    bh: "184358",
                                                                    wx: "1234",
                                                                    userWx: "asddasd",
                                                                    images: ['https://internal-amis-res.cdn.bcebos.com/images/2020-1/1578395693566/552b175ef11d.jpeg']
                                                                },
                                                                "controls": [
                                                                    {
                                                                        "mode": "inline",
                                                                        className: "wb50",
                                                                        "name": "bh",
                                                                        "type": "static",
                                                                        "label": "微信昵称",
                                                                    },
                                                                    {
                                                                        "mode": "inline",
                                                                        className: "wb50",
                                                                        "name": "bh",
                                                                        "type": "static",
                                                                        "label": "微信备注",
                                                                    },
                                                                    {
                                                                        "mode": "inline",
                                                                        className: "wb50",
                                                                        "name": "bh",
                                                                        "type": "static",
                                                                        "label": "微信号码",
                                                                    },
                                                                    {
                                                                        "mode": "inline",
                                                                        className: "wb50",
                                                                        "name": "bh",
                                                                        "type": "static",
                                                                        "label": "所在地区",
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        type: "grid",
                                                        className: "b-b pt15",
                                                        columns: [
                                                            {
                                                                "md": 3,
                                                                "columnClassName": "w-xs2",
                                                                "type": "form",
                                                                wrapWithPanel: false, // 去掉底部按钮
                                                                title:"",
                                                                "mode": "horizontal",
                                                                data: {
                                                                    bh: "184358",
                                                                    wx: "1234",
                                                                    userWx: "asddasd",
                                                                    images: ['https://internal-amis-res.cdn.bcebos.com/images/2020-1/1578395693566/552b175ef11d.jpeg']
                                                                },
                                                                "controls": [
                                                                    {
                                                                        "mode": "inline",
                                                                        className: "wb100",
                                                                        "name": "bh",
                                                                        "type": "static",
                                                                        "label": "真实姓名",
                                                                    },
                                                                    {
                                                                        "mode": "inline",
                                                                        className: "wb100",
                                                                        "name": "bh",
                                                                        "type": "static",
                                                                        "label": "客户性别",
                                                                    },
                                                                ]
                                                            },
                                                            {
                                                                "md": 6,
                                                                "columnClassName": "w-xs4",
                                                                "type": "form",
                                                                wrapWithPanel: false, // 去掉底部按钮
                                                                title:"",
                                                                "mode": "horizontal",
                                                                data: {
                                                                    bh: "184358",
                                                                    wx: "1234",
                                                                    userWx: "asddasd",
                                                                    images: ['https://internal-amis-res.cdn.bcebos.com/images/2020-1/1578395693566/552b175ef11d.jpeg']
                                                                },
                                                                "controls": [
                                                                    {
                                                                        "mode": "inline",
                                                                        className: "wb50",
                                                                        "name": "bh",
                                                                        "type": "static",
                                                                        "label": "手机号码",
                                                                    },
                                                                    {
                                                                        "mode": "inline",
                                                                        className: "wb50",
                                                                        "name": "bh",
                                                                        "type": "static",
                                                                        "label": "邮箱地址",
                                                                    },
                                                                    {
                                                                        "mode": "inline",
                                                                        className: "wb50",
                                                                        "name": "bh",
                                                                        "type": "static",
                                                                        "label": "QQ号码",
                                                                    },
                                                                    {
                                                                        "mode": "inline",
                                                                        className: "wb50",
                                                                        "name": "bh",
                                                                        "type": "static",
                                                                        "label": "客户地址",
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        type: "grid",
                                                        className: "pt15",
                                                        columns: [
                                                            {
                                                                "md": 3,
                                                                "columnClassName": "w-xs2",
                                                                "type": "form",
                                                                wrapWithPanel: false, // 去掉底部按钮
                                                                title:"",
                                                                "mode": "horizontal",
                                                                data: {
                                                                    bh: "184358",
                                                                    wx: "1234",
                                                                    userWx: "asddasd",
                                                                    images: ['https://internal-amis-res.cdn.bcebos.com/images/2020-1/1578395693566/552b175ef11d.jpeg']
                                                                },
                                                                "controls": [
                                                                    {
                                                                        "mode": "inline",
                                                                        className: "wb100",
                                                                        "name": "bh",
                                                                        "type": "static",
                                                                        "label": "负责员工",
                                                                    },
                                                                    {
                                                                        "mode": "inline",
                                                                        className: "wb100",
                                                                        "name": "bh",
                                                                        "type": "static",
                                                                        "label": "客户分类",
                                                                    },
                                                                ]
                                                            },
                                                            {
                                                                "md": 6,
                                                                "columnClassName": "w-xs4",
                                                                "type": "form",
                                                                wrapWithPanel: false, // 去掉底部按钮
                                                                title:"",
                                                                "mode": "horizontal",
                                                                data: {
                                                                    bh: "184358",
                                                                    wx: "1234",
                                                                    userWx: "asddasd",
                                                                    images: ['https://internal-amis-res.cdn.bcebos.com/images/2020-1/1578395693566/552b175ef11d.jpeg']
                                                                },
                                                                "controls": [
                                                                    {
                                                                        "mode": "inline",
                                                                        className: "wb50",
                                                                        "name": "bh",
                                                                        "type": "static",
                                                                        "label": "创建时间",
                                                                    },
                                                                    {
                                                                        "mode": "inline",
                                                                        className: "wb50",
                                                                        "name": "bh",
                                                                        "type": "static",
                                                                        "label": "潜在商机",
                                                                    },
                                                                    {
                                                                        "mode": "inline",
                                                                        className: "wb50",
                                                                        "name": "bh",
                                                                        "type": "static",
                                                                        "label": "是否签约",
                                                                    },
                                                                    {
                                                                        "mode": "inline",
                                                                        className: "wb50",
                                                                        "name": "bh",
                                                                        "type": "static",
                                                                        "label": "上次互动时间",
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                ]
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
                                                "title": "朋友圈",
                                                "body":  {
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
                                                                            "name": "grade",
                                                                            type: 'mapping',
                                                                            map: {
                                                                                'C': friends,
                                                                                'X': friendsRight,
                                                                            }
                                                                        },
                                                                        {
                                                                            "type": "form",
                                                                            wrapWithPanel: false, // 去掉底部按钮
                                                                            "title": "",
                                                                            className: "m-t-sm ",
                                                                            "md": 9,
                                                                            "mode": "inline",
                                                                            "controls": [
                                                                                {
                                                                                    "type": "text",
                                                                                    "placeholder": "输入评论...",
                                                                                    className: "wb100",
                                                                                    "inputClassName": "bgF0F inputWb",
                                                                                    "name": "perPage"
                                                                                }
                                                                            ]
                                                                        }
                                                                ]
                                                            }
                                                        }
                                                    ]
                                                }
                                            },
                                            {
                                                "title": "营销记录",
                                                "body": [
                                                    {
                                                        "type": "form",
                                                        "title": "",
                                                        "md": 9,
                                                        target: "Marketing",
                                                        wrapWithPanel: false, // 去掉底部按钮
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
                                                            }
                                                        ]

                                                    },
                                                    {
                                                        type: "crud",
                                                        className: "bgff borN m-t chartMsg",
                                                        name: "Marketing",
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
                                                                label: "时间",
                                                                name: "updatedAt"
                                                            },
                                                            {
                                                                label: "营销活动",
                                                                name: "updatedAt"
                                                            },
                                                            {
                                                                label: "发布方式",
                                                                name: "updatedAt"
                                                            },
                                                            {
                                                                label: "发布人",
                                                                name: "browser"
                                                            },
                                                            {
                                                                label: "是否阅读",
                                                                name: "grade"
                                                            },
                                                            {
                                                                label: "是否购买",
                                                                name: "status"
                                                            },
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
                            label: "性别",
                            type: 'mapping',
                            map: {
                                1: '♂',
                                '*': '♀'
                            }
                        },

                        {
                            name: "age",
                            label: "客户微信",
                        },

                        {
                            name: "gender",
                            label: "员工微信",
                        },

                        {
                            name: 'tel',
                            label: '标签'
                        },

                        {
                            name: 'company',
                            label: '状态'
                        },
                        {
                            name: 'company',
                            label: '上一次互动'
                        },

                        {
                            name: 'company',
                            label: '分组'
                        },
                        {
                            name: '',
                            label: '是否签约'
                        },
                        {
                            name: '',
                            label: '备注'
                        },
                    ]
                }
            ]
        },

    ]
};

export default schema2component(schema);