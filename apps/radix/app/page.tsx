import { Avatar, Box, Button, Card, Flex, Text } from "@radix-ui/themes";

export default function Page() {
  return (
    <Card>
      <Flex gap="3" align="center">
        <Avatar
          size="3"
          src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JhZGllbnR8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
          radius="full"
          fallback="T"
        />
        <Box>
          <Text as="div" size="2" weight="bold">
            Jack
          </Text>
          <Text as="div" size="2" color="gray">
            Engineering
          </Text>
        </Box>
      </Flex>
    </Card>
  );
}
