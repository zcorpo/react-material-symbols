import type { SVGProps, JSX } from 'react'

export default function TakeoutDiningFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M169.39-550.87 54-673.39l56.56-56.57 89.74 92.74-5-49.87L360.35-854.7h239.87L764.7-687.09l-5 49.87 89.74-92.74L906-673.39 790.61-550.87H169.39Zm65.61 405-28-369.78h546l-28 369.78H235Z" />
    </svg>
  )
}
