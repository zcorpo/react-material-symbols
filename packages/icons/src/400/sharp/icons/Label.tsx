import type { SVGProps, JSX } from 'react'

export default function Label({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M80-160v-640h561l240 320-239 320H80Zm60-60h471l195-260-195-260H140v520Zm333-260Z" />
    </svg>
  )
}
