import type { SVGProps, JSX } from 'react'

export default function DiscoverTuneFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M530-602.69v-45.39h127.31V-830h45.38v181.92H830v45.39H530ZM657.31-130v-387.31h45.38V-130h-45.38Zm-400 0v-174.62H130V-350h300v45.38H302.69V-130h-45.38Zm0-305.39V-830h45.38v394.61h-45.38Z" />
    </svg>
  )
}
