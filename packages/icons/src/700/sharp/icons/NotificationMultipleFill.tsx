import type { SVGProps } from 'react'

export default function NotificationMultipleFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M27-55v-616h94v522h571v94H27Zm154-154v-511l376-210 94 45-382 216 288 178 305-186 71 32v436H181Zm372-358L437-683l43-43 73 73 184-184 43 43-227 227Z" />
    </svg>
  )
}
