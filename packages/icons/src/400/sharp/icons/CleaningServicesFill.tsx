import type { SVGProps, JSX } from 'react'

export default function CleaningServicesFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M120-40v-480h250v-400h220v400h250v480H120Zm60-60h105v-160h60v160h105v-160h60v160h105v-160h60v160h105v-360H180v360Z" />
    </svg>
  )
}
