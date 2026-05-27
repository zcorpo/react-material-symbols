import type { SVGProps } from 'react'

export default function ViewHeadlineFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M186-396v-22h588v22H186Zm0 148v-22h588v22H186Zm0-294v-22h588v22H186Zm0-148v-22h588v22H186Z" />
    </svg>
  )
}
