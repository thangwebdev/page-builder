import React from "react";
import Button from "~/components/ui/button";

function Publish() {
  return (
    <Button
      variant="contained"
      width="80"
      unitWidth="px"
      sx={{
        borderRadius: "4px",
      }}
    >
      Lưu
    </Button>
  );
}

export default Publish;
