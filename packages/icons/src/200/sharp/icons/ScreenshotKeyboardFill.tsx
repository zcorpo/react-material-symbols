import type { SVGProps, JSX } from 'react'

export default function ScreenshotKeyboardFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M480-480Zm96.12 96.12q39.26-39.27 39.26-96.12t-39.26-96.12q-39.27-39.26-96.12-39.26t-96.12 39.26q-39.26 39.27-39.26 96.12t39.26 96.12q39.27 39.26 96.12 39.26t96.12-39.26ZM120-200v-560h720v560H120Z" />
    </svg>
  )
}
