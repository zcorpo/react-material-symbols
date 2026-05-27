import type { SVGProps, JSX } from 'react'

export default function CleaningServicesFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M114.02-34.02V-525.5h249.52v-400.72H596.7v400.72h249.52v491.48h-732.2Zm68.13-68.13h97.59v-160.24h68.13v160.24h98.06v-160.24h68.14v160.24h98.06v-160.24h68.37v160.24h97.35v-354.98h-595.7v354.98Z" />
    </svg>
  )
}
