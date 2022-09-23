import { useState } from "react";

function App() {
  const [openMenu, setOpenMenu] = useState(false);

  function HandleMenu() {
    setOpenMenu(!openMenu);
  }

  return (
    <div className="h-screen w-screen bg-black text-white overflow-hidden md:w-min-full">
      <img
        className="absolute bottom-0 flex justify-center -z-9999"
        src="../public/blur1.svg"
        alt=""
      />
      <img
        className="absolute top-0 right-0 md:block hidden -z-9999"
        src="../public/blur2.svg"
        alt=""
      />
      <header className="w-full fixed flex justify-center items-center md:h-[150px] h-[100px]">
        <div className="flex w-full px-[26px] justify-between xl:hidden">
          <img className="cursor-pointer" src="../public/logo2.svg" alt="" />
          <img
            onClick={HandleMenu}
            className="cursor-pointer"
            src="../public/menu.svg"
            alt=""
          />
        </div>
        <div className=" xl:flex justify-around items-center w-full h-[50px] px-64 hidden">
          <img src="../public/logo.svg" alt="" />
          <ul className="flex gap-8">
            <li>Home</li>
            <li>Menu</li>
            <li>Recompensas</li>
            <li>Gift Cards</li>
            <li>Lojas</li>
          </ul>
          <button className="text-xs px-8 py-3 rounded-md border border-indigo-800 cursor hover:bg-violet-800">
            PEGAR MEU CAFÉ
          </button>
        </div>
      </header>
      {openMenu ? (
        <div className="xl:hidden absolute bg-[#000000] z-50 w-full h-screen">
          <div className="flex w-full justify-between xl:hidden px-[26px] md:py-[59px] py-[34px] ">
            <img className="cursor-pointer" src="../public/logo2.svg" alt="" />
            <img
              onClick={HandleMenu}
              className="cursor-pointer"
              src="../public/closeMenu.svg"
              alt=""
            />
          </div>
          <ul>
            <li className="text-lg font-normal flex items-center border-t-[1px] h-[56px] px-[30px] py-[18px] border-[#29292E] hover:border-l-8 hover:border-l-violet-900">
              Home
            </li>
            <li className="flex items-center border-b-[1px] border-t-[1px] h-[56px] px-[30px] py-[18px] border-[#29292E] hover:border-l-8 hover:border-l-violet-900">
              Menu
            </li>
            <li className="flex items-center px-[30px] py-[18px] h-[56px]  hover:border-l-8 hover:border-l-violet-900">
              Recompensas
            </li>
            <li className="flex items-center border-t-[1px] h-[56px] px-[30px] py-[18px] border-[#29292E] hover:border-l-8 hover:border-l-violet-900">
              Gift Cards
            </li>
            <li className="flex items-center border-b-[1px] border-t-[1px] h-[56px] px-[30px] py-[18px] border-[#29292E] hover:border-l-8 hover:border-l-violet-900">
              Lojas
            </li>
          </ul>
        </div>
      ) : null}

      <main className="h-full w-full flex mt-[75px] flex-col">
        <div className="flex justify-center items-center flex-col h-[508px] px-10">
          <p className="md:hidden flex text-center text-2xl mb-[88px] mt-[184px]">
            O café que fará seu código decolar para o próximo nível.
          </p>
          <div className="mt-5 flex flex-col items-center">
            <button className="text-xs px-[30px] py-[10px] rounded-md border border-indigo-800 cursor hover:bg-violet-800 xl:hidden flex mb-[88px] md:mb-[40px]">
              PEGAR MEU CAFÉ
            </button>
            <h1 className="font-bold md:text-[80px] text-5xl text-center">
              Great Coffee
            </h1>
            <h1 className="font-bold text-violet-900 md:text-[80px] text-5xl text-center">
              Great Coffee
            </h1>
          </div>
        </div>
        <div className="flex w-full justify-center">
          <img
            className="absolute bottom-0 md:w-[818px] w-[428px]"
            src="../public/Coffe.svg"
            alt=""
          />
        </div>
      </main>
    </div>
  );
}

export default App;
