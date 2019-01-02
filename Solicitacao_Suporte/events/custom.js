function consulta_dataset(){
    // consulta objeto de dataset de usuário usando constraint
    var usuario = getValue("WKUser");
    var user = DatasetFactory.createConstraint("colleaguePK.colleagueId", usuario, usuario, ConstraintType.MUST);
    var constraint = new Array(user);
    var ds = DatasetFactory.getDataset("colleague", null, constraint, null);
    
    return ds;
}

function api(){
     return fluigAPI.getUserService().getCurrent();
}