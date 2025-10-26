import { Link } from "react-router-dom";
import LanguageSwitcher from "../LanguageSwitcher";
import { useTranslation } from "react-i18next";

const headerStyle = {
  backgroundColor: "#0061a8",
  padding: "15px 0",
  textAlign: "center",
  position: "relative",
};

const linkStyle = {
  color: "white",
  margin: "0 20px",
  textDecoration: "none",
  fontSize: "18px",
  fontWeight: "bold",
};

const switcherWrapper = {
  position: "absolute",
  right: "20px",
  top: "15px",
};

export default function Header() {
  const { t } = useTranslation();

  return (
    <header style={headerStyle}>
      <div style={switcherWrapper}>
        <LanguageSwitcher />
      </div>
      <nav>
        <Link to="/" style={linkStyle}>
          {t("navbar.cars")}
        </Link>
        <Link to="/about" style={linkStyle}>
          {t("navbar.about")}
        </Link>
        <Link to="/contact" style={linkStyle}>
          {t("navbar.contact")}
        </Link>
      </nav>
    </header>
  );
}
