import "./footer.scss";

type Props = {
  color: string;
};
const Footer = (props: Props) => {
  return <footer style={{ color: props.color }}>© Copyright 2024</footer>;
};

export default Footer;
