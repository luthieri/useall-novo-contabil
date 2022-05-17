const loc = require ("../../page_objects/IRPJ_CSLL/BaseNegativaCSLL");
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

    'Acessa modulo IRPJ': function (browser) {
        browser
            .clica(loc.btnModIRPJCSLL)
            .pause(1000)
    },

    'Cadastra Parte B': function (browser) {
        browser
            .clica(loc.btnBalancoBalancete)
            .clica(loc.CadastroBaseNegativa.btnBasenegativa)
            .aguardaListagem()
            .clica(loc.CadastroBaseNegativa.btnNovo)
            .aguardaFoco("input[data-test-id='BaseNegativaSaldo.CodigoLlrParteB']")
            .setaNumberField(loc.CadastroBaseNegativa.campoContaParteB, ["1", browser.Keys.ENTER])
            .clica(loc.CadastroBaseNegativa.btnImportar)
            .pause(2000)
            .clica(loc.CadastroBaseNegativa.btnSalvar)
    },

    'Finaliza o teste': function (browser) {
        browser
            .end();
    }

}