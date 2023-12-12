import styled from 'styled-components';

const Button = styled.div`
  border-radius: 50%;
  width: 30rem;
  height: 30rem;
`;

export default function TrafficSignButton(props: {
  allow: boolean,
  variant: "traffic-light" | "sign",
  sign: "←" | "↑" | "→" | "↶" | "↷",
  style?: React.CSSProperties,
  onClick: React.MouseEventHandler<HTMLDivElement>
}) {
  let border = "#01619e";
  let backgroundColor = "#000000";
  let signColor = "black";
  if (props.variant == "sign") {
    border = props.allow ? "#01619e" : "#DA2121";
    backgroundColor = props.allow ? "#01619e" : "#E0E0E0";
    signColor = props.allow ? "white" : "black";
  }
  if (props.variant == "traffic-light") {
    border = "#111111";
    backgroundColor = "#111111";
    signColor = props.allow ? "#476a4c" : "#a83c19";
  }

  let fontSize = 85;
  let textX = 50;
  let textY = 80;
  if (props.sign == "↶") {
    textX = 45;
    textY = 75;
    fontSize = 80;
  }
  if (props.sign == "↷") {
    textX = 55;
    textY = 75;
    fontSize = 80;
  }

  return (
    <Button onClick={props.onClick} style={props.style}>
      <svg width="100%" height="100%" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="45" stroke={border} strokeWidth="10" fill={backgroundColor} />
        <text
          x={textX}
          y={textY}
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize={fontSize}
          fontWeight="700"
          fontFamily="Overpass"
          fill={signColor}
        >
          {props.sign}
        </text>
        {!props.allow && props.variant == "sign" && <rect x="5" y="45" width="90" height="10" transform="rotate(45 50 50)" fill={border} />}
      </svg>
    </Button>
  );
}