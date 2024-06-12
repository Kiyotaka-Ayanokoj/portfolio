import Config from "../Config";

const forward = (to) => {
    window.open(to, '_blank');
};

const getData = (name) => {
    const value = localStorage.getItem(name);
    return value !== null ? value : null;
}

const setData = (key, val) => {
    localStorage.setItem(key, val);
}

const changeLang = (newLang) => {
    Config.lang = newLang
}

export { forward, getData, setData, changeLang };