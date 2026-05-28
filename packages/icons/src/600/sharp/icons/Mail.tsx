import type { SVGProps, JSX } from 'react'

export default function Mail({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M65.87-145.87V-814.7H894.7v668.83H65.87ZM480-443.91l-334.91-223v441.82h669.82v-441.82L480-443.91Zm0-73 330.91-218H150.09l329.91 218Zm-334.91-150v-68 509.82-441.82Z" />
    </svg>
  )
}
