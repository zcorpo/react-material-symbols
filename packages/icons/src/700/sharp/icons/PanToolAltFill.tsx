import type { SVGProps, JSX } from 'react'

export default function PanToolAltFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M343-96 25-472l90-101 155 107v-449h80v460h93v-321h79v321h93v-236h79v236h92v-130h80v489H343Z" />
    </svg>
  )
}
