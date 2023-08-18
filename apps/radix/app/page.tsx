import {
  Avatar,
  Box,
  Button,
  Card,
  Container,
  Flex,
  Heading,
  IconButton,
  Kbd,
  Text,
} from "@radix-ui/themes";
import { TextField } from "@radix-ui/themes";
import {
  BookmarkIcon,
  DotsHorizontalIcon,
  MagnifyingGlassIcon,
} from "@radix-ui/react-icons";

export default function Page() {
  return (
    <>
      <Container my="5" size="1">
        <Card>
          <Flex direction="column" gap="3">
            <Flex gap="2" align="center">
              <Avatar fallback="S" />
              <Text weight="medium">ABC</Text>
            </Flex>
            <Box>
              <Button>
                <BookmarkIcon width="16" height="16" /> Bookmark
              </Button>
            </Box>
            <Box>
              <Kbd size="4">Shift + Tab</Kbd>
            </Box>
          </Flex>
        </Card>
      </Container>
    </>
  );
}
