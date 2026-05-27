import type { SVGProps } from 'react'

export default function CallMissedOutgoingFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M474-301 171-604l16-16 287 287 277-277H523v-22h265v267h-22v-228L474-301Z" />
    </svg>
  )
}
