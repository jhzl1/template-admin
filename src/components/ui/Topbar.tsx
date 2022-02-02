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
import { GiHamburgerMenu } from "react-icons/gi";
import { FiLogOut } from "react-icons/fi";
import useAuth from "../../hooks/useAuth";
import useTheme from "../../hooks/useTheme";
import useToggleNavbar from "../../hooks/useToggleNavbar";

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

  const { handleShowNavbar } = useToggleNavbar();

  return (
    <div className={` ${tobarBlur && "topbar-on-scroll"} topbar-general`}>
      <div className="flex justify-between items-center h-full py-2 px-5">
        <div className="full-center">
          <button
            className="p-2 mr-2 bg-gray-800 rounded-md lg:hidden"
            onClick={handleShowNavbar}
          >
            <GiHamburgerMenu size={20} className="text-white" />
          </button>

          <img
            src={require("../../assets/img/locatel_logo.png")}
            alt=""
            className="h-9"
          />
        </div>

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

            <div className="hidden md:block">
              <Avatar size="xs">
                <AvatarBadge bg="green.500" boxSize="1em" />
              </Avatar>
            </div>
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
