import type { SVGProps, JSX } from 'react'

export default function ViewComfyAlt({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M132-560v-268h268v268H132Zm22-22h224v-224H154v224Zm-22 450v-268h268v268H132Zm22-22h224v-224H154v224Zm406-406v-268h268v268H560Zm22-22h224v-224H582v224Zm-22 450v-268h268v268H560Zm22-22h224v-224H582v224ZM378-582Zm0 204Zm204-204Zm0 204Z" />
    </svg>
  )
}
