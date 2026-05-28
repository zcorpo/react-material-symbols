import type { SVGProps, JSX } from 'react'

export default function ArrowsMoreDown({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M200-120v-420h60v360h360v60H200Zm220-220v-420h60v360h360v60H420Z" />
    </svg>
  )
}
