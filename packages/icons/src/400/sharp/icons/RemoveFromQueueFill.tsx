import type { SVGProps } from 'react'

export default function RemoveFromQueueFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M320-493h320v-60H320v60Zm10 373v-80H80v-640h800v640H630v80H330Z" />
    </svg>
  )
}
