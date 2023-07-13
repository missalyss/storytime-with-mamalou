import ExternalLinkIcon from "../assets/icons/external-link";

const ExternalLink = ({ className, href, text, ...props }) => {
  return (
    <>
      <a href={href} target="_blank" rel="noreferrer" {...props}>
        {text}
      </a>
      <ExternalLinkIcon />
    </>
  );
};

export default ExternalLink;
