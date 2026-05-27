import type { SVGProps, JSX } from 'react'

export default function SecurityFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M480-121.54q-120.77-35.77-200.38-147.11Q200-380 200-518.92v-213.39l280-104.61 280 104.61v213.39q0 138.92-79.62 250.27Q600.77-157.31 480-121.54Zm0-32q100.62-32.69 168.19-123.5Q715.77-367.85 727-480H480v-323.46l-249.23 92.38v192.16q0 10.46.5 18.96T233-480h247v326.46Z" />
    </svg>
  )
}
