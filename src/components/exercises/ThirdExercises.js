import { useState } from "react";

function ThirdExercises() {


    let [time_nome, setNome] = useState();
    let [time_vitoria, setVitoria] = useState();
    let [time_empates, setEmpates] = useState();
    let [class_btn, setClassBtn] = useState("btn btn-primary mt-4");

    function chanceName(value) {
        setNome(value.target.value);
        setClassBtn("btn btn-sucess mt-4")
    }

    function chanceVictory(value) {
        setVitoria(value.target.value)
        console.log(time_vitoria);
    }

    function chanceEmpate(value) {
        setEmpates(value.target.value)

    }

    return (
        <>
            <div class="container pt-2">

                <div class="card-tittle p-2 border-bottom card-header">
                    <h5>Exercício 3</h5>
                </div>
                <div class="card-body">

                    <div class="row">

                        <div class="col-sm-12 col-md-3 col-lg-3">
                        <label class="label-control"><b>Nome Time</b></label>
                            <input
                                class="form-control"
                                type="text"
                                maxLength={15}
                                placeholder="insira o nome"
                                onChange={chanceName}>
                            </input>
                        </div>
                        <div class="col-sm-12 col-md-2 col-lg-2">
                            <label class="label-control"><b>Qtd. de vitorias:</b></label>
                            <input
                                class="form-control"
                                type="number"
                                disable={!time_nome}
                                onChange={chanceVictory}></input>
                        </div>

                        <div class="col-sm-12 col-md-2 col-lg-2">
                            <label class="label-control"><b>Qtd. de empates:</b></label>
                            <input
                                class="form-control"
                                type="number"
                                disable={!time_vitoria}
                                onChange={chanceEmpate}></input>
                        </div>

                        <div class="col-sm-12 col-md-2 col-lg-2">
                            <button
                                disable={!time_nome || !time_vitoria || !time_empates}
                                className={class_btn}>
                                calcular</button>

                        </div>

                    </div>
                </div>


            </div>
        </>

    )
}

export default ThirdExercises;
