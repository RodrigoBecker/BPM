function defineStructure() {

}
function onSync(lastSyncDate) {

	
	
}
function createDataset(fields, constraints, sortFields) {

    var dataset = DatasetBuilder.newDataset();

    dataset.addColumn("CODIGO");
    dataset.addColumn("PRODUTO");
    dataset.addColumn("QUANTIDADE");
    dataset.addColumn("VALOR");


    dataset.addRow(new Array ("0001","MARTELO","12", "25,00"));
    dataset.addRow(new Array ("0002","BROCA 8mm","120", "25,00"));
    dataset.addRow(new Array ("0003","FURADEIRA","70", "245,00"));
    dataset.addRow(new Array ("0004","LIXA","20", 5.3));
    dataset.addRow(new Array ("0005","PREGO",20, "2,00"));
    dataset.addRow(new Array ("0006","BUCHA 8mm","812", "5,00"));
    dataset.addRow(new Array ("0007","ALICATE","18", "35,00"));

   
    return dataset;



}function onMobileSync(user) {


}