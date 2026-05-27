import type { SVGProps, JSX } from 'react'

export default function PermMediaFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M80-169.23v-516.92h30.77V-200h667.69v30.77H80Zm101.54-101.54V-840h272.31l80 80H880v489.23H181.54Zm184.77-160h353.54L612.46-575.23 505.54-440l-68.62-78.31-70.61 87.54Z" />
    </svg>
  )
}
