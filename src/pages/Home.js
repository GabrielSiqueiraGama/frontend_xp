import { Header } from "./Header"
import { Flex, Grid } from "@chakra-ui/react"
import { Produtos } from "./Produtos"
import { useEffect, useState } from "react"

export const Home = () => {

    const [produtos, setProdutos] = useState([])

    useEffect(() => {
        fetch('http://localhost:8080/produtos')
            .then(response => response.json())
            .then(data => {
                setProdutos(data);
                console.log("olha os produto: ", data)
            })
    }, [])

    return (
        <Grid minW={"100%"} minH={"100%"} >
            <Header />
            <Flex
                direction={"column"}
                align={"center"}
                maxW={{ xl: "1200px" }}
                m={"0 auto"}
                px={8}
            >
                {
                    produtos.map((produto) => <Produtos produto={produto} />)
                }
            </Flex>
        </Grid>
    )
}