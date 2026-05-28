import type { SVGProps, JSX } from 'react'

export default function SplitscreenLandscape({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M523.08-316.92h200v-326.16h-200v326.16Zm-286.16 0h200v-326.16h-200v326.16ZM120-200v-560h720v560H120Zm689.23-30.77v-498.46H150.77v498.46h658.46ZM150.77-729.23v498.46-498.46Z" />
    </svg>
  )
}
