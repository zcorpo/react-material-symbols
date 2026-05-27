import type { SVGProps } from 'react'

export default function AspectRatio({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M568-283h191v-194h-60v134H568v60ZM202-483h60v-134h131v-60H202v194ZM55-135v-691h851v691H55Zm94-94h662v-502H149v502Zm0 0v-502 502Z" />
    </svg>
  )
}
