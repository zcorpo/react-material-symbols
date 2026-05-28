import type { SVGProps, JSX } from 'react'

export default function PlannerBannerAdPt({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M212-132v-696h536v696H212Zm22-22h492v-652H234v652Zm85-111h331l-99-133-104 128-66-76-62 81Zm-85 111v-652 652Z" />
    </svg>
  )
}
