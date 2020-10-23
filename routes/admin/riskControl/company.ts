import schema2component from "../../../utils/schema2component";
import "../customer/group.scss"
const title = `<div class="wb100">
    <div  class="clAE">
        <span>首页</span>
        <span>/</span>
        <span >风控</span>
        <span>/</span>
        <span class="cl34">企业应用商城</span>
    </div>
       <div class="disFlex mt-15 text-c cl34">
        <h2 class=" fs18 fw6">企业应用商城</h2>  
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
                                            "title": "创建应用",
                                            className: "w490 m-a",
                                            "mode": "horizontal",
                                            "controls":  [
                                                {
                                                    className: "wb100 ",
                                                    "label": "应用名称：",
                                                    "type": "text",
                                                    "name": "mc",
                                                    "mode": "inline",
                                                    labelClassName: "w120 text-r",
                                                    inputClassName: "w350",
                                                },
                                                {
                                                    className: "wb100 ",
                                                    "label": "应用包名：",
                                                    "type": "text",
                                                    "name": "mc",
                                                    "mode": "inline",
                                                    labelClassName: "w120 text-r",
                                                    "disabled": true,
                                                    inputClassName: "w350",
                                                },
                                                {
                                                    "type": "file",
                                                    "label": "apk上传：",
                                                    labelClassName: "w120 text-r",

                                                    "name": "remark",
                                                    "accept": ".csv",
                                                    "reciever": "https://houtai.baidu.com/api/upload/file",
                                                    description: "大小限制：4GB以下"
                                                },

                                            ],
                                            "api": "https://houtai.baidu.com/api/mock2/form/saveForm?waitSeconds=2"
                                        },
                                        {
                                            "title": "完善资料",
                                            className: "w560 m-a",
                                            "controls": [
                                                {
                                                    className: "wb100",
                                                    "label": "应用图标：",
                                                    "type": "image",
                                                    "name": "image",
                                                    "mode": "inline",
                                                    "reciever": "https://houtai.baidu.com/api/upload/file",
                                                    labelClassName: "w100 text-r",
                                                    inputClassName: "w435",
                                                    "size": "md"
                                                },
                                                {
                                                    className: "wb100",
                                                    "label": "版本号：",
                                                    "type": "text",
                                                    "name": "qf",
                                                    "mode": "inline",
                                                    labelClassName: "w100 text-r",
                                                    inputClassName: "w435",
                                                    "size": "md"
                                                },
                                                {
                                                    className: "wb100",
                                                    "label": "应用类型：",
                                                    "type": "select",
                                                    options: [{
                                                        value: "1",
                                                        label: "1"
                                                    }],
                                                    "name": "lx",
                                                    "mode": "inline",
                                                    labelClassName: "w100 text-r",
                                                    inputClassName: "w435",
                                                    "size": "md"
                                                },
                                                {
                                                    className: "wb100",
                                                    "label": "应用介绍：",
                                                    "type": "text",
                                                    "name": "qf",
                                                    "mode": "inline",
                                                    labelClassName: "w100 text-r",
                                                    inputClassName: "w435",
                                                    "size": "md"
                                                },
                                                {
                                                    className: "wb100",
                                                    "label": "应用宣传图：",
                                                    "type": "image",
                                                    "name": "image",
                                                    "mode": "inline",
                                                    "reciever": "https://houtai.baidu.com/api/upload/file",
                                                    labelClassName: "w100 text-r",
                                                    inputClassName: "w435",
                                                    "size": "md"
                                                }
                                            ],
                                            "initApi": "https://houtai.baidu.com/api/mock2/form/initForm",
                                            "api": "https://houtai.baidu.com/api/mock2/form/saveForm?waitSeconds=2"
                                        },
                                        {
                                            "title": "发布上线",
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
                                                    tpl: "上架成功后，员工手机端即可在应用商城中下载应用",
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
                            name: 'tel',
                            label: '操作',
                            type: "operation",
                            buttons: [
                                {
                                    type: "button",
                                    label: "编辑",
                                    level: "primary",
                                },
                                {
                                    type: "button",
                                    label: "更新",
                                    level: "primary",
                                    "actionType": "dialog",
                                    "dialog": {
                                        className: "MassHairDlog",
                                        closeOnEsc: true,
                                        size:"lg",
                                        "title": "更新应用",
                                        "body": {
                                            type: "form",
                                            "mode": "horizontal",
                                            className: "w490 m-a",
                                            wrapWithPanel: false, // 去掉底部按钮
                                            title:"",
                                            controls: [
                                                {
                                                    type: "text",
                                                    label: "应用名称：",
                                                    labelClassName: "w120",
                                                    name: "remark",
                                                    required: true,
                                                    disabled: true,
                                                    value: "企业微信"
                                                },
                                                {
                                                    type: "text",
                                                    label: "当前版本号：",
                                                    labelClassName: "w120",
                                                    name: "remark",
                                                    required: true,
                                                    disabled: true,
                                                    value: "v.1.2.1"
                                                },
                                                {
                                                    type: "text",
                                                    label: "新版本号：",
                                                    labelClassName: "w120",
                                                    name: "remark",
                                                    required: true,
                                                    value: "v.1.2.1"
                                                },
                                                {
                                                    "type": "file",
                                                    "label": "apk上传：",
                                                    labelClassName: "w120 text-r",
                                                    "name": "rrr",
                                                    "accept": ".csv",
                                                    "reciever": "https://houtai.baidu.com/api/upload/file",
                                                    description: "大小限制：4GB以下"
                                                },
                                                {
                                                    type: "select",
                                                    label: "推送方式：",
                                                    labelClassName: "w120",
                                                    name: "remark",
                                                    required: true,
                                                    value: "v.1.2.1",
                                                    options: [{
                                                        value: "1",
                                                        label: "微信"
                                                    }]
                                                },
                                                {
                                                    type: "container",
                                                    className: "text-c",
                                                    body: [
                                                        {
                                                            type: "button",
                                                            label: "取消",
                                                            className: "m-r",
                                                            actionType: "close"
                                                        },
                                                        {
                                                            type: "button",
                                                            "level": "primary",
                                                            label: "确定"
                                                        }
                                                    ]
                                                }
                                            ],
                                        },
                                        actions: []
                                    }
                                },
                                {
                                    type: "button",
                                    label: " 下架",
                                    level: "primary",
                                    "actionType": "dialog",
                                    "dialog": {
                                        closeOnEsc: true,
                                        "title": "应用下架",
                                        "body": [
                                            {
                                                type: "tpl",
                                                tpl: "<img src='http://hiphotos.baidu.com/fex/%70%69%63/item/0d338744ebf81a4cff2f4cd6de2a6059252da694.jpg' width='42px' height='42px' /> <span class='fs12 m-l'>下架后，员工将无法再企业应用商城里面下载应用，是否确认下架？</span>"
                                            }
                                        ]
                                    }
                                },

                                {
                                    type: "button",
                                    label: "权限设置",
                                    level: "primary",
                                    "actionType": "dialog",
                                    "dialog": {
                                        className: "MassHairDlog",
                                        closeOnEsc: true,
                                        size:"lg",
                                        "title": "权限设置",
                                        "body": {
                                            type: "form",
                                            className: " m-a",
                                            wrapWithPanel: false, // 去掉底部按钮
                                            title:"",
                                            controls: [
                                                {
                                                    "name": "checkboxes2",
                                                    "type": "checkboxes",
                                                    "label": "",
                                                    "columnsCount": 3,
                                                    "options": [
                                                        {
                                                            "label": "电话",
                                                            "value": "a"
                                                        },
                                                        {
                                                            "label": "相机",
                                                            "value": "b"
                                                        },
                                                        {
                                                            "label": "麦克风",
                                                            "value": "c"
                                                        },
                                                        {
                                                            "label": "位置信息",
                                                            "value": "d"
                                                        },
                                                        {
                                                            "label": "通讯录",
                                                            "value": "d1"
                                                        },
                                                        {
                                                            "label": "日历",
                                                            "value": "d2"
                                                        },
                                                        {
                                                            "label": "悬浮窗",
                                                            "value": "d3"
                                                        },
                                                        {
                                                            "label": "应用内安装其他应用",
                                                            "value": "d13"
                                                        },
                                                        {
                                                            "label": "网络",
                                                            "value": "d23"
                                                        },
                                                        {
                                                            "label": "使用指纹硬件",
                                                            "value": "d33"
                                                        },
                                                        {
                                                            "label": "停止锁屏",
                                                            "value": "d43"
                                                        },
                                                        {
                                                            "label": "蓝牙",
                                                            "value": "d143"
                                                        },
                                                        {
                                                            "label": "创建桌面快捷方式",
                                                            "value": "d243"
                                                        },
                                                        {
                                                            "label": "储存",
                                                            "value": "d243"
                                                        }
                                                    ]
                                                },
                                                {
                                                    type: "container",
                                                    className: "text-c",
                                                    body: [
                                                        {
                                                            type: "button",
                                                            label: "取消",
                                                            className: "m-r",
                                                            actionType: "close"
                                                        },
                                                        {
                                                            type: "button",
                                                            "level": "primary",
                                                            label: "确定"
                                                        }
                                                    ]
                                                }
                                            ],
                                        },
                                        actions: []
                                    }
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