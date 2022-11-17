import { client } from "../../router"

const summaryHandler = (msg, token) => {
    var result: any = {
        type: "carousel",
        contents: [
            {
                type: "bubble",
                size: "nano",
                header: {
                    type: "box",
                    layout: "vertical",
                    contents: [
                        {
                            type: "text",
                            text: "In Progress",
                            color: "#ffffff",
                            align: "start",
                            size: "md",
                            gravity: "center"
                        },
                        {
                            type: "text",
                            text: "70%",
                            color: "#ffffff",
                            align: "start",
                            size: "xs",
                            gravity: "center",
                            margin: "lg"
                        },
                        {
                            type: "box",
                            layout: "vertical",
                            contents: [
                                {
                                    type: "box",
                                    layout: "vertical",
                                    contents: [
                                        {
                                            type: "filler"
                                        }
                                    ],
                                    width: "70%",
                                    backgroundColor: "#0D8186",
                                    height: "6px"
                                }
                            ],
                            backgroundColor: "#9FD8E36E",
                            height: "6px",
                            margin: "sm"
                        }
                    ],
                    backgroundColor: "#27ACB2",
                    paddingTop: "19px",
                    paddingAll: "12px",
                    paddingBottom: "16px"
                },
                body: {
                    type: "box",
                    layout: "vertical",
                    contents: [
                        {
                            type: "box",
                            layout: "horizontal",
                            contents: [
                                {
                                    type: "text",
                                    text: "Buy milk and lettuce before class",
                                    color: "#8C8C8C",
                                    size: "sm",
                                    wrap: true
                                }
                            ],
                            flex: 1
                        }
                    ],
                    spacing: "md",
                    paddingAll: "12px"
                },
                styles: {
                    footer: {
                        separator: false
                    }
                }
            },
            {
                type: "bubble",
                size: "nano",
                header: {
                    type: "box",
                    layout: "vertical",
                    contents: [
                        {
                            type: "text",
                            text: "In Progress",
                            color: "#ffffff",
                            align: "start",
                            size: "md",
                            gravity: "center"
                        },
                        {
                            type: "text",
                            text: "100%",
                            color: "#ffffff",
                            align: "start",
                            size: "xs",
                            gravity: "center",
                            margin: "lg"
                        },
                        {
                            type: "box",
                            layout: "vertical",
                            contents: [
                                {
                                    type: "box",
                                    layout: "vertical",
                                    contents: [
                                        {
                                            type: "filler"
                                        }
                                    ],
                                    width: "100%",
                                    backgroundColor: "#7D51E4",
                                    height: "6px"
                                }
                            ],
                            backgroundColor: "#9FD8E36E",
                            height: "6px",
                            margin: "sm"
                        }
                    ],
                    backgroundColor: "#A17DF5",
                    paddingTop: "19px",
                    paddingAll: "12px",
                    paddingBottom: "16px"
                },
                body: {
                    type: "box",
                    layout: "vertical",
                    contents: [
                        {
                            type: "box",
                            layout: "horizontal",
                            contents: [
                                {
                                    type: "text",
                                    text: "Buy milk and lettuce before class",
                                    color: "#8C8C8C",
                                    size: "sm",
                                    wrap: true
                                }
                            ],
                            flex: 1
                        }
                    ],
                    spacing: "md",
                    paddingAll: "12px"
                },
                styles: {
                    footer: {
                        separator: false
                    }
                }
            }
        ]
    }

    return client.replyMessage(token, {
        type: "flex",
        altText: "Day and Month Progress",
        contents: result,
    });
}

export default summaryHandler