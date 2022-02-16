const initialstate = "general";
const newsChange = (state = initialstate, action) => {
    switch(action.type) {
        case 'NewsData' : return action.payload;
        default : return state;
    }
}

export default newsChange;