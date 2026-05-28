import type { SVGProps, JSX } from 'react'

export default function MobileText2Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M320-499h318v-60H320v60Zm40 110h238v-60H360v60ZM200-40v-880h558v210h42v173h-42v497H200Z" />
    </svg>
  )
}
