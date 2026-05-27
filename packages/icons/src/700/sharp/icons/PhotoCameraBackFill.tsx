import type { SVGProps } from 'react'

export default function PhotoCameraBackFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M55-95v-684h219l83-87h246l84 87h219v684H55Zm179-159h498L571-465 445-298l-92-114-119 158Z" />
    </svg>
  )
}
