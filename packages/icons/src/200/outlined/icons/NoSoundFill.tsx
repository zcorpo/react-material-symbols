import type { SVGProps, JSX } from 'react'

export default function NoSoundFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m589.46-349.15-23-22.23 108.62-108.39-108.62-107.61 23-23 107.62 108.61 108.38-108.61 22.23 23-108.61 107.61 108.61 108.39-22.23 22.23-108.38-108.62-107.62 108.62ZM172.31-400v-160h136.92l143.08-143.08v446.16L309.23-400H172.31Z" />
    </svg>
  )
}
