import type { SVGProps, JSX } from 'react'

export default function NoSoundFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m583-357-17-16 107-107-107-106 17-17 106 107 107-107 16 17-107 106 107 107-16 16-107-107-106 107Zm-395-55v-136h130l126-126v388L318-412H188Z" />
    </svg>
  )
}
