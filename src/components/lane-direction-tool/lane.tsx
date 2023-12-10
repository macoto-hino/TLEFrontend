import styled from 'styled-components';
import TrafficSignButton from '../common/traffic-sign-button';

const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  align-items: center;
  margin: 0 0 -6rem 0;
`;

const Box = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  align-items: center;
  margin: 0 0 6rem 0;
`;

export default function Lane(props: {data: LaneDirection, onClick: (eventName: "banLeft" | "banRight" | "banStraight" | "banUTurn") => void}) {
  return (
    <>
      {/* <Box style={{flex: "0 0 60rem", justifyContent: "flex-start"}}>{props.data.label}</Box> */}
      <Container>
        <Box><TrafficSignButton allow={!props.data.banLeft} variant="sign" sign="←" onClick={() => props.onClick("banLeft")}/></Box>
        <Box><TrafficSignButton allow={!props.data.banStraight} variant="sign" sign="↑" onClick={() => props.onClick("banStraight")}/></Box>
        <Box><TrafficSignButton allow={!props.data.banRight} variant="sign" sign="→" onClick={() => props.onClick("banRight")}/></Box>
        {props.data.leftHandTraffic && <Box><TrafficSignButton allow={!props.data.banUTurn} variant="sign" sign="↷" onClick={() => props.onClick("banUTurn")}/></Box>}
        {!props.data.leftHandTraffic && <Box><TrafficSignButton allow={!props.data.banUTurn} variant="sign" sign="↶" onClick={() => props.onClick("banUTurn")}/></Box>}
      </Container>
    </>
  );
}