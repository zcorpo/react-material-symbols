import type { SVGProps, JSX } from 'react'

export default function AddDiamond({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M457.31-329.92h45.38v-126.77h127.39v-45.39H502.69v-127.38h-45.38v127.38H330.54v45.39h126.77v126.77ZM480-76.16 76.39-479.38 480-883.23l404.23 403.85L480-76.16Zm0-63.84 340-339.38-340-340-339.38 340L480-140Zm.62-340Z" />
    </svg>
  )
}
