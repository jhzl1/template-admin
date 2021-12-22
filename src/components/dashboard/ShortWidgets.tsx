import { FC } from "react";
import { WidgetItem } from "../../interfaces/widgetsInterface";

const ShortWidgets: FC<WidgetItem> = ({ title, value, icon }) => {
  return (
    <div className="item-dashboard transitions">
      <div>
        <h2 className="font-medium mb-1">{title}</h2>
        <span className="icon-dashboard">{value}</span>
      </div>
      <div className="bg-gradient-to-br p-2 from-orange-400 to-orange-600 rounded-lg">
        {icon}
      </div>
    </div>
  );
};

export default ShortWidgets;
