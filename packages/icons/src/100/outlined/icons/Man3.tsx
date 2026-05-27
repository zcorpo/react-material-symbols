import type { SVGProps } from 'react'

export default function Man3({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M418-96v-258h-68v-238q0-21.5 16.25-37.75T404-646h152q21.5 0 37.75 16.25T610-592v238h-68v258H418Zm62-618-72-72 72-72 72 72-72 72Z" />
    </svg>
  )
}
