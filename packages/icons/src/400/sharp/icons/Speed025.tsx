import type { SVGProps, JSX } from 'react'

export default function Speed025({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M160-277v-60h60v60h-60Zm410 0v-60h170v-115H570v-231h230v60H630v111h170v235H570Zm-290 0v-235h170v-111H280v-60h230v231H340v115h170v60H280Z" />
    </svg>
  )
}
