import React, { useEffect } from "react";
import { GraphicWalker } from "@kanaries/graphic-walker";
// import { useFetch } from '../utils/useFetch';
import { useDispatch, useSelector } from 'react-redux'
import { getGraphicwalkerdataList } from "../store/apps/graphic_walker";

function GraphicWalkerComponent() {
  const dispatch = useDispatch()
  const graphicWalkerDataList = useSelector(state => state.graphicWalker.userGraphicWalkerDataList)

  // const data = useFetch('https://pub-2422ed4100b443659f588f2382cfc7b1.r2.dev/datasets/ds-students-service.json');

  const fields = graphicWalkerDataList?.fields
  const dataSource = graphicWalkerDataList?.dataSource

  console.log("dataSource =>", dataSource)

  const getAllData = () => {
    dispatch(getGraphicwalkerdataList("data"))
  }

  useEffect(() => {
    getAllData()
  }, [])

  return (
    <div className="App">
      {fields && dataSource && fields.length > 0 && dataSource.length > 0 &&
        <GraphicWalker dataSource={dataSource} rawFields={fields} />
      }
    </div>
  );
}

export default GraphicWalkerComponent;
