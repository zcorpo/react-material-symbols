import type { SVGProps, JSX } from 'react'

export default function Inventory2Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M172-132v-506h-40v-190h696v190h-40v506H172Zm-18-528h652v-146H154v146Zm226 195h200v-15H380v15Z" />
    </svg>
  )
}
