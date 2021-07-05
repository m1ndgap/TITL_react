export const reducer = (state, action) => {
    switch (action.type) {
        case "toggle_goals":
            return {
                ...state,
                active: !state.active,
                title: "goals",
                theme: "dark",
                text: "Get in touch",
                link: true
            }
        case "toggle_briefs":
            return {
                ...state,
                active: !state.active,
                title: "briefs",
                theme: "dark",
                text: "Get in touch",
                link: true
            }
        case "toggle_wazup":
            return {
                ...state,
                active: !state.active,
                title: "WAZUP",
                theme: "dark",
                text: "coming soon",
                link: false
            }
        case "toggle_nana digital":
            return {
                ...state,
                active: !state.active,
                title: "NANA DIGITAL",
                theme: "dark",
                text: "coming soon",
                link: false
            }
        case "toggle_klearcard":
            return {
                ...state,
                active: !state.active,
                title: "KlearCard",
                theme: "dark",
                text: "coming soon",
                link: false
            }
        case "toggle_1":
            return {
                ...state,
                active: !state.active,
                title: "2 cases",
                theme: "light",
                text: "coming soon",
                link: false
            }
        case "toggle_2":
            return {
                ...state,
                active: !state.active,
                title: "2 cases",
                theme: "light",
                text: "coming soon",
                link: false
            }
        case "toggle_3":
            return {
                ...state,
                active: !state.active,
                title: "3 cases",
                theme: "light",
                text: "coming soon",
                link: false
            }
        case "toggle_4":
            return {
                ...state,
                active: !state.active,
                title: "3 cases",
                theme: "light",
                text: "coming soon",
                link: false
            }
        case "toggle_clear":
            return {
                ...state,
                active: !state.active,
                title: "",
                theme: "",
                text: "",
                link: false
            }
        default:
            return state
    }
}

export const initialState = {
    active: false,
    text: "",
    title: "",
    theme: "",
    link: false
}
