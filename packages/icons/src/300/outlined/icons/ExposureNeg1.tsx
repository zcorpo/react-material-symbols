import type { SVGProps, JSX } from 'react'

export default function ExposureNeg1({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M390-419.62H130V-465h260v45.38Zm266.15 198.85v-450.08l-101.69 72.16-26.54-39.16 141.46-101.38h38.31v518.46h-51.54Z" />
    </svg>
  )
}
