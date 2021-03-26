let Alumno=function(nombre, numCuenta, promedio){
    this.nombre=nombre;
    this.numCuenta=numCuenta;
    this.promedio=promedio;
    this.semestre=2;
    this.inscribir=function(){
        return "inscrito";
    }
    this.info=function(){
        return this.nombre + " nc: " + this.numCuenta
    }
    this.infoHtml=function(){
        return "<div><h2>"+ this.nombre +"</h2>" +
               "<h3>Numero de cuenta " + this.numCuenta + "</h3>" + 
               "<p> Semestre " + this.semestre + "<br>" + 
               "Promedio " + this.promedio + "</p>" + 
               "</div>"
    }
}

 
let Grupo=function(){    //edArrayGrupo
    this.datos=new Array();
    this.agregar=function(nuevo){
        this.datos.push(nuevo);
    }
    this.buscar=function(nombre){
        let existe=true;
        //busqueda
        if(existe)
            return this.datos[0];
        else
            return null;
    }
    this.listar=function(){
        let res="";
        for(let i=0;i<this.datos.length;i++)
            res += this.datos[i].infoHtml() + "<br>";
        return res;
    }
    this.eliminar=function(nombre){
        return true; //false si no
    }
}   
//
//
let grupo2c=new Grupo();
 
let btnCrear=document.getElementById('btnCrear');
btnCrear.addEventListener('click',()=>{
    let nom, numc, prom;
    nom=document.getElementById('txtNombre').value;
    numc=document.getElementById('txtNumcuenta').value;
    prom=document.getElementById('txtPromedio').value;
    let alumno=new Alumno(nom,numc,prom);


    grupo2c.agregar(alumno);
    console.log('Se agrego ' + alumno.info());
    
});
 
let btnBuscar=document.getElementById('btnBuscar');
btnBuscar.addEventListener('click',()=>{
    let nombre=document.getElementById('txtNombre').value;
    let buscado=grupo2c.buscar(nombre);   //alumno
    let res=document.getElementById('resultados');
    if (buscado==null)
        res.innerHTML += "<h3>No se encontro en la busqueda</h3>"
    else{
        res.innerHTML += "<h3>Si se encontro</h3>" + buscado.infoHtml();
        document.getElementById('txtNumCuenta').value=buscado.numCuenta;
        document.getElementById('txtPromedio').value=buscado.promedio;
    }
 
})
 
let btnListar=document.getElementById('btnListar');
btnListar.addEventListener('click',()=>{
    let res=document.getElementById('resultados');
    res.innerHTML+="<h1>LISTADO</h1>" + grupo2c.listar();
})
 


