import type { SVGProps, JSX } from 'react'

export default function AlignSelfStretch({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M120-809.23V-840h720v30.77H120ZM120-120v-30.77h720V-120H120Zm324.62-184.62v-370.76h70.76v370.76h-70.76Z" />
    </svg>
  )
}
