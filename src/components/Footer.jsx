import Github from '../assets/github';

const Footer = () => {
  return (
    <footer>
      <a
        href="https://github.com/Tirnoch"
        target="_blank"
        className="flex justify-center py-2"
      >
        <p className="px-2">Tirnoch 2504</p>
        <Github />
      </a>
    </footer>
  );
};

export default Footer;
