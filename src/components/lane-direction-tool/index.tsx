import { useEngineOn } from "@/engine";
import { useEffect, useState } from "react";
import Button from "./button";
import Panel from "./panel";

const useLaneDirectionTool = () => {
  const [tool, setTool] = useState<LaneDirectionTool>({
    buttons: [],
    panels: []
  });

  const result = useEngineOn("C2VM-TLE-Event-UpdateLaneDirectionTool", "{}");

  useEffect(() => {
    const newTool = JSON.parse(result);
    if (newTool.buttons && newTool.panels) {
      setTool(newTool);
    }
  }, [result]);

  return tool;
};

export default function LaneDirectionTool(props: {onChange?: (openedPanel: number) => void}) {
  const tool = useLaneDirectionTool();

  const [openedPanel, setOpenedPanel] = useState(-1);

  useEffect(() => {
    setOpenedPanel(-1);
  }, [tool]);

  useEffect(() => {
    if (props.onChange) {
      props.onChange(openedPanel);
    }
  }, [openedPanel, props]);

  return (
    <>
      {openedPanel < 0 && tool.buttons.map((item, index) => <Button data={item} onClick={() => setOpenedPanel(index)}/>)}
      {tool.panels.map((item, index) => index == openedPanel && <Panel data={item} onSave={() => setOpenedPanel(-1)}/>)}
    </>
  );
}