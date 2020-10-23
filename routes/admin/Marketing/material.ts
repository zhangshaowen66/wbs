import schema2component from "../../../utils/schema2component";
import "../customer/group.scss"
const title = `<div class="wb100">
    <div  class="clAE">
        <span>首页</span>
        <span>/</span>
        <span >营销</span>
        <span>/</span>
        <span class="cl34">素材管理</span>
    </div>
       <div class="disFlex mt-15 text-c cl34">
        <h2 class=" fs18 fw6">素材管理</h2>  
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
                    type: "tabs",
                    mode: "radio",
                    className: "materialTab bg-ff wb21 pull-left",
                    tabs: [
                        {
                            "title": "公共素材",
                            "body": {
                                "type": "service",
                                "api": "https://houtai.baidu.com/api/sample?perPage=5",
                                body:{
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
                                }

                            }
                        },
                        {
                            "title": "部门素材",
                            "body": {
                                "type": "service",
                                "api": "https://houtai.baidu.com/api/sample?perPage=13",
                                body:{
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
                                }

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
                                        {
                                            "name": "radios",
                                            "mode": "inline",
                                            "type": "checkboxes",
                                            "label": "负责员工：",
                                            labelClassName: "w120 text-r",
                                            className: "radiosD",
                                            value:"a,b",
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
                                            "label": "标题：",
                                            labelClassName: "w120",
                                            "name": "remark",
                                            placeholder: "请输入内容"
                                        },
                                        {
                                            "type": "select",
                                            "label": "设置素材：",
                                            labelClassName: "w120",
                                            "name": "ddd",
                                            placeholder: "请选择素材",
                                            value:"a",
                                            "options": [
                                                {
                                                    "label": "文本素材",
                                                    "value": "a"
                                                },
                                                {
                                                    "label": "视频素材",
                                                    "value": "b"
                                                },
                                                {
                                                    "label": "语音素材",
                                                    "value": "c"
                                                },
                                                {
                                                    "label": "图片素材",
                                                    "value": "d"
                                                },
                                                {
                                                    "label": "小程序素材",
                                                    "value": "e"
                                                },
                                                {
                                                    "label": "海报素材",
                                                    "value": "f"
                                                },
                                                {
                                                    "label": "组合素材",
                                                    "value": "g"
                                                },
                                                {
                                                    "label": "H5素材",
                                                    "value": "h"
                                                }
                                            ],
                                        },
                                        {
                                            "type": "textarea",
                                            "label": "文字内容：",
                                            labelClassName: "w120",
                                            "name": "remark",
                                            "visibleOn": 'this.ddd == "a"',
                                            placeholder: "请输入内容"
                                        },
                                        {
                                            "type": "text",
                                            "label": "文字内容：",
                                            labelClassName: "w120",
                                            "name": "remark",
                                            "visibleOn": 'this.ddd !== "a" && this.ddd !== "g"',
                                            placeholder: "请输入描述"
                                        },
                                        /*视频素材*/
                                        {
                                            "type": "file",
                                            "label": "上传视频：",
                                            labelClassName: "w120",
                                            "name": "remark",
                                            "visibleOn": 'this.ddd == "b"',
                                            "accept": ".csv",
                                            "reciever": "https://houtai.baidu.com/api/upload/file",
                                            description: "大小限制：4GB以下"
                                        },
                                        /*语音素材*/
                                        {
                                            "type": "file",
                                            "label": "上传语音：",
                                            labelClassName: "w120",
                                            "name": "remark",
                                            "visibleOn": 'this.ddd == "c"',
                                            "accept": ".csv",
                                            "reciever": "https://houtai.baidu.com/api/upload/file",
                                            description: "大小限制：4GB以下"
                                        },
                                        /*图片和海报素材*/
                                        {
                                            "type": "file",
                                            "label": "上传图片：",
                                            labelClassName: "w120",
                                            "name": "remark",
                                            "visibleOn": 'this.ddd == "d" || this.ddd == "f"',
                                            "accept": ".csv",
                                            "reciever": "https://houtai.baidu.com/api/upload/file",
                                            description: "大小限制：4GB以下"
                                        },
                                        /*小程序素材*/
                                        {
                                            "type": "text",
                                            "label": "小程序标题：",
                                            labelClassName: "w120",
                                            "name": "remark",
                                            "visibleOn": 'this.ddd == "e"',
                                            placeholder: "请输入标题"
                                        },
                                        {
                                            "type": "text",
                                            "label": "小程序链接：",
                                            labelClassName: "w120",
                                            "name": "remark",
                                            "visibleOn": 'this.ddd == "e"',
                                            placeholder: "请输入链接"
                                        },
                                        {
                                            "type": "text",
                                            "label": "小程序描述：",
                                            labelClassName: "w120",
                                            "name": "remark",
                                            "visibleOn": 'this.ddd == "e"',
                                            placeholder: "请输入描述"
                                        },
                                        {
                                            "type": "file",
                                            "label": "上传图片：",
                                            labelClassName: "w120",
                                            "name": "remark",
                                            "visibleOn": 'this.ddd == "e"',
                                            "accept": ".csv",
                                            "reciever": "https://houtai.baidu.com/api/upload/file",
                                            description: "大小限制：4GB以下"
                                        },
                                        /*组合素材*/
                                        {
                                            "type": "text",
                                            "label": "文字内容：",
                                            labelClassName: "w120",
                                            "name": "remark",
                                            "visibleOn": 'this.ddd == "g"',
                                            placeholder: "请输入描述"
                                        },
                                        {
                                            "type": "file",
                                            "label": "上传视频：",
                                            labelClassName: "w120",
                                            "visibleOn": 'this.ddd == "g"',
                                            "name": "remark",
                                            "accept": ".csv",
                                            "reciever": "https://houtai.baidu.com/api/upload/file",
                                            description: "大小限制：4GB以下"
                                        },
                                        {
                                            "type": "combo",
                                            "name": "combo2",
                                            "label": "",
                                            "multiple": true,
                                            "visibleOn": 'this.ddd == "g"',
                                            labelClassName: "none",
                                            "maxLength": 3,
                                            addButtonText: "新增素材",
                                            "controls": [
                                                {
                                                    "name": "text",
                                                    "label": "文字内容：",
                                                    labelClassName: "w120 text-r",
                                                    inputClassName: "padder m-b",
                                                    className: "wb100",
                                                    "type": "text"
                                                },
                                                {
                                                    "type": "file",
                                                    "label": "上传视频：",
                                                    labelClassName: "w120 text-r",
                                                    inputClassName: "padder m-b",
                                                    "name": "remark",
                                                    "accept": ".csv",
                                                    "reciever": "https://houtai.baidu.com/api/upload/file",
                                                    description: "大小限制：4GB以下"
                                                }
                                            ]
                                        },
                                        /*H5素材*/
                                        {
                                            "type": "text",
                                            "label": "H5标题：",
                                            labelClassName: "w120",
                                            "name": "remark",
                                            "visibleOn": 'this.ddd == "h"',
                                            placeholder: "请输入标题"
                                        },
                                        {
                                            "type": "text",
                                            "label": "H5链接：",
                                            labelClassName: "w120",
                                            "name": "remark",
                                            "visibleOn": 'this.ddd == "h"',
                                            placeholder: "请输入链接"
                                        },
                                        {
                                            "type": "text",
                                            "label": "H5描述：",
                                            labelClassName: "w120",
                                            "name": "remark",
                                            "visibleOn": 'this.ddd == "h"',
                                            placeholder: "请输入描述"
                                        },
                                        {
                                            "type": "file",
                                            "label": "上传图片：",
                                            labelClassName: "w120",
                                            "name": "remark",
                                            "visibleOn": 'this.ddd == "h"',
                                            "accept": ".csv",
                                            "reciever": "https://houtai.baidu.com/api/upload/file",
                                            description: "大小限制：4GB以下"
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
                        "bulkActions",

                    ],
                    bulkActions:[
                        {
                            "label": "删除所选素材",
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
                            label: "素材类型",
                            name: "id",
                        },
                        {
                            name: "age",
                            label: "标题",
                        },
                        {
                            name: "gender",
                            label: "消息内容",
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
                                },
                                {
                                    type: "button",
                                    label: "下移",
                                    level: "primary",
                                },
                            ]
                        }
                    ]
                }
            ]
        },

    ]
};

export default schema2component(schema);