function createDataset(fields, constraints, sortFields) {


    var dataset = DatasetBuilder.newDataset();

    dataset.addColumn("RESPOSTA");

    var clientService = fluigAPI.getAuthorizeClientService();
    var data = {
        companyId: getValue("WKCompany") + '',
        serviceCode: 'PROTHEUS REST',
        endpoint: '/rest/PRODUTOS_SB1/',
        method: 'post',// 'delete', 'patch', 'put', 'get'     
        timeoutService: '100', // segundos
        params: {
            "Cod": "000450",
            "Descr": "NOTEBOOK LENOVO",
            "Tipo": "PA"
        }

    }

    var vo = clientService.invoke(JSON.stringify(data));

    if (vo.getResult() == null || vo.getResult().isEmpty()) {

        dataset.addRow(new Array("Retorno está vazio"));

    } else {

        dataset.addRow(new Array(vo.getResult()))

    }

    return dataset;
}


