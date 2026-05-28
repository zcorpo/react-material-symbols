import type { SVGProps, JSX } from 'react'

export default function VideoLabel({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M120-200v-560h720v560H120Zm30.77-155.15h658.46v-374.08H150.77v374.08Z" />
    </svg>
  )
}
