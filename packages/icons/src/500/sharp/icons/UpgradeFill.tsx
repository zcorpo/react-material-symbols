import type { SVGProps } from 'react'

export default function UpgradeFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M275.93-154.02v-68.13h408.14v68.13H275.93Zm170-178.13v-351.7L329-566.91l-47.74-47.74L480-813.39l198.74 198.74L631-566.91 514.07-683.85v351.7h-68.14Z" />
    </svg>
  )
}
