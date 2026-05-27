import type { SVGProps, JSX } from 'react'

export default function MobiledataArrows({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M328.39-591.08h45.38v363.16l85.54-85.16 32.23 32.62L351.08-140 211-280.46l32.23-32.62 85.16 85.16v-363.16Zm294.92 202h-45.39v-343l-84.77 85.16-32.61-32.62L600.62-820l140.46 140.46-32.62 32.62-85.15-85.16v343Z" />
    </svg>
  )
}
