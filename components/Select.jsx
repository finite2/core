import { useRef } from "react";
import styled from "styled-components";

import { Button } from "./Button";

const SelectBase = styled.select`
  background: transparent;
  border: none;
  outline: none;
  text-align: center;
  text-align-last: center;

  :not([size]):not([multiple]) {
    height: calc(2.25rem + 2px);
  }
  border-radius: 100vh;
  :focus::-ms-value {
    color: #495057;
    background-color: #fff;
  }
  &.arrowless {
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
  }
  // option {
  // }
`;

export const Select = props => {
  const { style, options, flavor, ...rest } = props;
  const ref = useRef(null);

  return (
    <Button
      title={props.title}
      flavor={flavor}
      onClick={() => ref.current.focus()}
      style={style}
    >
      <SelectBase ref={ref} {...rest}>
        {options.map((o, i) => {
          o = typeof o === "string" ? { label: o, value: o } : o;
          return (
            <option key={i} value={o.value}>
              {o.label}
            </option>
          );
        })}
      </SelectBase>
    </Button>
  );
};
