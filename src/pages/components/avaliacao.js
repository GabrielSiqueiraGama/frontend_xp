import { Card, Flex, CardHeader, CardFooter, IconButton, Text, Image, Avatar, Box, Heading, CardBody, Button } from "@chakra-ui/react"
import StarRatings from "react-star-ratings"

export const Avaliacao = (props) => {
    return (
        <Card maxW='lg' m={2} key={props.review.id}>
            <CardHeader>
                <Flex spacing='4'>
                    <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                        <Avatar name={props.review.nameUser} src='https://bit.ly/sage-adebayo' />
                        <Box>
                            <Heading size='sm'>{props.review.nameUser}</Heading>
                            <Text>{props.review.title} <StarRatings
                                rating={props.review.rating}
                                starRatedColor="yellow"
                                starDimension="38px"
                                starSpacing="8px"
                                numberOfStars={5}
                                name='rating'
                            /> </Text>
                        </Box>
                    </Flex>
                    <IconButton
                        variant='ghost'
                        colorScheme='gray'
                        aria-label='See menu'
                    // icon={<BsThreeDotsVertical />}
                    />
                </Flex>
            </CardHeader>
            <CardBody>
                <Text>
                    {props.review.description}
                </Text>
            </CardBody>
            {/* <Image
                objectFit='cover'
                src='https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                alt='Chakra UI'
            /> */}

            <CardFooter
                justify='space-between'
                flexWrap='wrap'
                sx={{
                    '& > button': {
                        minW: '136px',
                    },
                }}
            >
            </CardFooter>
        </Card>
    )
}