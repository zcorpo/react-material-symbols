import type { SVGProps, JSX } from 'react'

export default function MoreDownFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M200-200v-440h60v380h380v60H200Zm200-200v-440h60v380h380v60H400Z" />
    </svg>
  )
}
