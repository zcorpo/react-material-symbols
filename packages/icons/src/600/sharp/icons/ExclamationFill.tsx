import type { SVGProps } from 'react'

export default function ExclamationFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M440.39-373.78V-773h79.22v399.22h-79.22Zm0 186.78v-79.22h79.22V-187h-79.22Z" />
    </svg>
  )
}
