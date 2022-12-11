export const addToLocatStorage =(key, value)=>{
    window.localStorage.setItem(key, JSON.stringify())



}


export const getFromLocalStorage = (key)=>{
    return JSON.parse(window.localStorage.getItem(key)) || []
}