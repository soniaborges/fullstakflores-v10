<?php

abstract class ClassConexao {

    #conexao com o banco de dados   
    protected function conectaDB ()
    {
            try{
                $Con=new PDO("mysql:host=localhost;dbname=projetodbrecodeprosonia","root","");
                
                $Con->query("set names utf8");

                return $Con;
            } catch (PDOExeption $Erro) 
            
            {
                return $Erro->getMessage();
            }

    }
}

?>