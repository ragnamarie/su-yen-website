import styled from "styled-components";

const StyledList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  padding-right: 40px;
`;

const StyledListItem = styled.li`
  font-weight: 700;
  font-size: 20px;
`;

export default function Contacts() {
  return (
    <StyledList>
      <StyledListItem>
        <u>💱phone</u> 678-999-8212
      </StyledListItem>
      <StyledListItem>
        <u>💱mail</u> syyyy@hennings.com
      </StyledListItem>
      <StyledListItem>
        <u>💱insta</u> princesssss
      </StyledListItem>
      <StyledListItem>
        <u>💱tiktok</u> syyyyck
      </StyledListItem>
    </StyledList>
  );
}
