import styled from "styled-components";
import PropTypes from "prop-types";

const ratiosToColumnWidths = ratios => {
  if (typeof ratios === "string") {
    return ratios;
  } else if (typeof ratios === "number") {
    return Array(ratios)
      .fill("1fr")
      .join(" ");
  }
};

export const Grid = styled.div.attrs(
  ({ columns, rowHeight, style, dense, ...rest }) => ({
    ...rest,
    style: {
      gridTemplateColumns: ratiosToColumnWidths(columns),
      gridAutoRows: rowHeight,
      gridAutoFlow: `row${dense ? " dense" : ""}`,
      ...style
    }
  })
)`
  display: grid;
  grid-gap: 10px;
  text-align: center;
  align-items: center;
`;

Grid.defaultProps = {
  columns: 1,
  rowHeight: 40,
  dense: false
};
