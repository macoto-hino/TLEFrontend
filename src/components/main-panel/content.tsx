import styled from 'styled-components';
import Title from './items/title';
import Message from './items/message';
import Divider from './items/divider';
import Row from './items/row';
import Notification from './items/notification';

import Button from '@/components/common/button';
import Radio from '@/components/common/radio';
import Checkbox from '@/components/common/checkbox';

const Container = styled.div`
  border-radius: 0rem 0rem 4rem 4rem;
  background-color: rgba(42, 55, 83, 0.437500);
  backdrop-filter: blur(5px);
  color: rgba(255, 255, 255, 1);
  flex: 1;
  position: relative;
  padding: 6rem;
`;

const Label = styled.span`
  color: rgba(217, 217, 217, 1);
`;

export default function Content(props: {items: MainPanelItem[]}) {
  return (
    <Container>
      {props.items.map((item) => {
        if (item.itemType == "title") {
          return <Row data={item}><Title {...item} /></Row>;
        }
        if (item.itemType == "message") {
          return <Row data={item}><Message {...item} /></Row>;
        }
        if (item.itemType == "divider") {
          return <Divider />;
        }
        if (item.itemType == "radio") {
          return (
            <Row data={item}>
              <Radio {...item} />
              <Label>{item.label}</Label>
            </Row>
          );
        }
        if (item.itemType == "checkbox") {
          return (
            <Row data={item}>
              <Checkbox {...item} />
              <Label>{item.label}</Label>
            </Row>
          );
        }
        if (item.itemType == "button") {
          return <Row data={item}><Button {...item} /></Row>;
        }
        if (item.itemType == "notification") {
          return <Notification {...item} />;
        }
        return <></>;
      })}
    </Container>
  );
}