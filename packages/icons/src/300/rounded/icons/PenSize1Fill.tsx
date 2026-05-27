import type { SVGProps } from 'react'

export default function PenSize1Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M203.23-203.29q-4.84-4.9-4.84-11.62 0-6.72 4.84-11.71l530.15-530.15q5.06-4.84 11.8-4.84 6.74 0 11.59 4.9 4.84 4.9 4.84 11.62 0 6.72-4.84 11.71L226.62-203.23q-5.06 4.84-11.8 4.84-6.74 0-11.59-4.9Z" />
    </svg>
  )
}
