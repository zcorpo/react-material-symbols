import type { SVGProps, JSX } from 'react'

export default function WindowClosedFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M143-103v-754h674v754H143Zm124-424h156v-40h114v40h156v-206H267v206Zm0 300h426v-206H267v206Zm-30 30h486v-566H237v566Z" />
    </svg>
  )
}
