import { ChakraProvider, Flex } from '@chakra-ui/react';
import { Home } from './pages/Home';

function App() {
  return (
    <Flex
      direction={"column"}
      align={"center"}
      maxW={"100%"}
    >
      <Home />
    </Flex>
  );
}

export default App;
