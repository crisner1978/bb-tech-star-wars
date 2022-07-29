import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Planet } from "../typings";

interface Props {
  homeworld: Planet;
}

const Button = ({ homeworld }: Props) => {
  return (
    <Popover className="relative mt-5">
      {({ open }) => (
        <>
          <Popover.Button
            className={`
                ${open ? "" : "text-opacity-90"} popover`}>
            <span>Homeworld</span>
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1">
            <Popover.Panel className="absolute left-[168px] z-10 mt-1 w-[250px] -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="relative text-right space-y-2 bg-white p-5 text-lg">
                  <p className="font-bold">
                    Name: <span className="font-normal">{homeworld.name}</span>
                  </p>
                  <p className="font-bold">
                    Population:{" "}
                    <span className="font-normal">{homeworld.population}</span>
                  </p>
                  <p className="font-bold">
                    Diameter:{" "}
                    <span className="font-normal">{homeworld.diameter}</span>
                  </p>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default Button;
