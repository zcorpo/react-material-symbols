import type { SVGProps, JSX } from 'react'

export default function PhotoCameraBack({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M80-120v-633h207l73-87h240l73 87h207v633H80Zm60-60h680v-513H645l-73-87H388l-73 87H140v513Zm340-257ZM253-260h460L571-447 445-280l-92-114-100 134Z" />
    </svg>
  )
}
