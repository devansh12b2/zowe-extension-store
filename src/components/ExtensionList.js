import React from "react";
import ExtensionItem from "./ExtensionItem";

const ExtensionList = ({ extensions }) => {
  return (
    <div className="flex flex-wrap -m-2">
      {extensions.map((ext) => (
        <ExtensionItem key={ext.id} extension={ext} />
      ))}
    </div>
  );
};

export default ExtensionList;
