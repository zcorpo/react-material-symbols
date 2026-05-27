import type { SVGProps, JSX } from 'react'

export default function Movie({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M55-135v-691h94l74 152h130l-74-152h89l74 152h130l-74-152h89l74 152h130l-74-152h189v691H55Zm94-444v350h662v-350H149Zm0 0v350-350Z" />
    </svg>
  )
}
