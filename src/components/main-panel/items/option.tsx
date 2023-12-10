import styled from 'styled-components';
import Checkbox from '@/components/common/checkbox';

const Label = styled.span`
  color: rgba(217, 217, 217, 1);
`;

export default function Option(props: MainPanelItemCheckbox) {
  return (
    <>
      <Checkbox isChecked={props.isChecked} />
      <Label>{props.label}</Label>
    </>
  );
}