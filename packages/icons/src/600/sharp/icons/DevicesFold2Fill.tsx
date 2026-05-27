import type { SVGProps, JSX } from 'react'

export default function DevicesFold2Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M185.87-105.87V-854.7h581.74l166.17 414.31H768.32v334.52H185.87Zm78.65-78.65h424.7v-255.87H313.39l-48.87-121.39v377.26Z" />
    </svg>
  )
}
