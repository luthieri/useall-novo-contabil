const loc = require ("../../page_objects/SPED ECD/PlanoReferencial");
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

    'Cadastra o Plano Referencial': function (browser) {
        browser
            .clica(loc.CadastroPlanoReferencial.btnPlanodeContasReferencial)
            .clica(loc.CadastroPlanoReferencial.btnNovo)
            .setaTextField(loc.CadastroPlanoReferencial.campoDescricao, "Plano Teste")
            .clica(loc.CadastroPlanoReferencial.campoInstituicao)
            .aguardaListagem()
            .clica(loc.CadastroPlanoReferencial.tipoPlano)
            .pause(500)
            .clica(loc.CadastroPlanoReferencial.btnSalvar)
            .aguardaToast("Registro salvo com sucesso")
    },

    'Finaliza o teste': function (browser) {
        browser
            .end();
    }

}