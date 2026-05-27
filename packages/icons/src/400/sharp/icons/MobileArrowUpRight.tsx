import type { SVGProps, JSX } from 'react'

export default function MobileArrowUpRight({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m385-342 155-155v113h60v-216H384v60h114L343-385l42 43ZM200-40v-880h558v210h42v173h-42v497H200Zm60-60h438v-760H260v760Zm0 0v-760 760Z" />
    </svg>
  )
}
