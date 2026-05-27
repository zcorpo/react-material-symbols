import type { SVGProps, JSX } from 'react'

export default function SwitchAccess3Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m399.92-344.85-31.23-32.61 78.85-79.85H100v-45.38h347.54l-78.85-79.85 31.23-32.61L534.46-480 399.92-344.85ZM100-605v-125.69h125.08V-605H100Zm0 374.69V-355h125.08v124.69H100ZM418.62-100v-160.08L637.54-480 418.62-699.92V-860H860v201.69h37.61v157.92H860V-100H418.62Z" />
    </svg>
  )
}
