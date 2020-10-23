import schema2component from "../../../utils/schema2component";
import "../customer/group.scss"
const title = `<div class="wb100">
    <div  class="clAE">
        <span>首页</span>
        <span>/</span>
        <span >客户池</span>
        <span>/</span>
        <span class="cl34">个人管理</span>
    </div>
       <div class="disFlex mt-15 text-c cl34">
        <h2 class=" fs18 fw6">个人管理</h2>  
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
                            label: "添加微信号",
                            level: "primary",
                            "actionType": "dialog",
                            columnClassName: "wb50",
                            "dialog": {
                                "title": "添加微信号",
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
                                            "type": "text",
                                            "label": "微信号：",
                                            labelClassName: "w120",
                                            "name": "remark",
                                            placeholder: "不超过30个汉字"
                                        },
                                        {
                                            "type": "select",
                                            "label": "负责人：",
                                            "name": "bq",
                                            labelClassName: "w120",
                                            placeholder: "加好友频率",
                                            options: [
                                                {
                                                    "label": "C",
                                                    "value": "c"
                                                }
                                            ]
                                        },
                                        {
                                            type: "button",
                                            label: "确认创建",
                                            level: "primary",
                                            className: "text-c",
                                            actionType: "ajax",
                                            api: "https://houtai.baidu.com/api/mock2/form/saveForm"
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
                            "label": "微信昵称",
                            "name": "engine",
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
                                                        }
                                                    ]
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
                                                "label": "微信昵称",
                                            },
                                            {
                                                "name": "wx",
                                                "mode": "inline",
                                                className: "wb25",
                                                "type": "static",
                                                "label": "设备归属人",
                                            },
                                            {
                                                "mode": "inline",
                                                className: "wb25",
                                                "name": "userWx",
                                                "type": "static",
                                                "label": "微信ID",
                                            },
                                            {
                                                "mode": "inline",
                                                className: "wb25",
                                                "name": "userWx",
                                                "type": "static",
                                                "label": "微信号",
                                            },
                                            {
                                                "mode": "inline",
                                                className: "wb25",
                                                "name": "userWx",
                                                "type": "static",
                                                "label": "好友统计",
                                            },
                                            {
                                                "mode": "inline",
                                                className: "wb25",
                                                "name": "userWx",
                                                "type": "static",
                                                "label": "群统计",
                                            },
                                            {
                                                "mode": "inline",
                                                className: "wb25",
                                                "name": "userWx",
                                                "type": "static",
                                                "label": "状态",
                                            },
                                            {
                                                "mode": "inline",
                                                className: "wb25",
                                                "name": "userWx",
                                                "type": "static",
                                                "label": "登录设备",
                                            }
                                        ]
                                    },
                                    {
                                        "type": "tabs",
                                        "mode": "radio",
                                        className: "listDrawerTba",
                                        "tabs": [

                                            {
                                                "title": "好友统计",
                                                "body": [
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
                                                                label: "好友昵称/头像",
                                                                name: "updatedAt"
                                                            },
                                                            {
                                                                label: "微信号",
                                                                name: "updatedAt"
                                                            },
                                                            {
                                                                label: "微信ID",
                                                                name: "updatedAt"
                                                            },
                                                            {
                                                                label: "添加时间",
                                                                name: "browser"
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "title": "群统计",
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
                                                            label: "群名称/头像",
                                                            name: "browser"
                                                        },
                                                        {
                                                            label: "成员数",
                                                            name: "updatedAt"
                                                        },
                                                        {
                                                            label: "群标签",
                                                            name: "updatedAt"
                                                        },
                                                        {
                                                            label: "创建时间",
                                                            name: "updatedAt"
                                                        }
                                                    ]
                                                }
                                            },
                                            {
                                                "title": "登录日志",
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
                                                            label: "登录时间",
                                                            name: "browser"
                                                        },
                                                        {
                                                            label: "登录时长",
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
                            label: "微信ID"
                        },

                        {
                            name: "age",
                            label: "微信号",
                        },

                        {
                            name: "gender",
                            label: "负责人",
                        },

                        {
                            name: 'tel',
                            label: '部门'
                        },

                        {
                            name: 'company',
                            label: '状态'
                        },
                        {
                            name: 'company',
                            label: '好友统计'
                        },
                        {
                            name: 'company',
                            label: '群统计'
                        },
                        {
                            name: 'company',
                            label: '微信版本'
                        },
                        {
                            name: 'company',
                            label: '登录设备'
                        },
                        {
                            type: "operation",
                            name: 'company',
                            label: '操作',
                            buttons: [
                                {
                                    type: "button",
                                    label: "编辑",
                                    level: "primary",
                                },
                                {
                                    type: "button",
                                    actionType: "ajax",
                                    label: "删除",
                                    confirmText: "您确认要删除?",
                                    level: "danger",
                                    api: "delete:/api/sample/$id"
                                }
                            ]
                        }
                    ]
                }
            ]
        },

    ]
};

export default schema2component(schema);