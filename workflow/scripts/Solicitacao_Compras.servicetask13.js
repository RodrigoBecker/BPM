function servicetask13(attempt, message) {
 try {
	
	 	var codigo = DatasetFactory.createConstraint("ccod", hAPI.getCardValue("codigo"), hAPI.getCardValue("codigo"), ConstraintType.MUST);
		var descricao = DatasetFactory.createConstraint("cdescr", hAPI.getCardValue("produto"), hAPI.getCardValue("produto"), ConstraintType.MUST);
		var tipo = DatasetFactory.createConstraint("ctipo", hAPI.getCardValue("tipo"), hAPI.getCardValue("tipo"), ConstraintType.MUST);
		
		var constraint = new Array (codigo, descricao, tipo);
		var result = DatasetFactory.getDataset("ds_create_product", null, constraint, null);
 
    
		hAPI.setCardValue("mensagem", result.getValue(0,"iNFO"));

	 
  //var serviceLocator = serviceHelper.instantiate('classe.locator');
 } catch(error) { 
	log.error(error);
	throw error;
 }
}