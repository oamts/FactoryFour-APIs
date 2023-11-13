import Box from "@mui/material/Box";
import { css } from "@emotion/react";
import Typography from "@mui/material/Typography";
import { Info } from "../reducers/api/reducers.ts";
import { FC } from "react";
import CircularProgress from "@mui/material/CircularProgress";

interface Props {
  apiName: string;
  info: Info;
}

export const ApiCard: FC<Props> = ({ apiName, info }) => {
  const loading = info.status === "loading";
  const succeeded = info.status === "succeeded";
  return (
    <Box
      sx={css`
        width: 250px;
        height: 80px;
        border: 2px solid #000814;
        border-radius: 10px;
        padding-left: 20px;
        box-shadow: 5px 5px 1px #000814;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        background: white;

        &:before {
          background: none;
          border-left: 8px solid ${succeeded ? "green" : "red"};
          ${loading ? "" : `content: ""`};
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          z-index: 2;
          border-radius: 7px;
        }
      `}
    >
      {loading && <CircularProgress />}
      {!loading && (
        <>
          <Typography>{apiName.toUpperCase()}</Typography>
          <Typography>{info.data.hostname}</Typography>
          <Typography>
            {succeeded && new Date(Number(info.data.time)).toLocaleString()}
            {!succeeded && "OFFLINE"}
          </Typography>
        </>
      )}
    </Box>
  );
};
