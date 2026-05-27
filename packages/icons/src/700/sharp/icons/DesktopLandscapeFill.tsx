import type { SVGProps, JSX } from 'react'

export default function DesktopLandscapeFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M219-299h383v-223H219v223Zm448-133h74v-229H336v74h331v155ZM55-135v-691h851v691H55Z" />
    </svg>
  )
}
