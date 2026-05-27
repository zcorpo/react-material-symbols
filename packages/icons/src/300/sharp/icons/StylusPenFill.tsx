import type { SVGProps, JSX } from 'react'

export default function StylusPenFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M259.92-338.31 352-681.15h64.85v-56.93l54-121.92h18.3l54.39 121.92v56.93h64.84l92.08 342.84H259.92ZM180-140l35.92-96h528.16L780-140H180Z" />
    </svg>
  )
}
