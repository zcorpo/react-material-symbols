import type { SVGProps } from 'react'

export default function UnfoldLessFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m343-136-67-67 204-204 204 204-67 67-137-137-137 137Zm137-417L276-757l67-67 137 137 137-137 67 67-204 204Z" />
    </svg>
  )
}
