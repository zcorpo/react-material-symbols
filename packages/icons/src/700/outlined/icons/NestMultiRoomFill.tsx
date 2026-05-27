import type { SVGProps } from 'react'

export default function NestMultiRoomFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m135-609 345-264 346 264H135Zm0 514v-197h395v197H135Zm455 0v-197h236v197H590ZM135-352v-197h235v197H135Zm295 0v-197h396v197H430Z" />
    </svg>
  )
}
