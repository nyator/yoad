

const Nav = () => {

const nav = [
  {
    title: "Youtube Video",
    span: "Downloader",
    url: "",
    icon: " ",
  },
];

  return (
    <div>
      {nav.map((item) => (
          <div className="flex items-center space-x-1">
            
            <div className="text-[12px] leading-none">
              <h1>{item.title}</h1>
              <span className="opacity-50 text-[10px]">nav</span>
              
            </div>
          </div>
      ))}
    </div>
  );
};

export default Nav;


