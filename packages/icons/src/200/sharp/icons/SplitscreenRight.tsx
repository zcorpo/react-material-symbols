import type { SVGProps } from 'react'

export default function SplitscreenRight({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M530.77-160v-640h244.62v640H530.77Zm-346.16 0v-640h244.62v640H184.61Zm30.77-609.23v578.46h183.08v-578.46H215.38Z" />
    </svg>
  )
}
