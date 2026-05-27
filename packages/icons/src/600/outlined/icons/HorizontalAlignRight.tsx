import type { SVGProps } from 'react'

export default function HorizontalAlignRight({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M774.91-145.87V-814.7h79.79v668.83h-79.79ZM509.04-272.43 452.48-329l111.39-111.39h-458v-79.22h458L456.48-627l56.56-56.57L716.61-480 509.04-272.43Z" />
    </svg>
  )
}
