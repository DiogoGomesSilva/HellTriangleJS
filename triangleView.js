var TriangleView = {
  msgValidateInput: function (id) {
    var msgNotification =
      {
        0: "Por favor insira um formato ou padrão válido !. Ex: [[6], [3, 5], ...]"
      }
    return msgNotification[id];
  },
  msgNotification: function (msg) {
    document.querySelector("#notification").textContent = "";
    document.querySelector("#notification").textContent = msg;
  },

  validateInput: function (result) {
    var validate = false;

    if (typeof result == 'string') {
      try {
        result = JSON.parse(result);
        if (Array.isArray(result) && triangleController.validateTriangle(result)) {
          validate = true;
        }
      } catch (error) {
        validate = false;
      }
    }
    return validate;
  },

  showResult: function (result) {
    let resultado = JSON.parse(result);
    let ValorTotal = triangleController.calculateTriangle(resultado);
    return ValorTotal; 
  },

  int: function () {

    document.querySelector("#calcular").addEventListener("click", function () {
      var result = document.querySelector("#triangleArray").value;
      if (TriangleView.validateInput(result)) {
        var ValorTotal = TriangleView.showResult(result);
        TriangleView.msgNotification("Valor Total = " + ValorTotal);
      } else {
        TriangleView.msgNotification(TriangleView.msgValidateInput(0));
      }
    });

    document.querySelector("#testes").addEventListener("click", function () {
      ValidaInputIncorreto();
    });

  },
}

TriangleView.int();



