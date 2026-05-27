import type { SVGProps } from 'react'

export default function TextAd({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M55-135v-691h851v691H55Zm94-94h662v-502H149v502Zm0 0v-502 502Zm70-70h522v-60H219v60Zm0-151h522v-60H219v60Zm0-151h360v-60H219v60Z" />
    </svg>
  )
}
