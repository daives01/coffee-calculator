import Head from 'next/head';
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
} from '@chakra-ui/react';
import Link from 'next/link';

export default function CallToActionWithAnnotation() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Container maxW={'3xl'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            Coffee Calculator 1.0<br />
            <Text as={'span'} color={'green.400'}>
             By Daniel Ives 
            </Text>
          </Heading>
          <Text color={'gray.500'}>
              Enter your desired amount of brewed coffee and follow the instructions!
          </Text>
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}>
            <Button
              bg={'primary'}
              rounded={'full'}
              px={6}
              _hover={{
                bg: 'secondary',
              }}>
                  <Link href='/v60-recipe'>
                      <a>Make a V60</a>
                  </Link>
            </Button>
            <Button variant={'link'} color='secondary' size={'sm'}>
                <Link href="https://github.com/daives01">
                    <a>See my Github</a>
                </Link>
            </Button>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}