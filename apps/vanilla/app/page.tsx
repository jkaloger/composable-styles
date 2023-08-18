import { Box } from "./components/box";
import { Button } from "./components/button";
import { Container } from "./components/container";
import { CoolGradient } from "./components/cool-gradient";
import { Flex } from "./components/flex";
import { Heading } from "./components/heading";
import { Text } from "./components/text";

export default function Page() {
  return (
    <Box>
      <Flex direction="column" gap={2}>
        <Container size="sm">
          <Button />
        </Container>

        <Container size="sm">
          <Flex direction="column" gap={0} borderRadius="3" overflow="hidden">
            <Box padding={1} background="eucalyptus100">
              Eucalyptus 100
            </Box>
            <Box padding={1} background="eucalyptus900">
              Eucalyptus 900
            </Box>
          </Flex>
        </Container>

        <Container size="sm">
          <Flex direction="column" gap={0} borderRadius="3" overflow="hidden">
            <Box padding={1} background="gold100">
              Gold 100
            </Box>
            <Box padding={1} background="gold900">
              Gold 900
            </Box>
          </Flex>
        </Container>

        <Container size="sm" background="eucalyptusLinear">
          <Box position="relative" paddingY={3}>
            <Flex
              padding={1}
              position="relative"
              direction="column"
              background="glass"
              gap={1}
              borderRadius="1"
              overflow="hidden"
              backdropFilter="glass"
            >
              <Heading>Heading 1</Heading>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                in risus at orci iaculis efficitur. In non nisl diam.
                Pellentesque feugiat porttitor feugiat. Suspendisse nunc mi,
                malesuada non hendrerit suscipit, posuere non lacus. Nulla
                auctor placerat hendrerit. Nunc fermentum, velit ut laoreet
                vulputate, nisl dolor vulputate eros, in dignissim turpis leo id
                leo. Cras non ullamcorper tortor. Suspendisse cursus varius
                justo, nec blandit lectus mollis vitae. In lobortis fermentum
                lacus, non auctor sapien condimentum eu. Morbi nec egestas
                dolor, at commodo mauris.
              </Text>
            </Flex>
          </Box>
        </Container>
      </Flex>
    </Box>
  );
}
