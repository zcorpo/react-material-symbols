import type { SVGProps, JSX } from 'react'

export default function ViewComfy({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M74.02-154.02v-652.2h812.2v652.2H74.02ZM817.85-510v-227.85h-675.7V-510h675.7ZM383.48-222.15h434.37V-450H383.48v227.85Zm-241.33 0h181.33V-450H142.15v227.85Z" />
    </svg>
  )
}
