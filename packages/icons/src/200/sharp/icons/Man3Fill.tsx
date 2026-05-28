import type { SVGProps, JSX } from 'react'

export default function Man3Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M418.46-90v-262.77h-70.77v-297.15h264.62v296.84h-70.77V-90H418.46ZM480-714l-74.54-74.54L480-863.08l74.54 74.54L480-714Z" />
    </svg>
  )
}
