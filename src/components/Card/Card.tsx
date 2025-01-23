import { PropsWithChildren } from "react";

export function Card({ children }: PropsWithChildren) {
  return (
    <div
      style={{
        marginLeft: "20px",
        marginRight: "20px",
        marginTop: "20px",
        maxWidth: "100%",
        padding: "20px",
        maxHeight: "50%",
        height: "400px",
        borderRadius: "10px",
        border: "solid grey 2px",
      }}
    >
      {children}
    </div>
  );
}
