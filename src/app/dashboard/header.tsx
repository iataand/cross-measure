"use client";

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
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "~/firebase.config";
import Link from "next/link";

export default function Header() {
  const [user] = useAuthState(auth);

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
        <Link
          href="/dashboard/connections"
          className="flex cursor-pointer items-center gap-1 rounded-md p-2 hover:bg-gray-800"
        >
          <IconMusic size={17} />
          Connections
        </Link>
      </ul>
      {user ? (
        <Link href={`/dashboard/profile/${user.uid}`}>
          <Image
            className="hidden aspect-square cursor-pointer rounded-full object-cover sm:block"
            src={
              user.photoURL ??
              "https://utfs.io/f/3oEdKbrCvD62GzNLYihcEJPI9MynlVRDxHf1LdiovAm34gYU"
            }
            width={50}
            height={50}
            alt="Profile Image"
          />
        </Link>
      ) : (
        <div
          className="hidden aspect-square cursor-pointer rounded-full bg-gray-500 sm:block"
          style={{ width: 50, height: 50 }}
        />
      )}
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
                {user && (
                  <li className="flex items-center gap-1 rounded-md p-2">
                    <Image
                      className="mr-2 aspect-square cursor-pointer rounded-full object-cover"
                      src={
                        user.photoURL ??
                        "https://utfs.io/f/3oEdKbrCvD62GzNLYihcEJPI9MynlVRDxHf1LdiovAm34gYU"
                      }
                      width={30}
                      height={30}
                      alt="Profile Image"
                    />
                    {user.email}
                  </li>
                )}
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
