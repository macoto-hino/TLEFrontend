import { useEffect, useRef, useState } from 'react';
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
  width: 330rem;
  position: absolute;
  top: calc(10rem + var(--floatingToggleSize) + 6rem);
  left: 10rem;
`;

export default function MainPanel() {
  const [showPanel, setShowPanel] = useState(false);

  const [top, setTop] = useState(-999);
  const [left, setLeft] = useState(-999);
  const [dragging, setDragging] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  const panel = useMainPanel();

  useEffect(() => {
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
    observer.observe(document.body, config);
    return () => observer.disconnect();
  }, [showPanel]);

  useEffect(() => {
    if (panel.title.length == 0) {
      engineCall("C2VM-TLE-Call-MainPanel-Update");
    }
  }, [panel]);

  const mouseDownHandler = (_event: React.MouseEvent<HTMLElement>) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setTop(rect.top);
      setLeft(rect.left);
      setDragging(true);
    }
  };
  const mouseUpHandler = (_event: MouseEvent) => {
    setDragging(false);
  };
  const mouseMoveHandler = (event: MouseEvent) => {
    setTop((prev) => prev + event.movementY);
    setLeft((prev) => prev + event.movementX);
  };

  useEffect(() => {
    if (dragging) {
      document.body.addEventListener("mouseup", mouseUpHandler);
      document.body.addEventListener("mousemove", mouseMoveHandler);
      return () => {
        document.body.removeEventListener("mouseup", mouseUpHandler);
        document.body.removeEventListener("mousemove", mouseMoveHandler);
      };
    }
  }, [dragging]);

  const style: React.CSSProperties = {
    display: showPanel ? "block" : "none"
  };
  if (top >= -100 && left >= -100) {
    style.top = top;
    style.left = left;
  }

  return (
    <Container
      ref={containerRef}
      style={style}
    >
      <Header onMouseDown={mouseDownHandler} {...panel} />
      <Content items={panel.items} />
    </Container>
  );
}