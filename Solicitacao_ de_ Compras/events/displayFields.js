function displayFields(form, customHTML) {

    var processo = parseInt(getValue("WKNumState"));

    switch (processo) {


        case 9: {

            var codigo = DatasetFactory.createConstraint("ccod", form.getValue("codigo"), form.getValue("codigo"), ConstraintType.MUST);
            var constraint = new Array(codigo);
            var result = DatasetFactory.getDataset("ds_get_produto", null, constraint, null);


            log.info("++++++++++++++++++++++++++++++++++++" + result.getValue(0,"dESCRICAO"));
            log.info("++++++++++++++++++++++++++++++++++++" + result.getValue(0,"tIPO"));



            form.setValue("produto", result.getValue(0,"dESCRICAO"));
            form.setValue("tipo", result.getValue(0,"tIPO"));

        }

    }

}