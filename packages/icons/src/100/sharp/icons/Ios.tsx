import type { SVGProps, JSX } from 'react'

export default function Ios({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M183-619v-34h34v34h-34Zm6 313v-239h22v239h-22Zm122 0v-348h184v348H311Zm22-22h140v-304H333v304Zm261 22v-22h161v-142H594v-184h183v22H616v140h161v186H594Z" />
    </svg>
  )
}
