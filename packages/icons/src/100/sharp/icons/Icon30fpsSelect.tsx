import type { SVGProps, JSX } from 'react'

export default function Icon30fpsSelect({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M224-452v-22h171v-115H223v-22h172v-115H224v-22h193v296H224Zm319 0v-296h194v296H543Zm22-22h150v-252H565v252ZM164-106v-144h22v144h-22Zm116 0v-144h22v144h-22Zm116 0v-144h22v144h-22Zm116 0v-144h284v144H512Z" />
    </svg>
  )
}
