"use client";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Header from "~/components/builder/header";
import Grid from "@mui/material/Grid";
import Main from "~/components/builder/main";
import Sidebar from "~/components/builder/sidebar";
import { useBuilderContext } from "~/contexts/BuilderProvider";
import Preview from "~/components/builder/preview";

function BuilderPage() {
  const {
    value: { viewMode },
    handleUpdateValues,
  } = useBuilderContext();

  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    handleUpdateValues({
      storePageData: [{ name: "Page name", href: "home", elements: [] }],
      indexPageData: 0,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Box>
      <Header />
      <Box sx={{ height: "calc(100vh - 50px)" }}>
        {viewMode === "builder" ? (
          <Grid container>
            <Grid item xs={12} md={8.5} lg={9}>
              <Main />
            </Grid>
            <Grid item xs={12} md={3.5} lg={3}>
              <Sidebar />
            </Grid>
          </Grid>
        ) : (
          <Preview />
        )}
      </Box>
    </Box>
  );
}
export default BuilderPage;
