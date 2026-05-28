import type { SVGProps, JSX } from 'react'

export default function FileOpenFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M878-54 767-166v117h-94v-278h278v94H833l111 111-66 68ZM511-591h220L511-811v220ZM135-55v-851h436l255 255v264H613v332H135Z" />
    </svg>
  )
}
