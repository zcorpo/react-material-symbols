import type { SVGProps } from 'react'

export default function HorizontalAlignRight({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M769.23-200v-560H800v560h-30.77ZM501.38-310.62l-22.23-22.23 131.77-131.77H160v-30.76h450.92L480.85-625.46l22.23-22.23L670.77-480 501.38-310.62Z" />
    </svg>
  )
}
