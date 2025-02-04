import {
  IconSearch,
  IconMessage,
  IconMusic,
  IconMenu,
  IconSettings,
} from "@tabler/icons-react";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "~/components/ui/drawer";
import Image from "next/image";

type PropTypes = {
  name: string;
  imageUrl?: string;
};

export default function Header(props: PropTypes) {
  return (
    <div className="m-auto flex h-[80px] max-w-[1080px] items-center justify-between px-2">
      <h2 className="text-2xl font-bold">CrossMeasure</h2>
      <ul className="hidden gap-4 sm:flex">
        <li className="flex cursor-pointer items-center gap-1 rounded-md p-2 hover:bg-gray-800">
          <IconSearch size={17} />
          Search
        </li>
        <li className="flex cursor-pointer items-center gap-1 rounded-md p-2 hover:bg-gray-800">
          <IconMessage size={17} />
          Messages
        </li>
        <li className="flex cursor-pointer items-center gap-1 rounded-md p-2 hover:bg-gray-800">
          <IconMusic size={17} />
          Connections
        </li>
      </ul>
      <Image
        className="hidden aspect-square cursor-pointer rounded-full object-cover sm:block"
        src={props.imageUrl || ""}
        width={50}
        height={50}
        alt="Profile Image"
      />
      <div className="sm:hidden">
        <Drawer direction="right">
          <DrawerTrigger>
            <IconMenu />
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>CrossMeasure</DrawerTitle>
              <DrawerDescription />
              <ul className="mt-6">
                <li className="flex items-center gap-1 rounded-md p-2">
                  <Image
                    className="mr-2 aspect-square cursor-pointer rounded-full object-cover"
                    src={props.imageUrl || ""}
                    width={30}
                    height={30}
                    alt="Profile Image"
                  />
                  {props.name}
                </li>
                <hr />
                <li className="flex cursor-pointer items-center gap-1 rounded-md p-2 hover:bg-gray-800">
                  <IconSearch size={17} />
                  Search
                </li>
                <li className="flex cursor-pointer items-center gap-1 rounded-md p-2 hover:bg-gray-800">
                  <IconMessage size={17} />
                  Messages
                </li>
                <li className="flex cursor-pointer items-center gap-1 rounded-md p-2 hover:bg-gray-800">
                  <IconMusic size={17} />
                  Connections
                </li>
              </ul>
            </DrawerHeader>
            <DrawerFooter>
              <div className="flex cursor-pointer items-center gap-1 rounded-md p-2 hover:bg-gray-800">
                <IconSettings size={17} />
                Settings
              </div>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
}
