import type { SVGProps } from 'react'

export default function Movie({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M80-160v-640h60l74 152h130l-74-152h89l74 152h130l-74-152h89l74 152h130l-74-152h172v640H80Zm60-428v368h680v-368H140Zm0 0v368-368Z" />
    </svg>
  )
}
