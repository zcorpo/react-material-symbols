import type { SVGProps } from 'react'

export default function PauseFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M555-200v-560h175v560H555Zm-325 0v-560h175v560H230Z" />
    </svg>
  )
}
