import { Button } from "../components/button";
import { css } from "../styled-system/css";
import { HStack, Stack } from "../styled-system/jsx";

export default function Page() {
  return (
    <HStack gap="4">
      <Stack gap="6" padding="5">
        <div className={css({ fontSize: "2xl", fontWeight: "bold" })}>
          Hello 🐼!
        </div>
        <div className={css({ fontSize: "3xl", fontWeight: "thin" })}>
          This is a stack of content using the Stack Pattern
        </div>
        <div className={css({ color: "kindaRed" })}>With a gap of 6</div>
      </Stack>
      <Stack gap="2">
        <Button>Hello World</Button>
      </Stack>
    </HStack>
  );
}
