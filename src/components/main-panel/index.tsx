import { useEffect, useState } from 'react';
import styled from 'styled-components';

import Header from './header';
import Content from './content';
import { engineCall, useEngineOn } from '@/engine';

const defaultPanel = {
  title: "",
  image: "",
  items: []
};

const useMainPanel = () => {
  const [panel, setPanel] = useState<MainPanel>(defaultPanel);

  const result = useEngineOn("C2VM-TLE-Event-UpdateMainPanel", "{}");

  useEffect(() => {
    const newPanel = JSON.parse(result);
    setPanel({
      title: newPanel.title ?? defaultPanel.title,
      image: newPanel.image ?? defaultPanel.image,
      items: newPanel.items ?? defaultPanel.items
    });
  }, [result]);

  return panel;
};

const Container = styled.div`
  width: 300rem;
  position: absolute;
  top: calc(10rem + var(--floatingToggleSize) + 6rem);
  left: 10rem;
`;

export default function MainPanel() {
  const [showPanel, setShowPanel] = useState(false);

  const panel = useMainPanel();

  useEffect(() => {
    const body = document.querySelector("body");
    const config = { attributes: true, childList: true, subtree: true };
    const callback = (_mutationList: MutationRecord[], _observer: MutationObserver) => {
      const img = document.querySelector("button.selected.item_KJ3.item-hover_WK8.item-active_Spn > img") as HTMLImageElement;
      if (img && img.src == "Media/Game/Icons/TrafficLights.svg") {
        setShowPanel(true);
      } else if (showPanel) {
        setShowPanel(false);
        engineCall("C2VM-TLE-Call-MainPanel-Save", "{}");
      }
    };
    const observer = new MutationObserver(callback);
    if (body) {
      observer.observe(body, config);
    }
    return () => observer.disconnect();
  }, [showPanel]);

  useEffect(() => {
    if (panel.title.length == 0) {
      engineCall("C2VM-TLE-Call-MainPanel-Update");
    }
  }, [panel]);

  return (
    <Container style={{display: showPanel ? "block" : "none"}}>
      <Header {...panel} />
      <Content items={panel.items} />
    </Container>
  );
}