import axios, { isCancel, AxiosError } from 'axios';
import { useState } from 'react';
import { Alert } from 'react-bootstrap';


function SixthExercises() {

    let [cep, setCep] = useState();
    let [endereco, SetEndereco] = useState([]); 
    let [bairro, setBairro] = useState([]); 
    let [status, setStatus] = useState({
        "variant": "",
        "message": ""
    });
    
    function chanceCep(value){
        setCep (value.target.value)
    }

    function buscarCep() {
        axios.get(`https://viacep.com.br/ws/${cep}/json/`).then(function (response) {

        setStatus({
            "variant": "success",
            "message": "Deu tudo certo (:"
        });


            console.log(response.data);
            SetEndereco(response.data)
            setBairro(response.data)
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
                        <h4>EXERCÍCIO 6</h4>

                    <div className="row"> </div>

                        <div className="col -sm-12 col-md-6 col-lg-6">
                        <label className="label-control"><b>CEP</b></label>
                        <input 
                        className="form-control" 
                        type="number" 
                        maxLength={8} 
                        placeholder='Insira seu CEP' 
                        onChange={chanceCep}></input>

                        </div>

                    </div>

                    <button onClick={buscarCep}> Buscar CEP </button>

                </div>

                <div className='col-lg-12'>Rua: {endereco.logradouro}</div>
                <div className='col-lg-12'>Bairro: {endereco.bairro}</div>

            </div>
        </>
    )
}

export default SixthExercises;

