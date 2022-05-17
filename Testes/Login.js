
module.exports = {

 'Loga no sistema': function (browser) {
       browser.url("http://desenvsb2.useall.com.br/contabil/")
            .waitForElementVisible('css selector', "input[id='usuario']", "O campo usuário não foi encontrado")
            .setValue('css selector', "input[id='usuario']", "adm.pc2@useall.com.br")
            .setValue('css selector', "input[id='senha']", "!@#Sandbox2020!@#")
            .click('css selector', "input[value='Entrar no sistema']")
            .pause(3000)
            .click('css selector',"span[id='button-1013-btnInnerEl']")
            .pause(2000)

      }
}
