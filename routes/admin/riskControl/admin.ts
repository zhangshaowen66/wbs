import schema2component from "../../../utils/schema2component";
import "../customer/group.scss"
const title = `<div class="wb100">
    <div  class="clAE">
        <span>首页</span>
        <span>/</span>
        <span >风控</span>
        <span>/</span>
        <span class="cl34">敏感词管理</span>
    </div>
       <div class="disFlex mt-15 text-c cl34">
        <h2 class=" fs18 fw6">敏感词管理</h2>  
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
                            tpl: "敏感词分组",
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
                            label: "新增分组",
                            "level": "primary",
                            className: "wb90 m",
                            "actionType": "dialog",
                            dialog: {
                                "title": "新增分组",
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
                                            "type": "text",
                                            "label": "设置组名称：",
                                            labelClassName: "w120",
                                            "name": "remark",
                                            placeholder: "请输入组名称"
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
                            label: "新增素材",
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
                                        /*H5素材*/
                                        {
                                            type: "text",
                                            label: "敏感词：",
                                            labelClassName: "w120",
                                            name: "remark",
                                            placeholder: "请输入标题"
                                        },
                                        {
                                            "type": "select",
                                            "label": "设置分组：",
                                            labelClassName: "w120",
                                            "name": "select",
                                            options: [
                                                {
                                                    value: "1",
                                                    label: "1"
                                                }
                                            ],
                                            placeholder: "请选择分组"
                                        },
                                        {
                                            "type": "select",
                                            "label": "适用范围：",
                                            labelClassName: "w120",
                                            "name": "remark",
                                            options: [
                                                {
                                                    value: "1",
                                                    label: "1"
                                                }
                                            ],
                                            placeholder: "请选择分组"
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
                        "bulkActions",
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
                    bulkActions:[
                        {
                            "label": "删除所选素材",
                            "actionType": "ajax",
                            className: "pull-right",
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
                            label: "敏感词",
                            name: "id",
                        },
                        {
                            name: "age",
                            label: "适用范围",
                        },
                        {
                            name: "gender",
                            label: "创建人",
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