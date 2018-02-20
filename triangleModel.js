class TriangleModel {

    constructor(dataArray) {
        this._dataArray = dataArray;
    }

    addRow(data, row) {
        data.push(row);
        return data;
    }

    removeRow(data, countRemove) {
        for (let index = 0; index < countRemove; index++) {
            data.pop();
        }
        return data; 
    }

    getTriangle(){
      return this._dataArray; 
    }

    getMax(number1, number2) {
        return Math.max(number1, number2);
    }

    showResult(data) {
        return data[0][0];
    }
}