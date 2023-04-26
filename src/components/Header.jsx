import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShuttleSpace } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header-box">
          <i>
            <FontAwesomeIcon icon={faShuttleSpace} class="icone" />
          </i>
          <p>Ready To Go</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
