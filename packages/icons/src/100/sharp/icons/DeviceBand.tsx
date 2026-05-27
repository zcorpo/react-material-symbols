import type { SVGProps, JSX } from 'react'

export default function DeviceBand({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M366-132v-486h-24v-61h24v-149h227v149h25v61h-25v486H366Zm22-506v484h183v-484H388Zm0-22h183v-146H388v146Zm0 22h183-183Zm0-22h183-183Z" />
    </svg>
  )
}
