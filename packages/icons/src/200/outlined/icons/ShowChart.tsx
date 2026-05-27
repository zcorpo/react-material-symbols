import type { SVGProps, JSX } from 'react'

export default function ShowChart({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m133.69-247.69-22.92-22.93 272.31-272.3 160 160.23 285.69-326.54 22 19.46-306.15 353.23-161.54-160.54-249.39 249.39Z" />
    </svg>
  )
}
