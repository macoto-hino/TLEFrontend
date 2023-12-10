import styled from 'styled-components';

const Button = styled.div<{border: string, backgroundColor: string}>`
  border-radius: 50%;
  background-color: ${props => props.backgroundColor};
  border: ${props => props.border};
  width: 30rem;
  height: 30rem;
`;

const Sign = styled.div<{color: string, padding: string, lineHeight: string}>`
  color: ${props => props.color};
  font-size: 24rem;
  line-height: ${props => props.lineHeight};
  font-weight: bold;
  padding: ${props => props.padding};
`;

export default function TrafficSignButton(props: {
  allow: boolean,
  variant: "traffic-light" | "sign",
  sign: "←" | "↑" | "→" | "↶" | "↷",
  onClick: React.MouseEventHandler<HTMLDivElement>
}) {
  let border = "4rem solid #01619e";
  if (props.variant == "sign") {
    border = props.allow ? "4rem solid #01619e" : "4rem solid #DA2121";
  } else if (props.variant == "traffic-light") {
    border = "4rem solid #111111";
  }

  let backgroundColor = "#000000";
  if (props.variant == "sign") {
    backgroundColor = props.allow ? "#01619e" : "#EEEEEE";
  } else if (props.variant == "traffic-light") {
    backgroundColor = "#111111";
  }

  let signColor = "black";
  if (props.variant == "sign") {
    signColor = props.allow ? "white" : "black";
  } else if (props.variant == "traffic-light") {
    signColor = props.allow ? "#476a4c" : "#a83c19";
  }

  let padding = "0rem 0rem 0rem 1rem";
  if (props.sign == "↶") {
    padding = "0rem 0rem 0rem 0rem";
  } else if (props.sign == "↷") {
    padding = "0rem 0rem 0rem 2rem";
  } else if (props.sign == "↑") {
    padding = "0rem 0rem 0rem 5rem";
  }

  let lineHeight = "22rem";
  if (props.sign == "↑" || props.sign == "↶" || props.sign == "↷") {
    lineHeight = "20rem";
  }

  return (
    <Button border={border} backgroundColor={backgroundColor} onClick={props.onClick}>
      <Sign color={signColor} padding={padding} lineHeight={lineHeight}>{props.sign}</Sign>
    </Button>
  );
}