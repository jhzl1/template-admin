import { Avatar, AvatarBadge, Switch } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

type TopbarProp = Boolean;

const Topbar = () => {
  const [tobarBlur, setTobarBlur] = useState<TopbarProp>(false);

  const handleScrollTopbar = () => {
    if (window.scrollY === 0) {
      setTobarBlur(false);
    } else {
      setTobarBlur(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollTopbar);

    return () => {
      window.removeEventListener("scroll", handleScrollTopbar);
    };
  }, []);
  return (
    <div className={` ${tobarBlur && "topbar-on-scroll"} topbar-general`}>
      <div className="flex justify-between items-center h-full  py-2 px-5">
        <h2 className="text-slate-600 font-bold  text-xl">
          Administrador Locatel
        </h2>

        <div>
          <div className="full-center">
            <div className="full-center mx-2">
              <FaSun size={20} className="text-yellow-500" />
              <Switch size="md" mx={2} />
              <FaMoon size={18} className="text-indigo-700" />
            </div>

            <Avatar size="sm">
              <AvatarBadge bg="green.500" boxSize="1em" />
            </Avatar>
            <span className="ml-2">Nombre usuario</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
