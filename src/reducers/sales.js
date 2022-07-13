const reducer = (data = [], action) => {
    switch (action.type) {
        case "POST":
            return data
        default:
            return data;
    }
}

export default reducer