import type { SVGProps, JSX } from 'react'

export default function MoneyFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M574.31-329.39h172.53v-301.22H574.31v301.22Zm45.38-45.38v-210.46h81.77v210.46h-81.77Zm-286.07 45.38h169.07v-301.22H333.62v301.22ZM379-374.77v-210.46h78.31v210.46H379Zm-165.84 45.38h45.38v-301.22h-45.38v301.22ZM100-180v-600h760v600H100Z" />
    </svg>
  )
}
