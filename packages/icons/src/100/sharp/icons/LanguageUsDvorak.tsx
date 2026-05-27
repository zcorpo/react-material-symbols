import type { SVGProps } from 'react'

export default function LanguageUsDvorak({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M234-328h143l35-35v-234l-35-35H234v304Zm-22 22v-348h171l51 51v246l-51 51H212Zm424 0L515-654h22l115 326 114-326h22L668-306h-32Z" />
    </svg>
  )
}
