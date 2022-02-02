import { NavLink } from "react-router-dom";
import { FC } from "react";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import useToggleNavbar from "../../hooks/useToggleNavbar";

export interface SubnavItem {
  path: string;
  title: String;
}

export interface ItemNavbarProps {
  path?: string;
  title: String;
  icon?: JSX.Element;
  subnavItem?: SubnavItem[];
}

const ItemNavbar: FC<ItemNavbarProps> = ({ path, title, icon, subnavItem }) => {
  const { handleShowNavbar } = useToggleNavbar();

  return (
    <div className="mb-3">
      {subnavItem ? (
        <Accordion allowMultiple>
          <AccordionItem border={0}>
            <div className="link-navbar mb-3 transitions">
              <AccordionButton
                borderColor="transparent"
                _focus={{
                  border: 0,
                }}
              >
                <Box
                  flex="1"
                  textAlign="left"
                  fontWeight="medium"
                  className="flex "
                >
                  <span className="icon-link transitions">{icon}</span>

                  {title}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </div>
            {subnavItem &&
              subnavItem.map(({ path, title }, index) => (
                <AccordionPanel
                  key={index}
                  py={0}
                  width="full"
                  className="flex items-center"
                >
                  <NavLink
                    to={path || "/dashboard"}
                    className="sublink-navbar transitions"
                    onClick={handleShowNavbar}
                  >
                    {title}
                  </NavLink>
                </AccordionPanel>
              ))}
          </AccordionItem>
        </Accordion>
      ) : (
        <div className="flex">
          <NavLink
            to={path || "/dashboard"}
            className="link-navbar p-2 flex items-center transitions"
            onClick={handleShowNavbar}
          >
            <span className="icon-link ml-2 transitions">{icon}</span>
            {title}
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default ItemNavbar;
