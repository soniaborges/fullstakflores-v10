<?php

include("ClassConexao.php");

class ClassProdutos extends ClassConexao {

    #exibição dos produtos em um Json

    public function exibeProdutos()
    {
        $BFetch=$this->conectaDB()->prepare("select * from produtos");
        $BFetch->execute();

        $J=[];
        $I=0;

        while ($Fetch=$BFetch->Fetch(PDO::FETCH_ASSOC)){ 

            $J[$I]=[
                "idproduto"=>$Fetch['idproduto'],
                "categoria"=>$Fetch['categoria'],
                "descricao"=>$Fetch['descricao'],
                "imagem"=>$Fetch['imagem'],
                "preco"=>$Fetch['preco'],
                "preco_final"=>$Fetch['preco_final']
            ];

            $I++;
        }

        header ("Access-Control-Allow-Origin:*");
        header ("Content-type: application/json");
        echo json_encode($J);
    }
}

?>