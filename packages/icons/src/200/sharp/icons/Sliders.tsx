import type { SVGProps, JSX } from 'react'

export default function Sliders({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M120.23-400v-160h719.54v160H120.23Zm442.69-30.77h247.77v-98.46H562.92v98.46Z" />
    </svg>
  )
}
