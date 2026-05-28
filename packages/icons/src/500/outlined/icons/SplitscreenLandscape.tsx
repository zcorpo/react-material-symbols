import type { SVGProps, JSX } from 'react'

export default function SplitscreenLandscape({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M510-282.15h247.85v-395.7H510v395.7Zm-307.85 0H450v-395.7H202.15v395.7Zm-60 128.13q-27.6 0-47.86-20.27-20.27-20.26-20.27-47.86v-515.7q0-27.7 20.27-48.03 20.26-20.34 47.86-20.34h675.7q27.7 0 48.03 20.34 20.34 20.33 20.34 48.03v515.7q0 27.6-20.34 47.86-20.33 20.27-48.03 20.27h-675.7Zm675.7-583.83h-675.7v515.7h675.7v-515.7Zm-675.7 0v515.7-515.7Z" />
    </svg>
  )
}
