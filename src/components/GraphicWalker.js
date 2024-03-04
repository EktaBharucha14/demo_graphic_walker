import React from "react";
import { GraphicWalker } from "@kanaries/graphic-walker";
import { useFetch } from '../utils/useFetch';

function GraphicWalkerComponent() {

  const data = useFetch('https://pub-2422ed4100b443659f588f2382cfc7b1.r2.dev/datasets/ds-students-service.json');

  const fields = data?.fields
  const dataSource = data?.dataSource

  return (
    <div className="App">
      {fields && dataSource && fields.length > 0 && dataSource.length > 0 &&
        <GraphicWalker dataSource={dataSource} rawFields={fields} />
      }
    </div>
  );
}

export default GraphicWalkerComponent;
