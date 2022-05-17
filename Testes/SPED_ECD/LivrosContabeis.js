const loc = require ("../../page_objects/SPED ECD/LivrosContabeis");
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
            .pause(1000)
    },

    'Acessa modulo sped': function (browser) {
        browser
            .clica(loc.btnModSped)
    },

    'Cadastro do Livro Contabil': function (browser) {
        browser
            .clica(loc.CadastroLivroContabil.btnLivrosContabil)
            .clica(loc.CadastroLivroContabil.btnNovo)
            .clica(loc.CadastroLivroContabil.campoDtFinal)
            .clica(loc.CadastroLivroContabil.opcaoData)
            .pause(500)
            .clica(loc.CadastroLivroContabil.btnInserir)
            .aguardaFoco(loc.CadastroLivroContabil.AbaEmpresa.campoEscrCentralizada)
            .clica(loc.CadastroLivroContabil.AbaEmpresa.campoSitEspecial)
            .click('xpath', "//li[text()='Nenhuma']")
            .setaNumberField(loc.CadastroLivroContabil.AbaEmpresa.campoDtEnceSocial, "01012021")
            .setaNumberField(loc.CadastroLivroContabil.AbaEmpresa.campoArquiv, "01012021")
            .setaNumberField(loc.CadastroLivroContabil.AbaEmpresa.campoNire, "12345678910")
            .clica(loc.CadastroLivroContabil.AbaEmpresa.campoPlanoCC)
            .click('xpath', "//li[text()= '(1) - Plano de centro de custos (EMP. ORIGEM: 1 - SICAL)']")
            .pause(500)
            .clica(loc.CadastroLivroContabil.AbaEmpresa.campoPlanoRef)
            .setaNumberField(loc.CadastroLivroContabil.AbaEmpresa.campoPlanoRef, ["1", browser.Keys.TAB])
            .pause(500)                    
            .mudaAba(loc.CadastroLivroContabil.AbaEmpresa.AbaLivro.abaLivro)
    },

    'Aba Livro': function (browser) {
        browser    
            .setaNumberField(loc.CadastroLivroContabil.AbaEmpresa.AbaLivro.campoDtIni, "01012021")
            .setaNumberField(loc.CadastroLivroContabil.AbaEmpresa.AbaLivro.campoDtFim, "31122021")
            .setaNumberField(loc.CadastroLivroContabil.AbaEmpresa.AbaLivro.campoNatLivro, ["1", browser.Keys.TAB])
            .clica(loc.CadastroLivroContabil.AbaEmpresa.AbaLivro.campoVersao )
            .click('xpath', "//li[text()= '8.00']")
            .setaNumberField(loc.CadastroLivroContabil.AbaEmpresa.AbaLivro.campoCodHash, "44457777")
            .setaNumberField(loc.CadastroLivroContabil.AbaEmpresa.AbaLivro.campoNire, "12345678910")
            .clica(loc.CadastroLivroContabil.AbaEmpresa.AbaLivro.campoIndDemonstracoes)
            .click('xpath', "//li[text()= 'Demonstrações contábeis da pessoa jurídica a que se refere a escrituração']")
            .clica(loc.CadastroLivroContabil.AbaEmpresa.AbaLivro.btnSalvar)
            .aguardaToast("Registro salvo com sucesso")
    },

    'Finaliza o teste': function (browser) {
        browser
            .end();
    }
    
}