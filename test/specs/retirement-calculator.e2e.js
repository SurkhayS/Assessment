import * as commonUI from '../utils/commonUI.js'
import RetirementCalculator from '../Pages/retirement-calculator.page.js';

describe('Securian Financial application verifications', () => {

    it('User should be able to navigate on retirement calculator', async () => {
        await commonUI.navigate("insights-tools/retirement-calculator.html");
        expect(await commonUI.getPageTitle()).toEqual("How Much to Save for Retirement | Securian Financial")
    });

    it('User should be able to submit form with all required fields filled in', async () => {
        await RetirementCalculator.enterValueInCurrentAgeTextField(40)
        await RetirementCalculator.enterValueInRetirementAgeTextField(68)
        await RetirementCalculator.enterValueInCurrentIncomeTextField(100000)
        await RetirementCalculator.enterValueInCurrentTotalSavingsTextField(500000)
        await RetirementCalculator.enterValueInCurrentAnnualSavingsTextField(10)
        await RetirementCalculator.enterValueInSavingsIncreaseRateTextField(25)
        await RetirementCalculator.clickOnCalculateButton()
        await RetirementCalculator.verifyAmountIs(833)

    });

    it('Additional Social Security fields should display/hide based on Social Security benefits toggle', async () => {
        await commonUI.navigate("insights-tools/retirement-calculator.html");
        await RetirementCalculator.enterValueInCurrentAgeTextField(40)
        await RetirementCalculator.enterValueInRetirementAgeTextField(68)
        await RetirementCalculator.enterValueInCurrentIncomeTextField(100000)
        await RetirementCalculator.enterValueInSpouseIncomeTextField(75000)
        await RetirementCalculator.enterValueInCurrentTotalSavingsTextField(500000)
        await RetirementCalculator.enterValueInCurrentAnnualSavingsTextField(10)
        await RetirementCalculator.enterValueInSavingsIncreaseRateTextField(25)
        await RetirementCalculator.switchTogleOnSocialSecurityIncome("Yes")
        await RetirementCalculator.verifyTextIsDisplayed("What is your marital")
    });

    it('User should be able to submit form with all fields filled in', async () => {
        await commonUI.navigate("insights-tools/retirement-calculator.html");
        await RetirementCalculator.enterValueInCurrentAgeTextField(40)
        await RetirementCalculator.enterValueInRetirementAgeTextField(68)
        await RetirementCalculator.enterValueInCurrentIncomeTextField(100000)
        await RetirementCalculator.enterValueInSpouseIncomeTextField(75000)
        await RetirementCalculator.enterValueInCurrentTotalSavingsTextField(500000)
        await RetirementCalculator.enterValueInCurrentAnnualSavingsTextField(10)
        await RetirementCalculator.enterValueInSavingsIncreaseRateTextField(25)
        await RetirementCalculator.switchTogleOnSocialSecurityIncome("Yes")
        await RetirementCalculator.verifyTextIsDisplayed("What is your marital")
        await RetirementCalculator.switchTogleOnMaritalStatus("Married")
        await RetirementCalculator.enterValueInSocialSecurityOverrideAmountTextField(4000)
        await RetirementCalculator.clickOnCalculateButton()
        await RetirementCalculator.verifyAmountIs(833)
    });

    it('User should be able to update default calculator values ', async () => {
        await commonUI.navigate("insights-tools/retirement-calculator.html");
        await RetirementCalculator.enterValueInCurrentAgeTextField(40)
        await RetirementCalculator.enterValueInRetirementAgeTextField(68)
        await RetirementCalculator.enterValueInCurrentIncomeTextField(100000)
        await RetirementCalculator.enterValueInSpouseIncomeTextField(75000)
        await RetirementCalculator.enterValueInCurrentTotalSavingsTextField(500000)
        await RetirementCalculator.enterValueInCurrentAnnualSavingsTextField(10)
        await RetirementCalculator.enterValueInSavingsIncreaseRateTextField(25)
        await RetirementCalculator.switchTogleOnSocialSecurityIncome("Yes")
        await RetirementCalculator.verifyTextIsDisplayed("What is your marital")
        await RetirementCalculator.switchTogleOnMaritalStatus("Married")
        await RetirementCalculator.enterValueInSocialSecurityOverrideAmountTextField(4000)
        await RetirementCalculator.clickOnAdjustDefaultValuesLink()
        await RetirementCalculator.enterValueInAdditionalIncomeTextField(500)
        await RetirementCalculator.enterValueInRetirementYearsTextField(20)
        await RetirementCalculator.switchTogleOnPostRetirementIncome("Yes")
        await RetirementCalculator.enterValueInFinalAnnualIncomeTextField(75)
        await RetirementCalculator.enterValueInPreRetirementInvestmentTextField(8)
        await RetirementCalculator.enterValueInPostRetirementInvestmentTextField(5)
        await RetirementCalculator.clickOnSaveButtonOnDefaultCalculatorWindow(5)
        await RetirementCalculator.clickOnCalculateButton()
        await RetirementCalculator.verifyAmountIs(833)
    });

});


