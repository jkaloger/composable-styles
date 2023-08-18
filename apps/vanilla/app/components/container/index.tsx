import { BreakpointPx } from "~/styles/core/breakpoints.css";
import { Box } from "../box";
import { Flex } from "../flex";
import { PropsWithChildren } from "react";
import { vars } from "../../styles/theme.css";

interface Props extends PropsWithChildren {
  size: BreakpointPx;
  background?: keyof typeof vars.colors;
}

export const Container = ({ size, background, children }: Props) => (
  <Flex background={background} direction="column" align="center">
    <Box maxWidth="full" width={size}>
      {children}
    </Box>
  </Flex>
);
