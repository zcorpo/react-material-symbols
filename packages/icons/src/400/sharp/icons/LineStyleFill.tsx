import type { SVGProps, JSX } from 'react'

export default function LineStyleFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M120-160v-60h60v60h-60Zm0-120v-60h209v60H120Zm0-120v-60h330v60H120Zm0-120v-280h720v280H120Zm165 360v-60h60v60h-60Zm90-120v-60h210v60H375Zm75 120v-60h60v60h-60Zm60-240v-60h330v60H510Zm105 240v-60h60v60h-60Zm16-120v-60h209v60H631Zm149 120v-60h60v60h-60Z" />
    </svg>
  )
}
