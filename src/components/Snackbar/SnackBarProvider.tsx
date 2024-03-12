import Snackbar from "./Snackbar";

type Props = {
  children: React.ReactNode | React.ReactNode[];
};
export default function SnackbarProvider({ children }: Props) {
  return (
    <>
      <Snackbar />
      {children}
    </>
  );
}
