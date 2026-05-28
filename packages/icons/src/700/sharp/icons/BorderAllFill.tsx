import type { SVGProps, JSX } from 'react'

export default function BorderAllFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M510-95v-355h356v355H510Zm0-415v-356h356v356H510Zm-415 0v-356h355v356H95Zm0 415v-355h355v355H95Z" />
    </svg>
  )
}
