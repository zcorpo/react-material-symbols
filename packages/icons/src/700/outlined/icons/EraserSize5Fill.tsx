import type { SVGProps, JSX } from 'react'

export default function EraserSize5Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M397.87-95Q271-95 183-183.09T95-397.66Q95-456 117-511t66-100l167-166q43.81-43.98 99.15-66.49Q504.49-866 563.05-866 689-866 777.5-777.51q88.5 88.5 88.5 214.56 0 58.32-22.51 113.77Q820.98-393.73 777-350L611-183q-45 44-99.81 66-54.8 22-113.32 22Z" />
    </svg>
  )
}
