import type { SVGProps, JSX } from 'react'

export default function FlexDirection({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M132-212v-218h300v218H132Zm0-318v-218h300v218H132Zm22-22h256v-174H154v174Zm515 340L510-371l15-15 133 131v-493h22v493l133-131 15 15-159 159Z" />
    </svg>
  )
}
