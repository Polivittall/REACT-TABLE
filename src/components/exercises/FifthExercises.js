import { useState } from "react"
import { Alert } from "react-bootstrap";

function FifthExercises(){

    let [nome_produto, setNome] = useState();
    let [produto_preço, setPreço] = useState();
    let [produto_total, setTotal] = useState();
    let [class_btn, setClassBtn] = useState ("btn btn-primary mt-4")

function chanceNome(value){
    setNome(value.target.value);
}
   
function chancePreço (value){
    setPreço(parseFloat(value.target.value));
}

function chanceTotal (value){
    setTotal( produto_preço + (produto_preço * (5 / 100))).toFixed((2));
}

    return(

        <>
          <div class="card">
          <div class="card-body"></div>
            <div class="container pt-2" >

                <div class="  card-tittle p-2 border-bottom card-header ">
                    <h5>EXERCÍCIO 5</h5>
                </div>

                
                <div class="row">

                    <div class="col sm-12 col md-4 col lg-6" >
                        <label class="label-control"><b>Produto</b></label>
                        <input 
                        class="form-control"
                        type="text" 
                        maxLength={50}
                        placeholder="Nome  do produto..."
                        onChange={chanceNome}></input>
                    </div>

                    <div class="col sm-12 col md-4 col lg-3" >
                        <label class="label-control"><b>Preço</b></label>
                        <input 
                        max= {999} 
                        step={0.1}
                        class="form-control" 
                        type="number" 
                        placeholder="Preço do produto..."
                        maxLength={5}
                        onChange={chancePreço}
                        disabled={!nome_produto}
                        ></input>

                    </div>   
 
                    <div class="col-sm-12 col-md-4 col-lg-3">

                        <button disabled={!nome_produto || !produto_preço || !produto_total} onClick={setTotal} class="btn btn-primary mt-4 col-12">Calcular Acréscimo 5%</button>
                        
                    </div>

                    <div onChange={produto_total}>
                    <Alert className="mt-2" variant="info"> Resultado R$ {produto_total}</Alert>
                    </div>

                </div>
            </div>
          </div>
        </>
    )
}

export default FifthExercises