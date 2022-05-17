const loc = require ("../../page_objects/CONTABIL/TransferenciadeSaldos");
const url = require ("../../urls");
const users = require ("../../users");
const esquema = require ("../../esquemaBanco");

module.exports = {

    'Loga no sistema': function (browser) {
        browser
            .url(url.CTB)
            .login({ usuario: users.user.usuario, senha: users.password.senha, esquemaBanco: esquema.BASE})
            .pause(500)
            .click('css selector',"span[id='button-1013-btnInnerEl']")
            .pause(500)
    },
    
    'Acessa modulo contabil': function (browser) {
        browser
            .clica(loc.btnModContab)
    },

    'Cadastro de transferencia': function (browser) {
        browser
            .clica(loc.CadastroTransfdeSaldo.btnMaisopcoes)
            .clica(loc.CadastroTransfdeSaldo.btnTransfmensal)
            .clica(loc.CadastroTransfdeSaldo.btnNovo)
            .setaNumberField(loc.CadastroTransfdeSaldo.campoTransMensal, ["1", browser.Keys.ENTER])
            .pause(500)
            .setaNumberField(loc.CadastroTransfdeSaldo.campoMesAno, "012021")
            .setaNumberField(loc.CadastroTransfdeSaldo.campoLote, "1234")
            .setaNumberField(loc.CadastroTransfdeSaldo.campoHistorico, ["1", browser.Keys.ENTER])
            .pause(500)
            .clica(loc.CadastroTransfdeSaldo.btnSalvar)
            .aguardaToast("Registro salvo com sucesso")
    },

    'Finaliza o teste': function (browser) {
        browser
            .end();
    }

}