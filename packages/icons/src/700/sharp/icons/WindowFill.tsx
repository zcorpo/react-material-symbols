import type { SVGProps } from 'react'

export default function WindowFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M510-450h356v355H510v-355Zm0-60v-356h356v356H510Zm-60 0H95v-356h355v356Zm0 60v355H95v-355h355Z" />
    </svg>
  )
}
