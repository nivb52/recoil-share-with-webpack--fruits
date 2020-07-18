import React from "react";
import { Layout } from "antd";
import { useRecoilValue } from "recoil";
import { selectedItems } from "home/atoms";

export default () => {
  const selected = useRecoilValue(selectedItems);

return (
  <Layout.Header>
    <h1 style={{ color: "white" }}>Header -  {selected.length } items
      </h1>
  </Layout.Header>
)};
