import schema2component from "../../../utils/schema2component";
import "../customer/group.scss"
const title = `<div class="wb100">
    <div  class="clAE">
        <span>首页</span>
        <span>/</span>
        <span >营销</span>
        <span>/</span>
        <span >批量群发</span>
        <span>/</span>
        <span class="cl34">群发明细</span>
    </div>
       <div class="disFlex mt-15 text-c cl34">
        <h2 class=" fs18 fw6">群发明细</h2>  
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
                            "type": "link",
                            href: "/admin/Marketing/MassHair",
                            body: [
                                {
                                    type:"icon",
                                    icon: "angle-left",
                                    className: "m-r-xs fs18"
                                },
                                {
                                    type:"tpl",
                                    tpl: "${name}",
                                    className: "fs18 fw6"
                                }
                            ]
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
                            "name": "id"
                        },
                        {
                            label: "微信号"
                        },

                        {
                            name: "age",
                            label: "微信备注",
                        },

                        {
                            name: "gender",
                            label: "客户姓名",
                        },

                        {
                            name: "gender",
                            label: "创建员工",
                        },
                        {
                            name: "gender",
                            label: "所属部门",
                        },
                        {
                            name: "gender",
                            label: "群好友数",
                        },
                        {
                            name: "gender",
                            label: "消息内容",
                        },
                        {
                            name: 'company',
                            label: '执行时间'
                        },
                        {
                            name: 'company',
                            label: '执行状态'
                        }
                    ]
                }
            ]
        },

    ]
};

export default schema2component(schema);