import { menuItems } from "../mock/menuItems";
import MenuItem from "./menuItem";

function Menu() {

    return (
        <nav className="flex items-center justify-end gap-2 ">
            {menuItems.map((item, index) => (
                <MenuItem key={index} href={item.href} text={item.text} />

            ))}
        </nav>
    )

}

export default Menu;