module.exports = {


    btnModContab: "div[data-qtip=Contábil]",
    
    TelaLancamentoContabil: {
        btnLancamentos: "//label[contains(.,'Lançamentos')]",
        btnNovo: "span[data-test-id='btn_novo']",
        campoDocto: "div[id^='use-numberfield-1233-triggerWrap']",
        bntIncluir: "//span[contains(.,'Incluir')]",
        btnFecharLote: "//span[contains(.,'Fechar lote')]"
    },

        TelaLancamentoPartContraPartida: {
            contaCaixa: "//span[contains(.,'1.1.1.01.001 - (50) - Caixa')]",
            campoContaContabil: "input[data-test-id='LoteLancto.CodigoContaCtb']",
            campoDebitar: "input[data-test-id='data.ValorDebitar']",
            campoHistoricoPadrao: "input[data-test-id='LoteLancto.CodigoHistoricoCtb']",
            btnSalvarlancto: "span[data-test-id='btn_salvar_partidas_contrapartidas']",
            btnCancelar: "div[id^='cadastro-contabilidade-lancamento-lotectb'] span[id^='use-cancelbutton'][id$='btnInnerEl']",
    }

}