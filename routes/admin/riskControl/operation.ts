import schema2component from "../../../utils/schema2component";
import "../customer/group.scss"
const title = `<div class="wb100">
    <div  class="clAE">
        <span>首页</span>
        <span>/</span>
        <span >风控</span>
        <span>/</span>
        <span class="cl34">敏感词操作</span>
    </div>
       <div class="disFlex mt-15 text-c cl34">
        <h2 class=" fs18 fw6">敏感词操作</h2>  
    </div>
</div>`


const schema = {
    type: 'page',
    "data": {
        "text": "World!",
    },
    "initApi": "https://houtai.baidu.com/api/mock2/page/initData",
    body: [

        {
            type: "card",
            body: {
                type: "tpl",
                className: "wb100",
                tpl: title
            },
        },

        {
            type: "container",
            className: "m-n materialGrid",
            body: [
                {
                    type:"container",
                    className: "materialTab bg-ff wb21 pull-left",
                    body: [
                        {
                            type: "tpl",
                            tpl: "敏感词操作",
                            className: "pt26 pl-26"
                        },
                        {
                            "type": "form",
                            target: "materials",
                            title: "",
                            submitOnChange: true,
                            wrapWithPanel: false, // 去掉底部按钮
                            "controls": [
                                {
                                    "name": "materialsRadios",
                                    "type": "radios",
                                    "label": "",
                                    className: "RadiosLeft",
                                    "options": [
                                        {
                                            "label": "OptionA",
                                            "value": "a"
                                        },
                                        {
                                            "label": "OptionB",
                                            "value": "b"
                                        },
                                        {
                                            "label": "OptionC",
                                            "value": "c"
                                        },
                                        {
                                            "label": "OptionD",
                                            "value": "d"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            type: "button",
                            label: "新增敏感词操作",
                            "level": "primary",
                            className: "wb90 m",
                            "actionType": "dialog",
                            dialog: {
                                "title": "新增敏感词操作",
                                className: "MassHairDlog",
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
                                            "type": "select",
                                            "label": "选择敏感操作：",
                                            labelClassName: "w120",
                                            "name": "remark",
                                            options: [{
                                                value:"1",
                                                label: "2"
                                            }],
                                            placeholder: "请选择敏感操作"
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
                                    ]
                                },
                                actions: []
                            }
                        }
                    ]
                },
                {
                    type: "crud",
                    className: "bgff borN wb78 pull-left",
                    name: "materials ",
                    // draggable: true,
                    "api": {
                        "method": "get",
                        "url": "https://houtai.baidu.com/api/sample",
                        "data": {
                            "page": "1",
                            "perPage": "${materialsRadios || 20}"
                        }
                    },
                    "headerToolbar": [
                        {
                            type: "action",
                            label: "设置通知人",
                            level: "primary",
                            columnClassName: "text-l",
                            "actionType": "dialog",
                            "dialog": {
                                className: "MassHairDlog",
                                closeOnEsc: true,
                                size:"lg",
                                "title": "新增素材",
                                "body": {
                                    type: "form",
                                    "mode": "horizontal",
                                    className: "w490 m-a",
                                    wrapWithPanel: false, // 去掉底部按钮
                                    title:"",
                                    controls: [
                                        {
                                            type: "email",
                                            label: "通知人邮箱：",
                                            labelClassName: "w120",
                                            name: "remark",
                                            required: true,
                                            placeholder: "请输入通知人邮箱"
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
                                    ]
                                },
                                actions: []
                            }
                        },
                        {
                            type: "button",
                            className: "pull-right",
                            label: "导出"
                        },
                        {
                            "type": "form",
                            "title": "",
                            target: "my_crud",
                            className: "pull-right",
                            "mode": "inline",
                            "controls": [
                                {
                                    "type": "input-group",
                                    "size": "md",
                                    "label": "",
                                    className: "mb-0",
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

                    ],
                    "footerToolbar": [
                        "switch-per-page",
                        "pagination"
                    ],
                    columns: [
                        {
                            label: "操作人员",
                            name: "id",
                        },
                        {
                            name: "age",
                            label: "操作时间",
                        },
                        {
                            name: "gender",
                            label: "内容",
                        }
                    ]
                }
            ]
        },

    ]
};

export default schema2component(schema);