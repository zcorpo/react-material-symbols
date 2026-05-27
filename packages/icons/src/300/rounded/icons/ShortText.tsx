import type { SVGProps } from 'react'

export default function ShortText({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M202.69-391.92q-9.64 0-16.16-6.58-6.53-6.58-6.53-16.31 0-9.73 6.53-16.11 6.52-6.39 16.16-6.39h306.69q9.65 0 16.17 6.58 6.53 6.58 6.53 16.31 0 9.73-6.53 16.11-6.52 6.39-16.17 6.39H202.69Zm0-130.77q-9.64 0-16.16-6.58-6.53-6.58-6.53-16.31 0-9.73 6.53-16.11 6.52-6.39 16.16-6.39h554.62q9.64 0 16.16 6.58 6.53 6.58 6.53 16.31 0 9.73-6.53 16.11-6.52 6.39-16.16 6.39H202.69Z" />
    </svg>
  )
}
