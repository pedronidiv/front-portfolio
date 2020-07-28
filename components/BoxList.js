import React, { useCallback, useState, useEffect } from "react";
import styled from "styled-components";

const BoxList = ({
  list,
  onItemSelected = (key) => {},
  color = "primary",
  activeItem,
}) => {
  const _onItemSelected = useCallback((key) => {
    setActiveItem(key);
    onItemSelected(key);
  });

  const [_activeItem, setActiveItem] = useState(activeItem);

  useEffect(() => {
    if (!_activeItem) {
      setActiveItem(list[0]?.key);
    }
  });

  useEffect(() => {
    if (activeItem != _activeItem) {
      setActiveItem(activeItem);
      onItemSelected(activeItem);
    }
  }, [activeItem]);

  return (
    <StyledBoxList>
      {list.map(({ key, label }) => (
        <StyledBoxListItem
          tabIndex="0"
          role="button"
          onClick={() => _onItemSelected(key)}
          key={key}
          className={_activeItem === key ? "active" : undefined}
        >
          {label}
        </StyledBoxListItem>
      ))}
    </StyledBoxList>
  );
};

const StyledBoxListItem = styled.li`
  text-transform: uppercase;
  appearance: none;
  cursor: pointer;
  padding-top: 6px;
  padding-bottom: 6px;
  opacity: 0.3;
  transition: 0.3s;
  &.active {
    opacity: 1;
  }
  &:hover {
    opacity: 1;
  }
`;
const StyledBoxList = styled.ul`
  list-style: none;
  ${StyledBoxListItem} {
    &.active {
      color: var(
        ${(props) =>
          props.color ? "--color-" + props.color : "--color-primary"}
      );
    }
  }
`;
export default BoxList;
