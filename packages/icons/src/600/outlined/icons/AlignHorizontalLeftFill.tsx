import type { SVGProps, JSX } from 'react'

export default function AlignHorizontalLeftFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M65.87-65.87V-894.7h79.22v828.83H65.87ZM245.09-277v-119.22H654.7V-277H245.09Zm0-286.78V-683H894.7v119.22H245.09Z" />
    </svg>
  )
}
