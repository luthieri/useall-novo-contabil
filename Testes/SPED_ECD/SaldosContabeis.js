const loc = require ("../../page_objects/SPED ECD/SaldosContabeis");
const url = require ("../../urls");
const users = require ("../../users");
const esquema = require ("../../esquemaBanco");

module.exports = {

    'Loga no sistema': function (browser) {
        browser
            .url(url.CTB)
            .login({ usuario: users.user.usuario, senha: users.password.senha})
            .pause(500)
            .click('css selector',"span[id='button-1013-btnInnerEl']")
            .pause(500)
    },
    
    'Acessa modulo contabil': function (browser) {
        browser
            .clica(loc.btnModContab)
    },

    'Acessa modulo sped': function (browser) {
        browser
            .clica(loc.btnModSped)
    },

    'Cadastro saldos contabeis': function (browser) {
        browser
            .clica(loc.CadastroSaldosContabil.btnSaldosContabeis)
            .clica(loc.CadastroSaldosContabil.btnNovo)
            .setaNumberField(loc.CadastroSaldosContabil.campoData, "012021")
            .setaNumberField(loc.CadastroSaldosContabil.campoValor, "500")
            .setaNumberField(loc.CadastroSaldosContabil.campoContaContabil, ["50", browser.Keys.ENTER])
            .pause(500)
            .setaNumberField(loc.CadastroSaldosContabil.campoCC, ["1", browser.Keys.ENTER])
            .pause(500)
            .clica(loc.CadastroSaldosContabil.btnSalvar)
            .aguardaToast("Registro salvo com sucesso")
    },

    'Finaliza o teste': function (browser) {
        browser
            .end();
    }

}