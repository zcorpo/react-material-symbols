import type { SVGProps } from 'react'

export default function CancelPresentationFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m368-346 112-112 112 112 22-22-112-112 112-112-22-22-112 112-112-112-22 22 112 112-112 112 22 22ZM120-200v-560h720v560H120Z" />
    </svg>
  )
}
