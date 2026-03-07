import { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from "react";

type MotionExtras = {
  layoutId?: string;
  whileHover?: Record<string, number | string>;
  transition?: Record<string, number | string>;
  initial?: Record<string, number | string>;
  animate?: Record<string, number | string>;
  exit?: Record<string, number | string>;
};

type MotionDivProps = HTMLAttributes<HTMLDivElement> & MotionExtras;
type MotionButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & MotionExtras;

function MotionDiv({ layoutId, whileHover, transition, initial, animate, exit, ...props }: MotionDivProps) {
  void layoutId;
  void whileHover;
  void transition;
  void initial;
  void animate;
  void exit;

  return <div {...props} />;
}

function MotionButton({ layoutId, whileHover, transition, initial, animate, exit, ...props }: MotionButtonProps) {
  void layoutId;
  void whileHover;
  void transition;
  void initial;
  void animate;
  void exit;

  return <button {...props} />;
}

export const motion = {
  div: MotionDiv,
  button: MotionButton,
};

export function AnimatePresence({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
