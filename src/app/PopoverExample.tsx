import { useRef } from "react";
import styles from "./popoverExample.module.css";
import { Popover } from "./Popover";

export const PopoverExample = () => {
  const anchorRef = useRef(null);

  return (
    <Popover
      anchor={anchorRef}
      trigger={
        <button type="button">
          <span>Click me</span>{" "}
          <span ref={anchorRef} className={styles.anchor} />
        </button>
      }
    >
      Tooltip content
    </Popover>
  );
};
