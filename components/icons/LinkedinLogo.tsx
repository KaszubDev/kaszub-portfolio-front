/**
 * Represents the LinkedIn logo component.
 * @component
 * @param {Object} props - The component props.
 * @param {string} [props.classes] - Additional CSS classes for the component.
 * @returns {JSX.Element} - The rendered LinkedIn logo.
 */

type LinkedinLogoProps = {
    classes?: string
}

const LinkedinLogo = ({classes}: LinkedinLogoProps) => {
  return (
    <svg className={classes} version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 310 309.3">
        <g id="XMLID_801_">
            <path id="XMLID_802_" d="M72.2,99.4H9.9c-2.8,0-5,2.2-5,5v199.9c0,2.8,2.2,5,5,5h62.2c2.8,0,5-2.2,5-5V104.4
            C77.2,101.6,74.9,99.4,72.2,99.4z"/>
            <path id="XMLID_803_" d="M41.1,0C18.4,0,0,18.4,0,41c0,22.6,18.4,41,41.1,41c22.6,0,41-18.4,41-41C82.1,18.4,63.7,0,41.1,0z"/>
            <path id="XMLID_804_" d="M230.5,94.4c-25,0-43.5,10.7-54.7,23v-13c0-2.8-2.2-5-5-5h-59.6c-2.8,0-5,2.2-5,5v199.9c0,2.8,2.2,5,5,5
            h62.1c2.8,0,5-2.2,5-5v-98.9c0-33.3,9.1-46.3,32.3-46.3c25.3,0,27.3,20.8,27.3,48v97.2c0,2.8,2.2,5,5,5H305c2.8,0,5-2.2,5-5V194.7
            C310,145.1,300.5,94.4,230.5,94.4z"/>
        </g>
    </svg>
  )
}

export default LinkedinLogo