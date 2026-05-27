import type { SVGProps, JSX } from 'react'

export default function PipExitFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M132-212v-296h320v-240h376v536H132Zm565-114 16-16-195-194h145v-22H481v182h22v-144l194 194ZM132-602v-146h226v146H132Z" />
    </svg>
  )
}
