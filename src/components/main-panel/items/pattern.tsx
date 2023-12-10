import styled from 'styled-components';
import Radio from '@/components/common/radio';

const Label = styled.span`
  color: rgba(217, 217, 217, 1);
`;

export default function Pattern(props: MainPanelItemRadio) {
  return (
    <>
      <Radio isChecked={props.isChecked} />
      <Label>{props.label}</Label>
    </>
  );
}