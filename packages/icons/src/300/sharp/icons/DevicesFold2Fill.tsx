import type { SVGProps, JSX } from 'react'

export default function DevicesFold2Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M220.39-140v-680h524.53l145.23 362.69H741.38V-140H220.39Zm45.38-45.39H696v-271.92H340.31l-74.54-186.23v458.15Z" />
    </svg>
  )
}
