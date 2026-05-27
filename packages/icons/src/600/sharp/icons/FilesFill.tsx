import type { SVGProps, JSX } from 'react'

export default function FilesFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M65.87-145.87v-231.87h436.39V-814.7H894.7v668.83H65.87Zm0-259V-734.7h329.26L65.87-404.87Zm122.39-32.87 254-254v254h-254Z" />
    </svg>
  )
}
