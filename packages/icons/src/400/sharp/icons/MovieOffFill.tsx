import type { SVGProps, JSX } from 'react'

export default function MovieOffFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M80-160v-640h80l640 640H80Zm800-6L246-800h78l74 152h130l-74-152h130l74 152h130l-74-152h166v634ZM813-61 61-813l43-43 752 752-43 43Z" />
    </svg>
  )
}
