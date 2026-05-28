import type { SVGProps, JSX } from 'react'

export default function FilesFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M120-200v-200h360v-360h360v560H120Zm0-205.23V-680h274.77L120-405.23Zm69-25.54L449.23-691v260.23H189Z" />
    </svg>
  )
}
