import { useState } from "react";

function SecondExercises (){
    let [nome, setNome] = useState();

    let salario = 15000;
    let reajust = 10/100;
    let salariofi = 0;

    salariofi= salario + (salario * (reajust / 100));
    
    function alterarNome (elemento){
        setNome(elemento.target.value)
    }
        

    return(
        <>
          
          <h4>{nome}</h4>

            <br/>
            <input onChange={alterarNome}></input>
        </>
    )
}

export default SecondExercises
