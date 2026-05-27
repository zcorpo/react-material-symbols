import type { SVGProps } from 'react'

export default function FormatImageBreakLeft({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M120-120v-60h720v60H120Zm0-165v-390h390v390H120Zm60-60h270v-270H180v270Zm-60-435v-60h720v60H120Zm195 300Z" />
    </svg>
  )
}
