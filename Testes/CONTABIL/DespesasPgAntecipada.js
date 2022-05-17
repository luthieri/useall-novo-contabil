const loc = require ("../../page_objects/CONTABIL/DespesasPgAntecipada");
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

    'Cadastra a despesa': function (browser) {
        browser
            .clica(loc.TelaDespesasPgAntecipada.btnDespesasAntecipadas)
            .clica(loc.TelaDespesasPgAntecipada.btnNovo)
            .setValue('css selector', "input[data-test-id='DespesaPagaAntecip.CodigoContaCtbDespesa']", ["50"])
            .aguardaListagem()
            .clica(loc.TelaDespesasPgAntecipada.contaCaixa)
            .setValue('css selector', "input[data-test-id='DespesaPagaAntecip.CodigoContaCtbDespesaAnt']", ["50", browser.Keys.ENTER])
            .clica(loc.TelaDespesasPgAntecipada.valorTotal)
            .setaNumberField(loc.TelaDespesasPgAntecipada.valorTotal, "500")
            .setaNumberField(loc.TelaDespesasPgAntecipada.mesInicial, "012021")
            .setaNumberField(loc.TelaDespesasPgAntecipada.numeroParcelas, "5")
            .pause(500)
            .clica(loc.TelaDespesasPgAntecipada.simTelaconfir)
            .pause(500)
            .setaNumberField(loc.TelaDespesasPgAntecipada.histoContabil, ["1", browser.Keys.ENTER])
            .setaCheckbox("input[data-test-id='DespesaPagaAntecip.GeraLanctoCdc']", true)
            .clica(loc.TelaDespesasPgAntecipada.btnSalvar)
            .aguardaToast("Registro salvo com sucesso")
    },

    'Finaliza o teste': function (browser) {
        browser
            .clica(loc.TelaDespesasPgAntecipada.bntCancelar)
            .end();
    }


}