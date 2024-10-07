import { CircularProgress } from "@mui/material";

export default function Loading() {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center text-black ">
      <CircularProgress />
      loading...
    </div>
  );
}
