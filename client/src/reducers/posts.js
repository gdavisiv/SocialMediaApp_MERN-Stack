//Reducer is a function that is equal to a function that accepts 
//a STATE and a FUNCTION
const reducer = (posts = [], action) => {
 switch (action.type) {
    case 'FETCH_ALL':
        return action.payload;
    case 'CREATE':
        return [...posts, action.payload];
    default:
        return posts;
 }
}