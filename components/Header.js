import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useBreakpointValue,
  useDisclosure,
  PopoverCloseButton,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, ChevronDownIcon, ChevronRightIcon } from "@chakra-ui/icons";
import NextLink from "next/link";

export default function Header() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex minH={"60px"} py={{ base: 4 }} px={{ base: 4 }} mb={{ base: 4 }} align={"center"} bg={"offWhite"}>
        <Flex flex={{ base: 1, md: "auto" }} ml={{ base: -2 }} display={{ base: "flex", md: "none" }}>
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex onClick={isOpen ? onToggle : null} flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Box
            p={2}
            fontWeight={700}
            color={"darkBrown"}
            _hover={{
              textDecoration: "none",
              color: "darkTan",
            }}
          >
          <NextLink textAlign={useBreakpointValue({ base: "center", md: "left" })} fontFamily={"heading"} href="/" color="darkBrown">
            <a>Coffee Calculator</a>
          </NextLink>
          </Box>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav onToggle={onToggle} />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = "darkBrown";
  const linkHoverColor = "darkTan";
  const popoverContentBgColor = "creme";

  const { onOpen, onClose, isOpen } = useDisclosure();

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          {navItem.children ? (
            <Popover isOpen={isOpen} onOpen={onOpen} onClose={onClose} trigger={"hover"} placement={"bottom-start"}>
              <PopoverTrigger>
                <Box
                  p={2}
                  fontSize={"sm"}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: "none",
                    color: linkHoverColor,
                  }}
                >
                  <NextLink href={!navItem.children ? navItem.href : ""}>
                    <a>{navItem.label}</a>
                  </NextLink>
                </Box>
              </PopoverTrigger>

              {navItem.children && (
                <PopoverContent border={0} boxShadow={"xl"} bg={popoverContentBgColor} p={4} rounded={"xl"} minW={"sm"}>
                  <Stack onClick={onClose}>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          ) : (
            <Box
              p={2}
              fontSize={"sm"}
              fontWeight={500}
              color={linkColor}
              _hover={{
                textDecoration: "none",
                color: linkHoverColor,
              }}
            >
              <NextLink href={!navItem.children ? navItem.href : ""}>
                <a>{navItem.label}</a>
              </NextLink>
            </Box>
          )}
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href }) => {
  return (
    <Link role={"group"} display={"block"} p={2} rounded={"md"} _hover={{ bg: "bone" }}>
      <NextLink href={href ?? "#"}>
        <Stack direction={"row"} align={"center"}>
          <Box>
            <Text transition={"all .3s ease"} _groupHover={{ color: "darkTan" }} fontWeight={500}>
              {label}
            </Text>
          </Box>
          <Flex
            transition={"all .3s ease"}
            transform={"translateX(-10px)"}
            opacity={0}
            _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
            justify={"flex-end"}
            align={"center"}
            flex={1}
          >
            <Icon color={"darkTan"} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </NextLink>
    </Link>
  );
};

const MobileNav = (props) => {
  return (
    <Stack bg={"creme"} p={4} display={{ md: "none" }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} closeDropdown={props.onToggle} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href, closeDropdown }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children ? onToggle : closeDropdown}>
      <NextLink passHref href={!children ? href : ""}>
        <Flex
          py={2}
          as={Link}
          justify={"space-between"}
          align={"center"}
          _hover={{
            textDecoration: "none",
          }}
        >
          <Text fontWeight={600} color={"darkBrown"}>
            {label}
          </Text>
          {children && <Icon as={ChevronDownIcon} transition={"all .25s ease-in-out"} transform={isOpen ? "rotate(180deg)" : ""} w={6} h={6} />}
        </Flex>
      </NextLink>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack mt={2} pl={4} borderLeft={1} borderStyle={"solid"} borderColor={"darkBrown"} align={"start"}>
          {children &&
            children.map((child) => (
              <NextLink key={child.label} py={2} href={child.href}>
                <Box w="100%" onClick={closeDropdown}>
                  <a>{child.label}</a>
                </Box>
              </NextLink>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

// interface NavItem {
//   label: string;
//   subLabel?: string;
//   children?: Array<NavItem>;
//   href?: string;
// }

export const NAV_ITEMS = [
  {
    label: "Hario V60",
    href: "/v60-recipe",
  },
  {
    label: "Aeropress",
    href: "/aeropress/aeropress-1",
    children: [
      {
        label: "My Go-To 2m30s Brew",
        href: "/aeropress/aeropress-1",
      },
      {
        label: "Fast Concentrate",
        href: "/aeropress/aeropress-2",
      },
      {
        label: "Inverted",
        href: "/aeropress/aeropress-3",
      },
    ],
  },
  {
    label: "French Press",
    href: "/french-press",
  },
];
