import schema2component from "../../../utils/schema2component";
import "../customer/group.scss"
const title = `<div class="wb100">
    <div  class="clAE">
        <span>首页</span>
        <span>/</span>
        <span >营销</span>
        <span>/</span>
        <span class="cl34">批量群发</span>
    </div>
       <div class="disFlex mt-15 text-c cl34">
        <h2 class=" fs18 fw6">批量群发</h2>  
    </div>
</div>`

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
                            label: "新建群发",
                            level: "primary",
                            "actionType": "dialog",
                            columnClassName: "wb50",
                            "dialog": {
                                "title": "新建群发",
                                className: "MassHairDlog",
                                closeOnEsc: true,
                                size:"lg",
                                "body":  {
                                    "type": "wizard",
                                    actionNextSaveLabel: "下一步",
                                    className: "MyWizard",
                                    actionClassName: "test",
                                    "steps": [
                                        {
                                            "title": "赛选客户",
                                            "controls":  [
                                                {
                                                    "name": "radios",
                                                    "mode": "inline",
                                                    "type": "radios",
                                                    "label": "群发类型：",
                                                    labelClassName: "w70",
                                                    className: "radiosD",
                                                    "options": [
                                                        {
                                                            "label": "客户群发",
                                                            "value": "a"
                                                        },
                                                        {
                                                            "label": "微信群群发",
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
                                                    className: "wb50",
                                                    "label": "所属员工：",
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
                                                    "label": "所属微信号：",
                                                    className: "wb50 text-r",
                                                    labelClassName: " text-l",
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
                                                    "label": "归属部门：",
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
                                                    "label": "状态筛选：",
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
                                                    "label": "是否签约：",
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
                                                    "label": "客户性别：",
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
                                                    className: "wb50",
                                                    "label": "客户标签：",
                                                    "type": "text",
                                                    "name": "select",
                                                    "mode": "inline",
                                                    labelClassName: "w70 text-l",
                                                    inputClassName: "w260",
                                                    "size": "md",
                                                },
                                                {
                                                    className: "wb50 text-r",
                                                    labelClassName: "w70 text-l",
                                                    inputClassName: "w260",
                                                    "mode": "inline",
                                                    "size": "md",
                                                    "type": "date-range",
                                                    "name": "select",
                                                    "label": "添加日期："
                                                },
                                                {
                                                    className: "wb100 ",
                                                    type: "tpl",
                                                    tpl: "<label class='a-Form-label  text-l pull-left m-t'><span>共查找到客户：</span></label><div class='pull-left'><span class='fs32 fw6 cl34'>1345</span> <span>人</span></div>"
                                                }

                                            ],
                                            "api": "https://houtai.baidu.com/api/mock2/form/saveForm?waitSeconds=2"
                                        },
                                        {
                                            "title": "群发内容",
                                            className: "w560 m-a",
                                            "controls": [
                                                {
                                                    className: "wb100",
                                                    "label": "添加到微信：",
                                                    "type": "select",
                                                    "name": "select",
                                                    "mode": "inline",
                                                    labelClassName: "w100 text-r",
                                                    inputClassName: "w435",
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
                                                    className: "wb100",
                                                    type: "tpl",
                                                    tpl: "<label class='a-Form-label w100 text-r pull-left'><span>素材预览：</span></label><div class='pull-left w435 m-l-sm m-b'><p>【嗨翻星期五🖐🏻】 游戏▶️运动 华为平板💻迪奥口红💄 你想要的\n" +
                                                    "我都有~~快来加入我们吧   </p><img src='http://hiphotos.baidu.com/fex/%70%69%63/item/0d338744ebf81a4cff2f4cd6de2a6059252da694.jpg' width='234px' height='132px' class='m-t-xs' alt=''></div>"
                                                },
                                                {
                                                    className: "wb100",
                                                    "label": "群发速度：",
                                                    "type": "select",
                                                    "name": "select",
                                                    "mode": "inline",
                                                    labelClassName: "w100 text-r",
                                                    inputClassName: "w435",
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
                                                    className: "wb100",
                                                    "label": "本次群发名称：",
                                                    "type": "text",
                                                    "name": "qf",
                                                    "mode": "inline",
                                                    labelClassName: "w100 text-r",
                                                    inputClassName: "w435",
                                                    "size": "md"
                                                }
                                            ],
                                            "initApi": "https://houtai.baidu.com/api/mock2/form/initForm",
                                            "api": "https://houtai.baidu.com/api/mock2/form/saveForm?waitSeconds=2"
                                        },
                                        {
                                            "title": "提交成功",
                                            "controls": [
                                                {
                                                    type: "icon",
                                                    icon: "check-circle",
                                                    className: "fs84 block text-c m-t-md"
                                                },
                                                {
                                                    type: "tpl",
                                                    tpl: "提交成功",
                                                    className: "fs24 fw6 cl34 block text-c m-t-xs"
                                                },
                                                {
                                                    type: "tpl",
                                                    tpl: "提交后，群发任务默认在后台执行，可在群发列表中查看或者终止",
                                                    className: "clAE block text-c m-b-lg"
                                                }
                                            ],
                                            "api": "https://houtai.baidu.com/api/mock2/form/saveForm?waitSeconds=2"
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
                            "label": "群发内容名称",
                            "name": "engine",
                            className: "cl-0F",
                            "type": "link",
                            href: "/admin/Marketing/MassHairDetails?id=${id}&name=${engine}",
                            body:"${engine}"
                        },
                        {
                            label: "群发好友/群数"
                        },

                        {
                            name: "age",
                            label: "已发",
                        },

                        {
                            name: "gender",
                            label: "剩余未发",
                        },
                        {
                            name: "gender",
                            label: "创建员工",
                        },
                        {
                            name: "gender",
                            label: "消息内容",
                        },
                        {
                            name: "gender",
                            label: "创建时间",
                        },
                        {
                            name: 'company',
                            label: '操作'
                        }
                    ]
                }
            ]
        },

    ]
};

export default schema2component(schema);