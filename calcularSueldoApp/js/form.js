const validarNumHoras = (horas=0)=>{
    return (horas>19) ? false : true;
}

const validarCampoVacio = (inputs=[])=>{

    let flag = true;
    inputs.forEach(input =>{
        if(input?.length <1) flag = false;
    })
    return flag;
}

const validarNumMayor0 = (num=0)=>{
    return (num>0) ? true : false;
}

function operaciones(op)
{
    var ops = {
        
        multiplicar: function multiplicarNumeros(n1, n2) {
            return (parseInt(n1) * parseInt(n2));
        },    
    };
     var nom = document.getElementById("nom").value;
    var ape = document.getElementById("ape").value;
    var iden = document.getElementById("iden").value;
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
   
    const inputs =[nom,ape,iden];
    
    if (isNaN(parseFloat(document.getElementById('num1').value))) {
        document.getElementById('resultado').innerHTML="<span style='color: red;'>Por favor, escriba un número 1</span>";
        document.getElementById("num1").innerText = "0";
        document.getElementById("num1").focus();
        } else if (isNaN(parseFloat(document.getElementById('num2').value))) {
        document.getElementById('resultado').innerHTML="<span style='color: red;'>Por favor, escriba un número 2</span>";
        document.getElementById("num2").innerText = "0";
        document.getElementById("num2").focus();
    }
    else {
    
        switch(op) {
            
            case 'multiplicar':
                
                console.log(validarCampoVacio(inputs))
                if(validarNumHoras(num1) && validarCampoVacio(inputs) && validarNumMayor0(num1) && validarNumMayor0(num2)){
                    var resultado = ops.multiplicar(num1, num2);
                    document.getElementById('resultado').innerHTML="<span style='color: black;'>"+resultado+"</span>";                            break;           
                }
           
        }
       
        console.log(nom, ape, iden, resultado);
     
    }

}
