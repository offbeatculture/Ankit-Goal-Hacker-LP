const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="container text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Leadership Workshop. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
