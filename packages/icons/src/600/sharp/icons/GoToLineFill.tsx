import type { SVGProps } from 'react'

export default function GoToLineFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M420.39-690.39v-119.22h119.22v119.22H420.39Zm0 540v-119.22h119.22v119.22H420.39Z" />
    </svg>
  )
}
