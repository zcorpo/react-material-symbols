import type { SVGProps, JSX } from 'react'

export default function CallMissedOutgoingFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M479-242 94-627l66-67 319 319 228-229H520v-95h346v353h-95v-188L479-242Z" />
    </svg>
  )
}
