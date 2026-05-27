import type { SVGProps } from 'react'

export default function SdCardFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M154.02-74.02v-569.61l242.59-242.59h409.61v812.2h-652.2Zm227.55-451.83h60v-157h-60v157Zm118.76 0h60v-157h-60v157Zm118.76 0h60v-157h-60v157Z" />
    </svg>
  )
}
