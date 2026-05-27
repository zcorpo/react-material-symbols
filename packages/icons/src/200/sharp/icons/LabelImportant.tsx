import type { SVGProps, JSX } from 'react'

export default function LabelImportant({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m120-200 221.46-280L120-760.77h497L840-480 618-200H120Zm61.54-30.77h421.61L801.92-480 603.15-730H181.54l198 250-198 249.23Zm310.69-250Z" />
    </svg>
  )
}
