import type { SVGProps, JSX } from 'react'

export default function DetailsFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M147.69-160 480-757.69 812.31-160H147.69Zm52.77-30.77h264.16v-475.85L200.46-190.77Zm294.92 0h264.16L495.38-666.62v475.85Z" />
    </svg>
  )
}
