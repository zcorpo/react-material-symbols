import type { SVGProps, JSX } from 'react'

export default function Dashboard2EditFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M453-527v-221h375v221H453ZM132-212v-221h335v221H132Zm0-315v-221h227v221H132Zm440 395v-78l231-230 77 78-230 230h-78Zm231-192 37-38-37-38-38 38 38 38Z" />
    </svg>
  )
}
