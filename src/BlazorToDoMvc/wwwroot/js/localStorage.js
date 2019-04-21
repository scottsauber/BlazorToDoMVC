// You cannot call DOM API's directly from Blazor, you have to wrap them in your own function.

setItemFromLocalStorage = (key, value) => {
    console.log(value);
    localStorage.setItem(key, value);
};

getItemFromLocalStorage = (key, value) => {
    return localStorage.getItem(key);
};