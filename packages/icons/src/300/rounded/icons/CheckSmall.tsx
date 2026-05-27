import type { SVGProps } from 'react'

export default function CheckSmall({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m400-391.61 253.08-253.47q6.69-6.69 16-6.69 9.3 0 16 6.69 6.69 6.7 6.69 16 0 9.31-6.69 16L420.23-348.62Q411.62-340 400-340q-11.62 0-20.23-8.62L274.92-453.08q-6.69-6.69-6.69-16 0-9.3 6.69-16 6.7-6.69 16-6.69 9.31 0 16 6.69L400-391.61Z" />
    </svg>
  )
}
