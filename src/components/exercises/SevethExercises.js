import axios, { isCancel, AxiosError } from 'axios';
import { useState } from 'react';
import { Alert } from 'react-bootstrap';

function SeventhExercises(){

    let [valor, setValor] = useState([]);
    let [pair1, setPairOne] = useState();
    let [pair2, setPairTwo] = useState();
    let [dinheiro, setDinheiro] = useState([]);
    let [conversao, setConversao] = useState([]);
    let [high, setHigh] = useState([]);
    let [low, setLow]  = useState([]);
    let [cotacao, setCotacao] = useState([]);
    let [moeda, setMoeda] = useState();
    let [status, setStatus] = useState({
        "variant": "",
        "message": ""
    })

    function chanceValor(value){
        setValor (value.target.value)
    }

    function chancePairOne (value){
        setPairOne(value.target.value)
    }

    function chancePairTwo(value){
        setPairTwo(value.target.value)
    }
    

    function submitConvert() {
        axios.get(`https://economia.awesomeapi.com.br/json/last/${pair1}-${pair2}`).then(function (response){
            console.log(valor * response.data[`${pair1}${pair2}`].bid)

            setStatus({
                "variant": "success",
                "message": "Deu tudo certo (:"
            });

            console.log(response.data);
            setMoeda (response.data)
            setConversao (response.data)
            setCotacao (response.data)
            }).catch(function (error) {
            console.log(error)
            setStatus({
                "variant": "danger",
                "message": "Deu tudo errado ):"
            });
        });

    }

    return (

    <>
    <div className="container pt-2"> 

        <div className="card">

        <Alert variant={status.variant} className="mt -2">
        {status.message}
        </Alert>

            <div className="card-title pt-2 border bottom card-header">
                <h2>Cotação de moedas</h2>

            <div className="row"></div>

            <div className="col-sm-12 col-md-6 col-lg-6">
                <select onChange={chancePairOne} className='form-select mb-2 '>
                    <option selected>Selecione o par 1</option>
                    <option value="BRL">BRL</option>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                </select>

                <select onChange={chancePairTwo}className='form-select mb-2 '>
                <option  selected>Selecione o par 2</option>
                    <option value="BRL">BRL</option>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                </select>

                <input className='form-control'type="number"placeholder='Insira o valor a ser convertido'onChange={chanceValor}></input></div>
                <button onClick={submitConvert} className='btn btn-primary w-100 mt-2'>CONVERTER</button>
            

            </div>
           
        </div>

    </div>
 
    </>
)

}

export default SeventhExercises;