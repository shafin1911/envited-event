import { Card, styled } from "@mui/material";

export const CardStyle = styled(Card)(({ theme }) => {
  return {
    background: theme.palette.grey[50],
    marginTop: "16px",
    marginBottom: "16px",
    overflow: "hidden",
    position: "relative",
    "&:after": {
      content: '""',
      position: "absolute",
      width: "200px",
      height: "200px",
      border: "19px solid ",
      borderColor: theme.palette.primary.light,
      borderRadius: "50%",
      top: "65px",
      right: "-150px",
    },
    "&:before": {
      content: '""',
      position: "absolute",
      width: "200px",
      height: "200px",
      border: "3px solid ",
      borderColor: theme.palette.primary.light,
      borderRadius: "50%",
      top: "145px",
      right: "-70px",
    },
    "& .MuiCardContent-root": {
      position: "relative",
      zIndex: 1,
    },
  };
});
