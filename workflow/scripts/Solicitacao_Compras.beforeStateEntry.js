function beforeStateEntry(sequenceId){
	
    var docList = [38,39];
      
    if (sequenceId == 2) {
        for (var i = 0; i < docList.length; i++) {
            var docId = docList[i];
            hAPI.attachDocument(docId);
        };
    } 
	
	
	
}