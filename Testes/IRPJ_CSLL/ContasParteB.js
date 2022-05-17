const loc = require ("../../page_objects/IRPJ_CSLL/ContasParteB");
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

    'Cadastrar Contas Parte B ': function (browser) {
        browser
            .clica(loc.btnBalancoBalancete)
            .clica(loc.CadastroContasPartB.btnContasPartB)
            .clica(loc.CadastroContasPartB.btnNovo)
            .setaTextField(loc.CadastroContasPartB.campoDescricao, "Conta B Auto")
            .setaNumberField(loc.CadastroContasPartB.campoTipoLctoCSLL, ["1", browser.Keys.ENTER])
            .setaNumberField(loc.CadastroContasPartB.campoTipoLctoIRPF, ["1", browser.Keys.ENTER])
            .clica(loc.CadastroContasPartB.btnSalvar)
            .aguardaToast("Registro salvo com sucesso")
    },
    
        'Finaliza o teste': function (browser) {
            browser
                .end();
    }


}

