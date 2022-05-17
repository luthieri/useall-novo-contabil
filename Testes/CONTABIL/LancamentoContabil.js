const loc = require ("../../page_objects/CONTABIL/LancamentoContabil");
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

    'Cadastra o lançamento contabil': function (browser) {
        browser
            .clica(loc.TelaLancamentoContabil.btnLancamentos)
            .clica(loc.TelaLancamentoContabil.btnNovo)
            .pause(500)
            .setValue('css selector', "input[data-test-id='Lote.NumeroDoc']", ["12345"])
            .clica(loc.TelaLancamentoContabil.bntIncluir)
            .setValue('css selector', "input[data-test-id='LoteLancto.CodigoContaCtb']", ["50"])
            .aguardaListagem()
            .clica(loc.TelaLancamentoPartContraPartida.contaCaixa)
            .setaNumberField(loc.TelaLancamentoPartContraPartida.campoDebitar, "500")
            .setaNumberField(loc.TelaLancamentoPartContraPartida.campoHistoricoPadrao, ["1", browser.Keys.ENTER])    
            .clica(loc.TelaLancamentoPartContraPartida.btnSalvarlancto)
            .aguardaFoco("input[data-test-id='LoteLancto.CodigoContaCtb']")
            .setaNumberField(loc.TelaLancamentoPartContraPartida.campoContaContabil, ["70", browser.Keys.ENTER])
            .clica(loc.TelaLancamentoPartContraPartida.btnSalvarlancto)
            .pause(1000)
            .clica(loc.TelaLancamentoPartContraPartida.btnCancelar)
            .clica(loc.TelaLancamentoContabil.btnFecharLote)
            .aguardaToast("Lançamento salvo com sucesso")

    },

    'Finaliza o teste': function (browser) {
        browser
            .end();
    }

}