const loc = require ("../../page_objects/CONTABIL/LanctoContabilCC");
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
            .clica(loc.TelaLancamentoContabil.PartContraPartida.contaCaixa)
            .setaNumberField(loc.TelaLancamentoContabil.PartContraPartida.campoDebitar, "500")
            .setaNumberField(loc.TelaLancamentoContabil.PartContraPartida.campoHistoricoPadrao, ["1", browser.Keys.ENTER])
    },

    'Abre a tela de rateio de centro de custos': function (browser) {
         browser
            .clica(loc.TelaLancamentoContabil.PartContraPartida.btnCC)
            .setaNumberField(loc.TelaLancamentoContabil.PartContraPartida.TelaRateioCC.campoCC, ["1", browser.Keys.TAB])
            .setaNumberField(loc.TelaLancamentoContabil.PartContraPartida.TelaRateioCC.campoPercentualcc, ["100", browser.Keys.TAB])
            .pause(500)
            .setaTextField(loc.TelaLancamentoContabil.PartContraPartida.TelaRateioCC.campoHistorico, "TesteAuto")
            .clica(loc.TelaLancamentoContabil.PartContraPartida.TelaRateioCC.btnConfirmar)
            .clica(loc.TelaLancamentoContabil.PartContraPartida.TelaRateioCC.btnSalvar)
    },

    'Conta partida e rateio do cc': function (browser) {
         browser
            .clica(loc.TelaLancamentoContabil.PartContraPartida.btnSalvarlancto)
            .pause(500)
            .setValue('css selector', "input[data-test-id='LoteLancto.CodigoContaCtb']", ["70"])
            .aguardaListagem()
            .clica(loc.TelaLancamentoContabil.PartContraPartida.contaContrapartida)
            .pause(1000)
            .clica(loc.TelaLancamentoContabil.PartContraPartida.btnCC)
            .setaNumberField(loc.TelaLancamentoContabil.PartContraPartida.TelaRateioCC.campoCC, ["2", browser.Keys.TAB])
            .setaNumberField(loc.TelaLancamentoContabil.PartContraPartida.TelaRateioCC.campoPercentualcc, ["100", browser.Keys.TAB])
            .pause(500)
            .setaTextField(loc.TelaLancamentoContabil.PartContraPartida.TelaRateioCC.campoHistorico, "TesteAuto")
            .clica(loc.TelaLancamentoContabil.PartContraPartida.TelaRateioCC.btnConfirmar)
            .clica(loc.TelaLancamentoContabil.PartContraPartida.TelaRateioCC.btnSalvar)
            .pause(500)
    },

    'Fecha a tela de rateio de centro de custos': function (browser) {
        browser
            .clica(loc.TelaLancamentoContabil.PartContraPartida.btnSalvarlancto)
            .pause(1000)
            .clica(loc.TelaLancamentoContabil.PartContraPartida.btnCancelar)
            .clica(loc.TelaLancamentoContabil.btnFecharLote)
            .aguardaToast("Lançamento salvo com sucesso")
    },

    'Finaliza o teste': function (browser) {
        browser
            .end();
    }

}