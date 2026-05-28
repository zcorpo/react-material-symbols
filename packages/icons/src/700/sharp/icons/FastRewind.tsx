import type { SVGProps, JSX } from 'react'

export default function FastRewind({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M917-193 500-480l417-287v574Zm-457 0L43-480l417-287v574Zm-94-287Zm457 0ZM366-372v-216L210-480l156 108Zm457 0v-216L667-480l156 108Z" />
    </svg>
  )
}
