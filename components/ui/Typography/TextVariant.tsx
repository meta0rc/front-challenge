import { FunctionComponent } from "react"

interface TextProps {
    variant?: Variant
    style?: any
    children?: React.ReactNode | any
    html?: string
    onClick?: () => any
  }
  
type Variant = 'heading' | 'body' | 'pageHeading' | 'sectionHeading'

export const Typography: FunctionComponent<TextProps> = ({
    style,
    variant = 'body',
    children,
    html,
    onClick,
}) => {
    const componentsMap: {
        [P in Variant]: React.ComponentType<any> | string
      } = {
        body: 'p',
        heading: 'h1',
        pageHeading: 'h1',
        sectionHeading: 'h2',
      }
      const Component: any = componentsMap![variant!]

    const htmlContentProps = html ? {
        dangerouslySetInnerHTML: { __html: html },
      }
    : {} 

    return (
        
        <Component onClick={onClick} style={style} {...htmlContentProps} >
            {children}
        </Component>
       
    )
}