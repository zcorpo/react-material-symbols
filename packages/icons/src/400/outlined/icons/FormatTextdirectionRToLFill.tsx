import type { SVGProps, JSX } from 'react'

export default function FormatTextdirectionRToLFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M390-360v-220q-66 0-113-43t-47-107q0-63 43.5-106.5T380-880h280v60h-90v460h-60v-460h-60v460h-60ZM234-196l74 74-42 42-146-146 146-146 42 42-74 74h606v60H234Z" />
    </svg>
  )
}
