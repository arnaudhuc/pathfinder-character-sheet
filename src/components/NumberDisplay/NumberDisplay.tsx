/** @jsx jsx */
import { jsx } from "@emotion/core";
import { NumberDisplayInfo } from "./NumberDisplayInfo";

interface NumberDisplay {
  numberToDisplay: number;
  messageLeft?: string | number;
  messageRight?: string | number;
  isLeftDark?: boolean;
}

export const NumberDisplay: React.FC<NumberDisplay> = (props) => {
  const {
    messageLeft,
    messageRight,
    isLeftDark = false,
    numberToDisplay,
  } = props;

  return (
    <div
      css={{
        width: "70px",
        height: "70px",
        transform: "rotate(45deg)",
        border: "7px solid",
        borderColor: isLeftDark ? "#bdbdbd" : "black",
        position: "relative",
      }}
    >
      <div
        css={{
          width: "70px",
          height: "70px",
          transform: "rotate(-45deg)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span>{numberToDisplay}</span>
        {messageLeft && (
          <NumberDisplayInfo
            isLeft={true}
            message={messageLeft}
            isLeftDark={isLeftDark}
          />
        )}
        {messageRight && (
          <NumberDisplayInfo
            isLeft={false}
            message={messageRight}
            isLeftDark={false}
          />
        )}
      </div>
    </div>
  );
};
