function calcularSalarioNeto() {
    let puesto = parseInt(document.getElementById('puesto').value);
    let horas = parseInt(document.getElementById('horas').value);
    let anios = parseInt(document.getElementById('anios').value);
    let sueldoHora = 0;    

    switch(puesto){
        case 1: sueldoHora = 300; break;
        case 2: sueldoHora = 100; break;
        case 3: sueldoHora = 250; break;
    }

    // Calculando valores
    let sueldoBase = sueldoHora*horas;
    let canastaBasica = parseFloat(sueldoBase*0.025);
    let apoyo = parseFloat(sueldoBase*0.05);
    let antiguedad = parseFloat(anios*150);
    let estimulo = parseFloat(sueldoBase*0.02);
    let totalPercepciones = parseFloat(sueldoBase+canastaBasica+apoyo+antiguedad+estimulo);
    let ISR = parseFloat(sueldoBase*0.15);
    let servicioSalud = parseFloat(sueldoBase*0.035);
    let afore = parseFloat(sueldoBase*0.04);
    let sindicato = parseFloat(sueldoBase*0.01);
    let totalDeducciones = parseFloat(ISR+servicioSalud+afore+sindicato);
    let salarioNeto = parseFloat(totalPercepciones-totalDeducciones);

    // Aplicando valores
    document.getElementById("sueldoBase").innerHTML="<h3>S/. "+sueldoBase.toFixed(2)+"</h3>";
    document.getElementById("apoyo").innerHTML="<h3>S/. "+apoyo.toFixed(2)+"</h3>";
    document.getElementById("canastaBasica").innerHTML="<h3>S/. "+canastaBasica.toFixed(2)+"</h3>";
    document.getElementById("antiguedad").innerHTML="<h3>S/. "+antiguedad.toFixed(2)+"</h3>";
    document.getElementById("estimulo").innerHTML="<h3>S/. "+estimulo.toFixed(2)+"</h3>";
    document.getElementById("totalPercepciones").innerHTML="<h3>S/. "+totalPercepciones.toFixed(2)+"</h3>";
    document.getElementById("ISR").innerHTML="<h3>S/. "+ISR.toFixed(2)+"</h3>";
    document.getElementById("servicioSalud").innerHTML="<h3>S/. "+servicioSalud.toFixed(2)+"</h3>";
    document.getElementById("afore").innerHTML="<h3>S/. "+afore.toFixed(2)+"</h3>";
    document.getElementById("sindicato").innerHTML="<h3>S/. "+sindicato.toFixed(2)+"</h3>";
    document.getElementById("totalDeducciones").innerHTML="<h3>S/. "+totalDeducciones.toFixed(2)+"</h3>";
    document.getElementById("salarioNeto").innerHTML="<h3>S/. "+salarioNeto.toFixed(2)+"</h3>";
}