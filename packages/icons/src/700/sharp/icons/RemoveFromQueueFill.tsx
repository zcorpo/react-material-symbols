import type { SVGProps, JSX } from 'react'

export default function RemoveFromQueueFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M303-481h354v-95H303v95Zm14 386v-80H55v-691h851v691H644v80H317Z" />
    </svg>
  )
}
