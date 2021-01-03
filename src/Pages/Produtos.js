
import { Col, Row } from 'react-bootstrap';
import Produtos from '../Components/Produtos/Produtos'
import Categoria from '../Components/Categoria'
import Rodape from '../Components/Layout/Rodape'


export default function PageProdutos(props){

    return(
      
      <div>
        <h2 className="border-bottom py-5 text-center">Produtos</h2>
        <Row>
            <Col lg={3} md={4}>
            <Categoria />
            </Col>
              
            <Col lg={9} md={8}>
            <Produtos /> 
            </Col>
        </Row>
      
      <Rodape></Rodape>
      </div>


    );
}


      
 