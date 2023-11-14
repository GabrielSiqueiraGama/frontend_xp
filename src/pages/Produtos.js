
import { Button, Card, CardBody, CardHeader, Grid, Image, Stack, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export function Produtos(props) {

  const navigation = useNavigate();

  const handleNavigationProduct = () => {
    navigation(`reviews/${props.produto.id}`);
  }

  return (
    <Grid minW={"100%"} justifyContent={"center"} p={1}>
      <Card
        maxW={"680px"}
        minW={"680px"}
        direction={
          { base: "column", sm: "row" }
        }
        boxShadow={"dark-lg"}
        overflow='hidden'
        variant='outline'
      >
        <Image
          objectFit="contain"
          maxW={"250px"}
          minW={"250px"}
          maxH={"150px"}
          minH={"150px"}
          src={props.produto.imagem}
          alt={props.produto.nome}
          m={2}
        />
        <Stack>
          <CardHeader p={2} m={0}>
            <Text
              fontSize={"2xl"}
              fontWeight={"bold"}
              color={"black.500"}
            >{props.produto.nome}</Text>
          </CardHeader>
          <CardBody
            maxW={{ base: "100%" }}
            p={0} m={0}
          >
            <Text fontSize={"md"} color={"black.500"}>
              {props.produto.descricao}
            </Text>
            <Button m={8} color={"white"} colorScheme={"green"} minW={"100%"} onClick={handleNavigationProduct} >Avaliar Produto</Button>
          </CardBody>
        </Stack>
      </Card>
    </Grid>
  );
}

