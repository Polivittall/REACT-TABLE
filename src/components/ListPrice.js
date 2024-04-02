
import Table from 'react-bootstrap/Table';

function ListPrice(){


    let produto1 = {

        id: 2,
        nome: "BOLO DE CHURROS",
        categoria: "ALIMENTOS",
        quantidade : 8,
        preço_unitario: 11.5,
        total: 92
    }
       

    let produto = {

        id: 2,
        nome: "BOLO DE CHURROS",
        categoria: "ALIMENTOS",
        quantidade : 15,
        preço_unitario: 12.5,
        total: 187.5
    }
        
    let lista_produtos = [
        produto,
        produto1,
    ]
    

    return(
        <div>
             <div className="center">
    <Table striped bordered hover responsive>
        
        <thead>
        <th colSpan={6} className='text-center'> VENDAS</th>

            <tr>
                <td>#</td>
                <th>PRODUTO</th>
                <th>CATEGORIA</th>
                <th>QUANTIDADE</th>
                <th>PREÇO UNITÁRIO</th>
                <th>TOTAL</th>
            </tr>

        </thead>

        <tbody>

    
            <tr>
                <td>{produto1.id}</td>
                <td>{produto1.nome}</td>
                <td>{produto1.categoria}</td>
                <td align='right'>{produto1.quantidade}</td>
                <td align='right'>{produto1.preço_unitario}</td>
                <td align='right'>{produto1.total}</td>

            </tr>
            <tr>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>{produto.categoria}</td>
                <td align='right'>{produto.quantidade}</td>
                <td align='right'>{produto.preço_unitario}</td>
                <td align='right'>{produto.total}</td>


            </tr>
            {
                lista_produtos.map(
                    function(produto){
                        return <tr>
                            <td>{produto.id}</td><td>{produto.nome}</td><td>{produto.categoria}</td><td align='right'>{produto.quantidade}</td><td align='right'>{produto.preço_unitario}</td><td align='right'>{produto.total}</td>
                        </tr>
                    }
                )
            }
            <tr>
                <td class="back"></td>
                <td class="back"></td>
                <td class="back"></td>
                <td align='right'>{0}</td>
                <td align='right'>{0}</td>
                <td align='right'>{0}</td>

            </tr>
           
        
        </tbody>

    
    </Table>
</div>
        </div>
    );
}
export default ListPrice;