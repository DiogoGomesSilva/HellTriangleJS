var triangleController = {

    validateTriangle: function (data) {        
        if (Array.isArray(data)){
            let valida = false; 
           for (let index = 0; index < data.length; index++) {
               const dataItem = data[index];
               if (!Array.isArray(dataItem)){
                   return false
               }else{
                   if (index != 0){
                       if (data[index].length - data[(index - 1) || 0 ].length == 1 )  {
                           valida = true; 
                       }else{
                           return false; 
                       } 
                   }else{
                       if (data[index].length != 1){
                           return false; 
                       }
                   }
               }                
           }
           return valida;
       }
    },

    calculateTriangle: function (data) {
        
        var triangle = new TriangleModel(data);
        var arrayTriangle = triangle.getTriangle();
        
        while (arrayTriangle.length !== 1) {
            var newRowTriangle = [];
            var countArrayTriangle = arrayTriangle.length;
            var currentLine = arrayTriangle[countArrayTriangle - 2];
            var currentLen = currentLine.length - 1;
            var lastLine = arrayTriangle[countArrayTriangle - 1];

            for (let index = 0; index <= currentLen; index++) {
                let sumFistOption = currentLine[index] + lastLine[index] || 0;
                let sumLastOption = currentLine[index] + lastLine[index + 1] || 0;
                newRowTriangle.push(triangle.getMax(sumFistOption, sumLastOption)); 
            }

            arrayTriangle = triangle.removeRow(arrayTriangle, 2);
            arrayTriangle = triangle.addRow(arrayTriangle, newRowTriangle);
        }
        
        return triangle.showResult(arrayTriangle);
    }


}