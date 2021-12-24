import {
  Avatar,
  AvatarBadge,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Switch,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaSun, FaMoon, FaChevronDown, FaUserAlt } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import useAuth from "../../hooks/useAuth";
import useTheme from "../../hooks/useTheme";

type TopbarProp = Boolean;

const Topbar = () => {
  const [tobarBlur, setTobarBlur] = useState<TopbarProp>(false);

  const { username, logout } = useAuth();

  const handleScrollTopbar = () => {
    if (window.scrollY === 0) {
      setTobarBlur(false);
    } else {
      setTobarBlur(true);
    }
  };

  const { theme, changeTheme } = useTheme();

  useEffect(() => {
    window.addEventListener("scroll", handleScrollTopbar);

    return () => {
      window.removeEventListener("scroll", handleScrollTopbar);
    };
  }, []);
  return (
    <div className={` ${tobarBlur && "topbar-on-scroll"} topbar-general`}>
      <div className="flex justify-between items-center h-full py-2 px-5">
        <h2 className="text-slate-600 font-bold dark:text-gray-300 text-xl">
          Administrador Locatel
        </h2>

        <div>
          <div className="full-center">
            <div className="full-center mx-2">
              <FaSun size={20} className="text-yellow-500" />
              <Switch
                size="md"
                mx={2}
                isChecked={theme === "dark"}
                onChange={changeTheme}
              />
              <FaMoon size={18} className="text-indigo-700" />
            </div>

            <Avatar size="xs">
              <AvatarBadge bg="green.500" boxSize="1em" />
            </Avatar>
            <Menu>
              <MenuButton
                as={Button}
                fontWeight="normal"
                ml="5"
                rightIcon={<FaChevronDown />}
                className="text-slate-700"
                size="sm"
              >
                {username}
              </MenuButton>
              <MenuList>
                <MenuItem icon={<FaUserAlt className="text-slate-700" />}>
                  <span className="text-slate-700">Mi perfil </span>
                </MenuItem>
                <MenuItem
                  icon={<FiLogOut className="text-slate-700" />}
                  onClick={logout}
                >
                  <span className="text-slate-700">Cerrar sesión</span>
                </MenuItem>
              </MenuList>
            </Menu>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
