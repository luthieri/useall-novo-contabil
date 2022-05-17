const loc = require ("../../page_objects/CONTABIL/HistoricoContabil");
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
            .pause(2000)
    },

    'Acessa modulo contabil': function (browser) {
        browser
            .clica(loc.btnModContab)
    },

    'Cadastra novo historico contabil': function (browser) {
        browser
            .clica(loc.TelaHistoricoContabil.btnHistoricoContabil)
            .clica(loc.TelaHistoricoContabil.btnNovo)
            .setaTextField(loc.TelaHistoricoContabil.campoDescrição, "Teste auto")
            .clica(loc.TelaHistoricoContabil.btnSalvar,500)
            .aguardaToast("Registro salvo com sucesso")

    },

    'Finaliza o teste': function (browser) {
        browser.end();
    }

}