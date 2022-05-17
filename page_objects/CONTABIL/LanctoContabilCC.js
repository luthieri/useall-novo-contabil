module.exports = {


    btnModContab: "div[data-qtip=Contábil]",
    
    TelaLancamentoContabil: {
        btnLancamentos: "//label[contains(.,'Lançamentos')]",
        btnNovo: "span[data-test-id='btn_novo']",
        campoDocto: "div[id^='use-numberfield-1233-triggerWrap']",
        bntIncluir: "//span[contains(.,'Incluir')]",
        btnFecharLote: "//span[contains(.,'Fechar lote')]",
            PartContraPartida: {
                contaCaixa: "//span[contains(.,'1.1.1.01.001 - (50) - Caixa')]",
                contaContrapartida: "//span[contains(.,'1.1.1.02.001 - (70) - Caixa Econômica Federal')]",
                campoContaContabil: "input[data-test-id='LoteLancto.CodigoContaCtb']",
                campoDebitar: "input[data-test-id='data.ValorDebitar']",
                btnCC: "span[data-test-id='btn_abrircc_partidas_contrapartidas']",
                campoHistoricoPadrao: "input[data-test-id='LoteLancto.CodigoHistoricoCtb']",
                btnSalvarlancto: "span[data-test-id='btn_salvar_partidas_contrapartidas']",
                btnCancelar: "div[id^='cadastro-contabilidade-lancamento-lotectb'] span[id^='use-cancelbutton'][id$='btnInnerEl']",
                    TelaRateioCC: {
                        campoCC: "input[data-test-id='LoteLanctoCdc.CodigoContaCdc']",
                        campoPercentualcc: "input[data-test-id='LoteLanctoCdc.Perc']",
                        campoHistorico: "input[data-test-id='LoteLanctoCdc.Historico']",
                        btnConfirmar: "div[id^='ext-comp'] span[id^=use-yesbutton] [data-ref='btnEl']",
                        btnSalvar: "span[data-test-id='btn-save-rateio-cc-lancto']"
            },
            }
    }
}