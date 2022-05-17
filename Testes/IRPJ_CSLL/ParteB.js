const loc = require ("../../page_objects/IRPJ_CSLL/ParteB");
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
            .clica(loc.CadastroParteB.btnParteB)
            .aguardaListagem()
            .clica(loc.CadastroParteB.btnNovo)
            .aguardaFoco("input[data-test-id='ParteBSaldo.CodigoLlrParteB']")
            .setaNumberField(loc.CadastroParteB.campoContaParteB, ["1", browser.Keys.ENTER])
            .clica(loc.CadastroParteB.btnImportar)
            .pause(2000)
            .clica(loc.CadastroParteB.btnSalvar)
    },

    'Finaliza o teste': function (browser) {
        browser
            .end();
    }

}