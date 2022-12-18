import { client } from "../../router"

const categoryHandler = (msg, token) => {
    var result: any = {
        type: "carousel",
        contents: [
            {
                type: "bubble",
                body: {
                    type: "box",
                    layout: "vertical",
                    contents: [
                        {
                            type: "text",
                            text: "Transaction",
                            weight: "bold",
                            color: "#1DB446",
                            size: "sm"
                        },
                        {
                            type: "text",
                            text: "Category",
                            weight: "bold",
                            size: "xxl",
                            margin: "md"
                        },
                        {
                            type: "separator",
                            margin: "xxl"
                        },
                        {
                            type: "box",
                            layout: "vertical",
                            margin: "xxl",
                            spacing: "sm",
                            contents: [
                                {
                                    type: "box",
                                    layout: "horizontal",
                                    contents: [
                                        {
                                            type: "text",
                                            text: "f",
                                            size: "sm",
                                            color: "#555555",
                                            flex: 0
                                        },
                                        {
                                            type: "text",
                                            text: "Foods",
                                            size: "sm",
                                            color: "#111111",
                                            align: "end"
                                        }
                                    ]
                                },
                                {
                                    type: "box",
                                    layout: "horizontal",
                                    contents: [
                                        {
                                            type: "text",
                                            text: "d",
                                            size: "sm",
                                            color: "#555555",
                                            flex: 0
                                        },
                                        {
                                            type: "text",
                                            text: "Drinks",
                                            size: "sm",
                                            color: "#111111",
                                            align: "end"
                                        }
                                    ]
                                },
                                {
                                    type: "box",
                                    layout: "horizontal",
                                    contents: [
                                        {
                                            type: "text",
                                            text: "t",
                                            size: "sm",
                                            color: "#555555",
                                            flex: 0
                                        },
                                        {
                                            type: "text",
                                            text: "transportations",
                                            size: "sm",
                                            color: "#111111",
                                            align: "end"
                                        }
                                    ]
                                },
                                {
                                    type: "box",
                                    layout: "horizontal",
                                    contents: [
                                        {
                                            type: "text",
                                            text: "m",
                                            size: "sm",
                                            color: "#555555"
                                        },
                                        {
                                            type: "text",
                                            text: "Miscellaneous",
                                            size: "sm",
                                            color: "#111111",
                                            align: "end"
                                        }
                                    ]
                                },
                                {
                                    type: "box",
                                    layout: "horizontal",
                                    contents: [
                                        {
                                            type: "text",
                                            text: "s",
                                            size: "sm",
                                            color: "#555555"
                                        },
                                        {
                                            type: "text",
                                            text: "Snacks",
                                            size: "sm",
                                            color: "#111111",
                                            align: "end"
                                        }
                                    ]
                                },
                                {
                                    type: "box",
                                    layout: "horizontal",
                                    contents: [
                                        {
                                            type: "text",
                                            text: "o",
                                            size: "sm",
                                            color: "#555555"
                                        },
                                        {
                                            type: "text",
                                            text: "Online Shopping",
                                            size: "sm",
                                            color: "#111111",
                                            align: "end"
                                        }
                                    ]
                                },
                                {
                                    type: "box",
                                    layout: "horizontal",
                                    contents: [
                                        {
                                            type: "text",
                                            text: "a",
                                            size: "sm",
                                            color: "#555555"
                                        },
                                        {
                                            type: "text",
                                            text: "Alcohol",
                                            size: "sm",
                                            color: "#111111",
                                            align: "end"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                styles: {
                    footer: {
                        separator: true
                    }
                }
            }

        ]
    }

    return client.replyMessage(token, {
        type: "flex",
        altText: "Transaction Category",
        contents: result,
    });
}

export default categoryHandler