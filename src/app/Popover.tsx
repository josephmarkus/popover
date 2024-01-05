import {
  MutableRefObject,
  ReactElement,
  ReactNode,
  Ref,
  RefAttributes,
  cloneElement,
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import styles from "./popover.module.css";

export type PopoverElementType = HTMLDivElement;

export interface PopoverProps extends RefAttributes<PopoverElementType> {
  children?: ReactNode;
  trigger: ReactElement;
  /** Callback that fires each time the accordion is opened */
  onOpen?: () => void;
  /** Callback that fires each time the accordion is closed */
  onClose?: () => void;
  /** Custom class name for setting specific CSS */
  className?: string;
  anchor?: MutableRefObject<ReactElement | SVGSVGElement | null>;
  appElement?: HTMLElement | ShadowRoot | null;
}

export type PopoverRef = Ref<PopoverElementType>;

const CrossIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className={styles.closeIcon}
    viewBox="0 0 384 512"
  >
    <path
      fill="currentColor"
      d="M345 137l17-17-34-33.9-17 17-119 119L73 103 56 86l-33.9 34 17 17 119 119L39 375l-17 17 34 33.9 17-17 119-119L311 409l17 17 33.9-34-17-17-119-119L345 137z"
    />
  </svg>
);

export const Popover = (props: PopoverProps) => {
  const [mounted, setMounted] = useState(false);
  const portalId = useId();
  const triggerRef = useRef(null);
  const {
    children,
    trigger,
    anchor = triggerRef,
    onOpen,
    onClose,
    className,
    appElement,
  } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const anchorSize = (anchor?.current as Element)?.getBoundingClientRect();
  const containerSize = containerRef?.current?.getBoundingClientRect();
  const [topOffset, setTopOffset] = useState<"auto" | number>("auto");
  const [leftOffset, setLeftOffset] = useState<"auto" | number>("auto");

  const openPopover = () => {
    setIsOpen(true);
    onOpen?.();
  };

  const closePopover = () => {
    setIsOpen(false);
    onClose?.();
  };

  const handleClick = () => {
    if (isOpen) {
      closePopover();
      return;
    }

    openPopover();
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  // useWindowEvent("keydown", (e) => {
  //   if (isOpen && e.key === "Escape") {
  //     closePopover();
  //   }
  // });

  const triggerId = useId();

  const triggerComponent = cloneElement(trigger, {
    id: triggerId,
    ref: triggerRef,
    className: styles.toggle,
    onClick: handleClick,
  });

  const recalcOffset = useCallback(() => {
    if (!anchorSize || !containerSize) return;

    const { width, height, top, left } = anchorSize;
    const { width: containerWidth } = containerSize;
    const offsetY = Math.floor(top + height + scrollY);
    const offsetX = Math.floor(
      left + scrollX - containerWidth / 2 + width / 2 + 1,
    );

    setTopOffset(offsetY);
    setLeftOffset(offsetX);
  }, [anchorSize, containerSize]);

  useEffect(() => {
    window.addEventListener("resize", recalcOffset, { passive: true });

    return () => {
      window.removeEventListener("resize", recalcOffset);
    };
  }, [recalcOffset]);

  useEffect(() => {
    recalcOffset();
  }, [isOpen, recalcOffset]);

  return (
    <>
      {triggerComponent}
      {mounted &&
        createPortal(
          <div
            className={`${styles.container} ${isOpen && styles.containerOpen}`}
            ref={containerRef}
            style={{ top: topOffset, left: leftOffset }}
            role="tooltip"
            aria-describedby={triggerId}
            aria-hidden={!isOpen}
          >
            <div className={styles.popover}>
              <header className={styles.header}>
                <button
                  type="button"
                  className={styles.closeButton}
                  onClick={handleClick}
                  aria-label="Close"
                >
                  <CrossIcon />
                </button>
              </header>
              <div>{children}</div>
            </div>
          </div>,
          appElement || document.body,
          portalId,
        )}
    </>
  );
};
