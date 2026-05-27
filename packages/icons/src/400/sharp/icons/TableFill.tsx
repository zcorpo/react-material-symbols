import type { SVGProps } from 'react'

export default function TableFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M450-340H120v220h330v-220Zm60 0v220h330v-220H510Zm-60-60v-220H120v220h330Zm60 0h330v-220H510v220ZM120-680h720v-160H120v160Z" />
    </svg>
  )
}
