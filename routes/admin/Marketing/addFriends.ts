import schema2component from "../../../utils/schema2component";
import "../customer/group.scss"
const title = `<div class="wb100">
    <div  class="clAE">
        <span>首页</span>
        <span>/</span>
        <span >客户池</span>
        <span>/</span>
        <span class="cl34">批量加好友</span>
    </div>
       <div class="disFlex mt-15 text-c cl34">
        <h2 class=" fs18 fw6">批量加好友</h2>  
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
                            label: "导入添加好友",
                            level: "primary",
                            "actionType": "dialog",
                            columnClassName: "wb50",
                            "dialog": {
                                "title": "导入添加好友",
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
                                            className: "alertH34",
                                            "type": "alert",
                                            "body": [
                                                {
                                                    "type": "icon",
                                                    "icon": "info-circle",
                                                    className: "m-r cl-0F",
                                                },
                                                {
                                                    type:"tpl",
                                                    tpl: "注：建议每次少量添加或设置添加频率，避免微信封号"
                                                }
                                            ],
                                            "level": "info",
                                            showCloseButton: true
                                        },
                                        {
                                            "type": "file",
                                            "name": "file",
                                            "label": "上传模板：",
                                            labelClassName: "w120 text-r",
                                            "mode": "inline",
                                            className: "m-r",
                                            "accept": ".csv",
                                            "reciever": "https://houtai.baidu.com/api/upload/file"
                                        },
                                        {
                                            "mode": "inline",
                                            "type": "button",
                                            label: "下载模板",
                                            icon: "fa fa-download",
                                            iconClassName: "pull-left m-l-none m-r-sm",
                                            className:"tttt",
                                            inputClassName: "m-r-sm",
                                            desc: "大小限制：4GB以下"
                                        },
                                        {
                                            "type": "select",
                                            "label": "添加到微信：",
                                            labelClassName: "w120",
                                            "name": "ddd",
                                            placeholder: "请输入微信号",
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
                                            ],
                                        },
                                        {
                                            "type": "text",
                                            "label": "申请加好友话术：",
                                            labelClassName: "w120",
                                            "name": "remark",
                                            placeholder: "不超过30个汉字"
                                        },
                                        {
                                            "type": "select",
                                            "label": "加好友频率：",
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
                                            "type": "select",
                                            "label": "成功后打标：",
                                            labelClassName: "w120",
                                            "name": "fz",
                                            placeholder: "成功后打标",
                                            options: [
                                                {
                                                    "label": "C",
                                                    "value": "c"
                                                }
                                            ]
                                        },
                                        {
                                            "type": "date-range",
                                            "label": "开始结束时间：",
                                            "name": "gg",
                                            labelClassName: "w120",
                                            placeholder: "请选择时间范围"
                                        },
                                        {
                                            "type": "date-range",
                                            labelClassName: "w120",
                                            "label": "每日有效时间：",
                                            "name": "day",
                                            placeholder: "请选择时间范围"
                                        },
                                        {
                                            "name": "radios",
                                            "mode": "inline",
                                            "type": "radios",
                                            "label": "负责员工：",
                                            labelClassName: "w120 text-r",
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
                            "label": "任务执行时间段",
                            "name": "engine"
                        },
                        {
                            label: "操作员工"
                        },

                        {
                            name: "age",
                            label: "每日有效时段",
                        },

                        {
                            name: "gender",
                            label: "每轮好友数",
                        },

                        {
                            name: 'tel',
                            label: '每轮间隔(分钟)'
                        },

                        {
                            name: 'company',
                            label: '消息内容'
                        },
                        {
                            name: 'company',
                            label: '状态'
                        },
                        {
                            name: 'company',
                            label: '任务总数/完成数'
                        },
                        {
                            name: 'company',
                            label: '备注'
                        },
                        {
                            name: 'company',
                            label: '创建时间'
                        },
                        {
                            name: 'company',
                            label: '结果',
                            type: "link",
                            href: "/admin/Marketing/addFriendsDetails?id=${id}&name=${engine}",
                            className:"cl-0F",
                            body: "查看"
                        },
                        {
                            name: 'company',
                            label: '操作',
                            type: "tpl",
                            tpl: "删除"
                        }
                    ]
                }
            ]
        },

    ]
};

export default schema2component(schema);