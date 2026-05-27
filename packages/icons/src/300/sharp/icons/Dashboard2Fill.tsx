import type { SVGProps, JSX } from 'react'

export default function Dashboard2Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M581.92-180v-263.46H860V-180H581.92ZM451.15-516.54V-780H860v263.46H451.15ZM100-180v-263.46h408.85V-180H100Zm0-336.54V-780h278.08v263.46H100Z" />
    </svg>
  )
}
