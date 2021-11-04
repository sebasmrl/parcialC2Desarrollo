const { expect } = require("@jest/globals");


describe('Pruebas Unitarias', () => {
    test('Prueba sobre la funcion multiplicarNumeros()', () => {
        

        function multiplicarNumeros(n1, n2) {
            return (parseInt(n1) * parseInt(n2));
        }
        //inputs
        const n1 = 5;
        const n2 = 4;
        const rEsperado =20;

        //ejecucion
        const resultado = multiplicarNumeros(n1,n2)

        //comprobacion
        expect(resultado).toBe(rEsperado);
    })

    test('Prueba sobre la funcion validarNumHoras()', () => {
        
        const validarNumHoras = (horas=0)=>{
            return (horas>19) ? false : true;
        }
        //input
        const value = 20;
        expect(validarNumHoras(value)).toBe(false)

    })

    test('Prueba sobre la funcion validarCampoVacio()', () => {
        
        const validarCampoVacio = (inputs=[])=>{
            let flag = true;
            inputs.forEach(input =>{
                if(input?.length <1) flag = false;
            })
            return flag;
        }
        const nom="Morales", ape="Vasquez", iden=""
        const inputs =[nom,ape,iden];

        expect(validarCampoVacio(inputs)).toBe(false)

    })
    
    test('Prueba sobre la funcion validarNumMayor0()', () => {
        const validarNumMayor0 = (num=0)=>{
            return (num>0) ? true : false;
        }
        //input
        const numero = 5;

        expect(validarNumMayor0(numero)).toBe(true)
    })
    
})



    
    
