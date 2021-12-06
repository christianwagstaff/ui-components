import Tool from "../tools";
import NavBar from "../dropDownMenu";

export default class MobileNav extends NavBar{
  constructor() {
    super()
  }
  renderNav() {
    let nav = Tool.createDomElement("nav", "mobileNav");
    nav.appendChild(this.createOLForNav());
    return nav;
  }
}
