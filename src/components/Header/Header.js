
import { Menu } from "semantic-ui-react";
import { useState } from "react";
import { useHistory,useLocation } from "react-router-dom/cjs/react-router-dom.min";
import "./Header.scss";
import "semantic-ui-css/semantic.css";


export default function Header() {

  const currentPath = useLocation();
  const finalCurrentPath = currentPath.pathname.replace("/","");
  const history = useHistory();

  const [activeItem, setActiveItem] = useState(finalCurrentPath);


  const handleItemClick = (e, {name}) => {
    setActiveItem(name);
    history.push(name);
  }

  return (
    <div className="header-menu">
      <Menu secondary>
        <Menu.Item
          name="Inicio"
          active={activeItem ==="Inicio"}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="Evoluciones"
          active={activeItem ==="Evoluciones"}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="Tipos"
          active={activeItem ==="Tipos"}
          onClick={handleItemClick}
        />
      </Menu>
    </div>
  );
}
