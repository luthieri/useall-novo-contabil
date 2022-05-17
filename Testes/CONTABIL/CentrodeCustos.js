const loc = require ("../../page_objects/CONTABIL/CentrodeCustos");
const url = require ("../../urls");
const users = require ("../../users");
const esquema = require ("../../esquemaBanco");
const { createFromSelector } = require("nightwatch/lib/element");
const { isSelectorObject } = require("nightwatch/lib/element/command");

module.exports = {

    'Loga no sistema': function (browser) {
        browser
            .url(url.CTB)
            .login({ usuario: users.user.usuario, senha: users.password.senha})
            .pause(1000)
            .click('css selector',"span[id='button-1013-btnInnerEl']")
            .pause(2000)
    },

    'Acessa modulo contabil': function (browser) {
        browser
            .clica(loc.btnModContab)
    },


    'Cadastra Centro de Custos': function (browser) {
        browser
            .clica(loc.TelaCentrodeCustos.btnCentrodeCustos)
            .click('css selector', "div[class='x-panel-body x-grid-with-col-lines x-grid-no-row-lines x-grid-body x-panel-body-default x-closable x-panel-body-closable x-panel-body-default-closable x-panel-body-default x-panel-body-default-closable x-noborder-rl']")
            .clica(loc.TelaCentrodeCustos.btnNovo)
            .setaTextField(loc.TelaCentrodeCustos.campoDescrição, "Teste auto")
            .clica(loc.TelaCentrodeCustos.btnSalvar,500)
            .aguardaToast("Registro salvo com sucesso")

    },

    'Finaliza o teste': function (browser) {
        browser.end();
    }

}