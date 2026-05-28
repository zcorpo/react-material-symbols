import type { SVGProps, JSX } from 'react'

export default function SelectWindow2Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M809.23-394.92V-692H272.46v-148H840v445.08h-30.77ZM120-120v-485.85h603.08V-120H120Z" />
    </svg>
  )
}
