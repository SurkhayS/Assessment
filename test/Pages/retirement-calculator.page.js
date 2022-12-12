import commonUI from '../utils/commonUI.js';

class RetirementCalculator {

    //Elements
    get currentAgeTextField() {
        return $("//input[@id='current-age']");
    }

    get retirementAgeTextField() {
        return $("//input[@id='retirement-age']");
    }

    get currentIncomeTextField() {
        return $("//input[@id='current-income']");
    }

    get spouseIncomeTextField() {
        return $("//input[@id='spouse-income']");
    }

    get currentTotalSavingsTextField() {
        return $("//input[@id='current-total-savings']");
    }

    get currentAnnualSavingsTextField() {
        return $("//input[@id='current-annual-savings']");
    }

    get savingsIncreaseRateTextField() {
        return $("//input[@id='savings-increase-rate']");
    }

    get socialSecurityincomeYesTogle() {
        return $("[for='yes-social-benefits']");
    }
    get socialSecurityincomeNoTogle() {
        return $("[for='no-social-benefits']");
    }

    get maritalStatusSingleTogle() {
        return $("[for='married']"); 
    }

    get maritalStatusMarriedTogle() {
        return $("[for='married']");
    }

    get socialSecurityOverrideAmountTextField() {
        return $("//input[@id='social-security-override']");
    }

    get calculateButton() {
        return $("//button[@data-tag-id='submit']");
    }

    get adjustDefaultValuesLink() {
        return $("//a[@data-target='#default-values-modal']");
    }

    get additionalIncomeTextBox() {
        return $("//input[@id='additional-income']");
    }
    
    get retirementIncomeTextBox() {
        return $("//input[@id='retirement-duration']");
    }

    get retirementIncomeTextBox() {
        return $("//input[@id='retirement-duration']");
    }

    get postRetirementIncomeYesTogle() {
        return $("[for='include-inflation']");
    }

    get postRetirementIncomeNoTogle() {
        return $("[for='exclude-inflation']");
    }

    get finalAnnualIncomeTextBox() {
        return $("//input[@id='retirement-annual-income']");
    }

    get preRetirementInvestmentTexBox() {
        return $("//input[@id='pre-retirement-roi']");
    }

    get postRetirementInvestmentTexBox() {
        return $("//input[@id='post-retirement-roi']");
    }

    get saveButtonOnDefaultCalculatorWindow() {
        return $("//button[@onclick='savePersonalizedValues();']");
    }

    //implementation
    async enterValueInCurrentAgeTextField(value) {
        await commonUI.setValueWithSelector(value, this.currentAgeTextField)
    }

    async enterValueInRetirementAgeTextField(value) {
        await commonUI.setValueWithSelector(value, this.retirementAgeTextField)
    }

    async enterValueInCurrentIncomeTextField(value) {
        await commonUI.clickOnElement(this.currentIncomeTextField)
        await commonUI.setValueWithSelector(value, this.currentIncomeTextField)
    }

    async enterValueInSpouseIncomeTextField(value) {
        await commonUI.clickOnElement(this.spouseIncomeTextField)
        await commonUI.setValueWithSelector(value, this.spouseIncomeTextField)
    }

    async enterValueInCurrentTotalSavingsTextField(value) {
        await commonUI.clickOnElement(this.currentTotalSavingsTextField)
        await commonUI.setValueWithSelector(value, this.currentTotalSavingsTextField)
    }

    async enterValueInCurrentAnnualSavingsTextField(value) {
        await commonUI.setValueWithSelector(value, this.currentAnnualSavingsTextField)
    }

    async enterValueInSavingsIncreaseRateTextField(value) {
        await commonUI.setValueWithSelector(value, this.savingsIncreaseRateTextField)
    }

    async switchTogleOnSocialSecurityIncome(option) {
        switch (option) {
            case "Yes":
                await commonUI.clickOnElement(this.socialSecurityincomeYesTogle)
                break;
            case "No":
                await commonUI.clickOnElement(this.socialSecurityincomeNoTogle)
                break;
        }
    }

    async switchTogleOnMaritalStatus(option) {
        switch (option) {
            case "Married":
                await browser.waitUntil(() => this.maritalStatusMarriedTogle.isClickable())
                await commonUI.clickOnElement(this.maritalStatusMarriedTogle)
                break;
            case "Single":
                await browser.waitUntil(() => this.maritalStatusMarriedTogle.isClickable())
                await commonUI.clickOnElement(this.maritalStatusSingleTogle)
                break;
        }
    }

    async enterValueInSocialSecurityOverrideAmountTextField(value) {
        await commonUI.clickOnElement(this.socialSecurityOverrideAmountTextField)
        await commonUI.enterValueWithSelector(value, this.socialSecurityOverrideAmountTextField)
    }

    async clickOnCalculateButton() {
        await browser.waitUntil(() => this.calculateButton.isClickable())
        await commonUI.clickOnElement(this.calculateButton)
    }

    async verifyAmountIs(expectedAmount) {
        let amountFromResults = await $("//p[@id='result-message']/strong").getText()
        let amountFromResultsInt = amountFromResults.substring(1, amountFromResults.indexOf(" "))
        expect(parseInt(amountFromResultsInt)).toEqual(expectedAmount)
    }

    async verifyTextIsDisplayed(expectedText) {
        let textFromWebPage = await $('#marital-status-label').getHTML(false)
        expect(textFromWebPage).toContain(expectedText)
    }
    
    async clickOnAdjustDefaultValuesLink() {
        await commonUI.clickOnElement(this.adjustDefaultValuesLink)
    }

    async enterValueInAdditionalIncomeTextField(value) {
        await commonUI.clickOnElement(this.additionalIncomeTextBox)
        await commonUI.enterValueWithSelector(value, this.additionalIncomeTextBox)
    }

    async enterValueInRetirementYearsTextField(value) {
        await commonUI.enterValueWithSelector(value, this.retirementIncomeTextBox)
    }
    
    async switchTogleOnPostRetirementIncome(option) {
        switch (option) {
            case "Yes":
                await commonUI.clickOnElement(this.postRetirementIncomeYesTogle)
                break;
            case "No":
                await commonUI.clickOnElement(this.postRetirementIncomeNoTogle)
                break;
        }
    }

    async enterValueInFinalAnnualIncomeTextField(value) {
        await commonUI.clickOnElement(this.finalAnnualIncomeTextBox)
        await commonUI.enterValueWithSelector(value, this.finalAnnualIncomeTextBox)
    }

    async enterValueInPreRetirementInvestmentTextField(value) {
        await commonUI.clickOnElement(this.preRetirementInvestmentTexBox)
        await commonUI.enterValueWithSelector(value, this.preRetirementInvestmentTexBox)
    }
    
    async enterValueInPostRetirementInvestmentTextField(value) {
        await commonUI.clickOnElement(this.postRetirementInvestmentTexBox)
        await commonUI.enterValueWithSelector(value, this.postRetirementInvestmentTexBox)
    }
    
    async clickOnSaveButtonOnDefaultCalculatorWindow() {
        await commonUI.clickOnElement(this.saveButtonOnDefaultCalculatorWindow)
    }
    

    

}

export default new RetirementCalculator();
