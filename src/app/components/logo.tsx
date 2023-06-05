import { Box, Typography } from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";

export function Logo({
  logoStyle,
}: {
  logoStyle?: Record<string, string | number | boolean>;
}) {
  return (
    <Box display="flex" alignItems="center" mr="2" sx={logoStyle}>
      <AdbIcon
        sx={{
          display: {
            xs: "none",
            md: "flex",
          },
          mr: 1,
        }}
      />
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
        sx={{
          display: {
            xs: "none",
            md: "flex",
          },
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
        }}
      >
        Job Spark
      </Typography>
    </Box>
  );
}
