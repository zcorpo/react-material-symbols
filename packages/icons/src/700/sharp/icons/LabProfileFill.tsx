import type { SVGProps, JSX } from 'react'

export default function LabProfileFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M320-490h320v-60H320v60Zm0-160h320v-60H320v60ZM826-97 588-407H135v-499h691v809ZM135-55v-258h407L739-55H135Z" />
    </svg>
  )
}
