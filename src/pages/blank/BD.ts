
export var mockBD = [
    {
        type:"label",
        label: "testeL",
        button:null,
        card: null
    },
    {
        type: "button",        
        label: "testeB",
        button: {
            label: "testeBBB",
            icon: "add",
            color: "dark",
            outline: true,
            left: true,
            block: true
        },
        card: null
    },
    {
        type: "button",
        label: "testeB",
        button: {
            label: "testeBBB 22",
            icon: "add",
            color: "danger",
            block: true,
            outline: false,
            left: false
        },
        card: null
    },
    {
        type: "card",        
        label: "teste",
        button: null,
        card: {
            header:"Card Header",
            content:"Card Content"
        }
    },
    {
        type: "label",        
        label: "testeL1",
        button: null,
        card: null
    }
]