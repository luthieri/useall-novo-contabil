const loc = require ("../../page_objects/CONTABIL/ApuracaoResultado");
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

    'Cadastro da apuracao': function (browser) {
        browser
            .clica(loc.Apuracaoresultado.TelaApuracaoResul)
            .clica(loc.Apuracaoresultado.btnMaisOpcoes)
            .clica(loc.Apuracaoresultado.btnGerarApuracao)
            .setaNumberField(loc.Apuracaoresultado.campoAno, "2021")
            .setaNumberField(loc.Apuracaoresultado.campoHistorico, "1")
            .aguardaListagem()
            .clica(loc.Apuracaoresultado.btnOK)
    },

    'Finaliza o teste': function (browser) {
        browser
            .end();
    }


}