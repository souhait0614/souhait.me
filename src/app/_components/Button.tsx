import * as styles from "./Button.css"

import { Slot } from "@radix-ui/react-slot"
import clsx from "clsx"

import type { ComponentPropsWithRef } from "react"

type ButtonProps = ComponentPropsWithRef<"button"> & {
  asChild?: boolean
  buttonColor?: "transparent" | "accent"
}
export const Button = ({ asChild, buttonColor: color, className, ...props }: ButtonProps) => {
  const Comp = asChild ? Slot : "button"
  return (
    <Comp
      className={clsx(
        styles.button({
          color,
        }),
        className,
      )}
      {...props}
    />
  )
}
