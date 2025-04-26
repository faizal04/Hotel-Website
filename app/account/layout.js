import SideNavigation from "../_components/SideNavigation";

function layout({ children }) {
  return (
    <div className="grid grid-rows-[10rem_1fr] sm:grid-cols-[16rem_1fr] h-full gap-12 m-auto">
      <SideNavigation />

      <div>{children}</div>
    </div>
  );
}

export default layout;
