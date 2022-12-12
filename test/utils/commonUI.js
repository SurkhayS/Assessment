export const open = async() => {
    return browser.url(process.env.PROD_LINK)
}

export const navigate = async(path) => {
    return browser.url(process.env.PROD_LINK + `/${path}`)
}

export const getPageTitle = async() => {
    return await browser.getTitle();
}

export const clickOnElement = async(selector) => {
    await selector.waitForDisplayed();
    await selector.click();
}

export const enterValueWithSelector = async(value, selector) => {
    await selector.waitForDisplayed()
    await selector.addValue(value);
}

export const setValueWithSelector = async(value, selector) => {
    await selector.waitForDisplayed()
    await selector.setValue(value);
}

export default {
    open,
    navigate,
    clickOnElement,
    enterValueWithSelector,
    setValueWithSelector
};