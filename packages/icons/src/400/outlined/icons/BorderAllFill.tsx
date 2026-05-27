import type { SVGProps } from 'react'

export default function BorderAllFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M510-120v-330h330v330H510Zm0-390v-330h330v330H510Zm-390 0v-330h330v330H120Zm0 390v-330h330v330H120Z" />
    </svg>
  )
}
