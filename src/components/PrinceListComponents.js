import { useState } from "react";
import { Button } from "react-bootstrap";
import {Table} from 'react-bootstrap/Table'; 

function PrinceList (){

    let valor_a = 4
    let valor_b = 2
    let [Total, SetTotal] = useState(valor_a + valor_b)

function acaobotao(){
    SetTotal(Total + 1)
    console.log("Total");


}

return(

    <>
        <table>
            <tbody>
            <tr>
                <td>Valor 1</td>
                <td>Valor 2 </td>
                <td>Total</td>
            </tr>
            <tr>
                <td>{valor_a}</td>
                <td>{valor_b}</td>
                <td>{Total}</td>
            </tr>
            </tbody>
        </table>
        <br />
        <Button onClick={acaobotao} variant="primary">Primary</Button>
       <button > Somar 1 no Total</button>
    
    </>
)

}

export default PrinceList;