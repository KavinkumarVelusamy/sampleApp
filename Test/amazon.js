module.exports={
        'Test1':function(browser){
            browser.url("https://www.amazon.in")
            .maximizeWindow()
            .pause(3000)
            .setValue('#twotabsearchtextbox','Monile Phone')
            .pause(3000)
            .click('#nav-search-submit-button')
            .pause(3000)
        },
        'Test2':function(browser){
            browser.click('xpath',"//span[text()='Samsung']")
            .pause(2000)
        }
}