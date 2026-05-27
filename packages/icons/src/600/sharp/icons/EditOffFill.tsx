import type { SVGProps, JSX } from 'react'

export default function EditOffFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m597.57-440.3-155.7-156.27 284.39-284.39 157.39 154L597.57-440.3ZM811.91-49.91 509.04-352.35 262.57-105.87h-155.7V-261l246.48-247.04L49.91-811.91l46.52-46.52 762 762-46.52 46.52Zm-81.95-637.48 40-39.44-41.57-42.13-40.56 40 42.13 41.57Z" />
    </svg>
  )
}
