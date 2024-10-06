interface AboutDataBlockProps {
    title: string,
    content: string,
    classes?: string
}

const AboutDataBlock = ({title, content, classes}: AboutDataBlockProps) => {
  
  return (
    <div className={classes}>
        <span className="block">&gt; {title}</span>
        <span className="text-[#E7D184]">{content}</span>
    </div>
  )
}

export default AboutDataBlock