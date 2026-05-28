import type { SVGProps, JSX } from 'react'

export default function PipExit({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M132-212v-296h22v274h652v-492H452v-22h376v536H132Zm565-114 16-16-195-194h145v-22H481v182h22v-144l194 194ZM132-602v-146h226v146H132Zm348 122Z" />
    </svg>
  )
}
