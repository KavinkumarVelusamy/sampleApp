module.exports={
        'jacana':function(browser){
            browser.url("https://www.amazon.in")
            .maximizeWindow()
            .pause(3000)
            .setValue('#twotabsearchtextbox','Monile Phone')
            .pause(3000)
            .click('#nav-search-submit-button')
        }
}