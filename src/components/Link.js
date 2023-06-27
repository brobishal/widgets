import React from "react";

const Link = ({ className, href, children }) => {
  const clickFun = (event) => {

    if(event.metaKey || event.ctrKey){
        return;
    }
    event.preventDefault();
    // In an HTML document, the history.pushState() method adds an entry to the browser's session history stack. This method is asynchronous.
    window.history.pushState({}, "", href);

    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  };

  return (
    <a onClick={clickFun} className={className} href={href}>
      {children}
    </a>
  );
};

export default Link;
