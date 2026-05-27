import type { SVGProps, JSX } from 'react'

export default function ShieldFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M470-140q-5-1-10-3-115-45-181.5-149T212-518v-168q0-17 10-31.5t25-20.5l214-79q10-4 19-4t19 4l214 79q15 6 25 20.5t10 31.5v168q0 122-66.5 226T500-143q-5 2-10 3t-10 1q-5 0-10-1Z" />
    </svg>
  )
}
