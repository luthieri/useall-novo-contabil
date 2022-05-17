const loc = require ("../../page_objects/IRPJ_CSLL/ResultadoContabil");
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

    'Cadastra Resultado Contabil': function (browser) {
        browser
            .clica(loc.btnBalancoBalancete)
            .clica(loc.CadastroResultadoContabil.btnResulContabil)
            .clica(loc.CadastroResultadoContabil.btnNovo)
            .setaTextField(loc.CadastroResultadoContabil.campoDescricao, "Resultado Contabil auto")
            .setaComboBox("input[data-test-id='Resultado.Ativo']", "IRPJ/CSLL")
            .setaNumberField(loc.CadastroResultadoContabil.campoTipoCSLL, ["1", browser.Keys.ENTER])
            .setaNumberField(loc.CadastroResultadoContabil.campoTipoIRPJ, ["1", browser.Keys.ENTER])
            .clica(loc.CadastroResultadoContabil.btnSalvar)
            .aguardaToast("Registro salvo com sucesso")
            .clica(loc.CadastroResultadoContabil.btnCancelar)
    },

    'Exclui registro': function (browser) {
        browser
            .removeItemSearchFieldMulti(loc.CadastroResultadoContabil.gridResultadoContabil, "Resultado Contabil auto")
    },

    'Finaliza o teste': function (browser) {
        browser
            .end();
    }


}