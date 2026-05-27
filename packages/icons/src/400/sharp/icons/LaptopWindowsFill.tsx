import type { SVGProps, JSX } from 'react'

export default function LaptopWindowsFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M0-160v-60h141v-42H81v-578h798v578h-60v42h141v60H0Z" />
    </svg>
  )
}
