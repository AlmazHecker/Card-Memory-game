import React from "react";
import Card from "../components/UI/Card";
import { styled } from "../styles/stitches.config";

const MainLayout = () => {
  return (
    <Container>
      <Card />
    </Container>
  );
};

export default MainLayout;

MainLayout.propTypes = {};
MainLayout.defaultProps = {};

const Container = styled("div", {});
