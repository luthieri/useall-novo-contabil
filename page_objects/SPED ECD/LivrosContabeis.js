module.exports = {

    btnModContab: "div[data-qtip=Contábil]",
    btnModSped: "//label[contains(.,'Sped ECD')]",

    CadastroLivroContabil: {
        btnLivrosContabil: "//label[contains(.,'Livros Contábeis')]",
        btnNovo: "span[data-test-id='btn_novo']",
        campoDtFinal: "div[class^='x-window x-layer x-window-default x-closable x-window-closable x-window-default-closable x-border-box'] div[id^='combo-periodo-apuracao-ecd-'] [data-ref='inputEl']",
        opcaoData: "//li[text()= '31/12/2020']",
        btnInserir: "//span[text()= 'Inserir']",
            AbaEmpresa: {
                campoEscrCentralizada: "input[data-test-id='LivroEcd.IndicadorEscrituracaoCentralizada']",
                campoSitEspecial: "input[data-test-id='LivroEcd.IndicadorSituacaoEspecial']",
                campoDtEnceSocial: "input[data-test-id='LivroEcd.DataEncerramentoExercicioSocial']",
                campoArquiv: "input[data-test-id='LivroEcd.DataArquivamento']",
                campoNire: "input[data-test-id='LivroEcd.Nire']",
                campoPlanoCC: "input[data-test-id='LivroEcd.CodigoPlanoCdc']",
                campoPlanoRef: "input[data-test-id='LivroEcd.CodigoCtbPlanoReferencial']",
            AbaLivro: {
                abaLivro: "//span[text()= 'Livro']",
                campoDtIni: "input[data-test-id='LivroEcd.DataInicial']",
                campoDtFim: "input[data-test-id='LivroEcd.DataFinal']",
                campoNatLivro: "input[data-test-id='LivroEcd.CodigoCtbNaturezaLivro']",
                campoVersao: "input[data-test-id='LivroEcd.CodigoVersaoLeiauteContabil']",
                campoLayoutRazao: "input[data-test-id='LivroEcd.CodigoCtbLivroRazaoAux']",
                campoCodHash: "input[data-test-id='LivroEcd.HashAuxiliar']",
                campoNire: "input[data-test-id='LivroEcd.NireEscrituracaoSubstituida']",
                campoIndDemonstracoes: "input[data-test-id='LivroEcd.IdentificacaoDemonstracoes']",
        btnSalvar: "span[data-test-id='btn_salvar']"
            }
        }
    }
}
