const loc = require ("../page_objects/CadastroContaContabil");
const url = require ("../../urls");
const users = require ("../../users");
const esquema = require ("../../esquemaBanco");

module.exports = {

    'Loga no sistema': function (browser) {
        browser
            .url(url.CTB)
            .login({ usuario: users.user.usuario, senha: users.password.senha, esquemaBanco: esquema.BASE })
            .pause(1000)
            .click('css selector',"span[id='button-1013-btnInnerEl']")
            .pause(500)
    },
    
    'Acessa modulo contabil': function (browser) {
        browser
            .clica(loc.btnModContab)
    
    },

    'Cadastra nova conta contabil': function (browser) {
        browser
            .clica(loc.TelaCadastroContaContabil.btnContasContabeis)
            .click('css selector',"div[class='x-panel-body x-grid-with-col-lines x-grid-no-row-lines x-grid-body x-panel-body-default x-closable x-panel-body-closable x-panel-body-default-closable x-panel-body-default x-panel-body-default-closable x-noborder-rl']")
            .clica(loc.TelaCadastroContaContabil.btnNovo)
            .setaTextField(loc.TelaCadastroContaContabil.campoDescri, "Teste Auto")
            .clica(loc.TelaCadastroContaContabil.campoNaturezaCont, [browser.Keys.DOWN, browser.Keys.ENTER])
            .clica(loc.TelaCadastroContaContabil.btnSalvar)
            .pause(200)
            .aguardaToast("Registro salvo com sucesso")
    },

    'Finaliza o teste': function (browser) {
        browser
            .end();
    }
 
}

