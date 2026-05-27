import type { SVGProps } from 'react'

export default function Speed12({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M287-277v-346h-83v-60h143v406h-60Zm120 0v-60h60v60h-60Zm120 0v-235h170v-111H527v-60h230v231H587v115h170v60H527Z" />
    </svg>
  )
}
