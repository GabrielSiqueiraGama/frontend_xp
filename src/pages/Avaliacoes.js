import { useEffect } from "react";
import styles from "../css/avaliativo.css";
import { createAvaliacao, getProdutoById } from "../services/api";
import { Text, Grid, Flex, Image, Container, Input, Button, useToast, Divider } from "@chakra-ui/react";
import { useState } from "react";
import { Avaliacao } from "./components/avaliacao";
import { Header } from "./Header";

export function Avaliacoes() {
  const [product, setProduct] = useState({})
  const [reviews, setReviews] = useState([])
  const [nome, setNome] = useState("")
  const [titulo, setTitulo] = useState("")
  const [descricao, setDescricao] = useState("")
  const [nota, setNota] = useState("")
  const param = window.location.pathname.split("/")[2];
  const toast = useToast()

  useEffect(() => {
    getProdutoById(param).then((res) => {
      console.log(res.reviews);
      setProduct(res)
      setReviews(res.reviews)
    });
  }, [])

  function handleCreateReview(e) {
    e.preventDefault();

    const body = {
      nameUser: nome,
      title: titulo,
      description: descricao,
      rating: nota,
      id_product: param
    }

    if (nome === "" || titulo === "" || descricao === "" || nota === "") {
      toast({
        title: "Erro",
        description: "Preencha todos os campos!",
        status: "error",
        duration: 9000,
        isClosable: true,
      })
      return;
    }

    createAvaliacao(body).then((res) => {
      setReviews([...reviews, res])
      setNome("")
      setTitulo("")
      setDescricao("")
      setNota("")
      location.reload();
    });

  }


  return (
    <Grid
      minW={"100%"}
      minH={"100%"}
    >
      <Header />
      <Flex direction={"column"}>
        <Flex
          direction={"row"}
          align={"center"}
          justifyContent={"center"}
          maxW={"100%"}
          minW={"100%"}
          m={0}
          px={0}
        >
          <Flex minW={"50%"} justifyContent={"center"}>
            <Image
              src={product.imagem}
              m={2}
              objectFit="contain"
              maxW={"250px"}
              minW={"250px"}
            />
          </Flex>
          <Flex minW={"50%"} >
            <Flex direction={"column"}>
              <Text
                fontSize={"3xl"}
                fontWeight={"bold"}
                color={"black.500"}
              >
                {product.nome}
              </Text>
              <Text> {product.descricao}</Text>
              <Text marginTop={4} fontWeight={"bold"}>Nova Avaliação: </Text>
              <Container
                maxW={"75%"}
                p={0}
                m={0}
                px={0}
              >
                <form onSubmit={(e) => handleCreateReview(e)}>
                  <Input m={1} p={0} value={nome} onChange={e => setNome(e.target.value)} placeholder=" Nome" type={"text"} />
                  <Input m={1} p={0} value={titulo} onChange={e => setTitulo(e.target.value)} placeholder=" Titulo" type={"text"} />
                  <Input m={1} p={0} value={descricao} onChange={e => setDescricao(e.target.value)} placeholder=" Descrição" type={"text"} />
                  <Input m={1} p={0} value={nota} onChange={e => setNota(e.target.value)} placeholder=" Nota de 0 a 5" type={"number"} />
                  <Button m={4} p={0} color={"white"} type="submit" colorScheme={"green"} minW={"100%"} >Avaliar Produto</Button>
                </form>
              </Container>
            </Flex>
          </Flex>
        </Flex>

        <Flex justifyContent={"center"}>
          <Divider
            orientation="horizontal"
            width={"40%"}
            borderColor="black"
          />
        </Flex>
        <Flex justifyContent={"center"}>
          <Text fontSize={"2x1"} fontWeight={"bold"} color={"green.500"}>
            Avalicações do produto 🌟
          </Text>
        </Flex>

        <Flex
          direction={"column"}
          align={"center"}
          maxW={"100%"}
          px={8}
        >
          {reviews.map((avaliacao) => <Avaliacao review={avaliacao} />)}
        </Flex>

      </Flex>
    </Grid>
  );
}
