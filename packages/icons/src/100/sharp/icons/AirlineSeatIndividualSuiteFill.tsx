import type { SVGProps, JSX } from 'react'

export default function AirlineSeatIndividualSuiteFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M92-332v-287h22v265h356v-265h398v287H92Zm235-134.12q20-20.12 20-49.5T327-565q-20-20-50-20t-50 20.12q-20 20.12-20 49.5T227-466q20 20 50 20t50-20.12Z" />
    </svg>
  )
}
