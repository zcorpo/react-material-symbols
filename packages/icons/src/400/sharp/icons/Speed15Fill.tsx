import type { SVGProps, JSX } from 'react'

export default function Speed15Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M287-277v-346h-83v-60h143v406h-60Zm120 0v-60h60v60h-60Zm120 0v-60h170v-115H527v-231h230v60H587v111h170v235H527Z" />
    </svg>
  )
}
