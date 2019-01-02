function defineStructure() {

}
function onSync(lastSyncDate) {

}
function createDataset(fields, constraints, sortFields) {

	var ds = DatasetBuilder.newDataset();
	var codigo = DatasetFactory.createConstraint("ccod", "000245", "000245", ConstraintType.MUST);
	var descricao = DatasetFactory.createConstraint("cdescr", "BOLSA DE COURO", "BOLSA DE COURO", ConstraintType.MUST);
	var tipo = DatasetFactory.createConstraint("ctipo", "PA", "PA", ConstraintType.MUST);
	
	var constraint = new Array (codigo, descricao, tipo);
	var result = DatasetFactory.getDataset("ds_create_product", null, constraint, null);

	return result;
	
}function onMobileSync(user) {

}