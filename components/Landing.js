import { Box, Heading, Container, Text, Button, Stack } from "@chakra-ui/react";
import Link from "next/link";
import { NAV_ITEMS } from "./Header";

export default function CallToActionWithAnnotation() {
  return (
    <>
      <Container maxW={"3xl"}>
        <Stack as={Box} textAlign={"center"} spacing={{ base: 8, md: 14 }} py={{ base: 20, md: 36 }}>
          <Heading fontWeight={600} fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }} color="darkBrown" lineHeight={"110%"}>
            Coffee Calculator 1.0
            <br />
            <Text as={"span"} color="olive">
              By Daniel Ives
            </Text>
          </Heading>
          <Text color={"darkBrown"}>Enter your desired amount of brewed coffee and follow the instructions!</Text>
          <Stack spacing={3} align={"center"} alignSelf={"center"} position={"relative"}>
            <Box>
              {NAV_ITEMS.map((navItem) => (
                <ActionButton key={navItem.label} {...navItem} />
              ))}
            </Box>
            <Button variant={"link"} color="darkBrown" size={"sm"}>
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

function ActionButton(props) {
  return (
    <Button
      bg={"darkBrown"}
      color={"bone"}
      rounded={"full"}
      px={6}
      m={1}
      _hover={{
        bg: "olive",
      }}
    >
      <Link href={props.href ?? "#"}>
        <a>{props.label}</a>
      </Link>
    </Button>
  );
}
