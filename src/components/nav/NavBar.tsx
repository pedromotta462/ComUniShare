"use client"

import React, { useState } from "react";
import Image from "next/image";
import imgs from "../../../public/imgs"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { 
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import {
    Cloud,
    CreditCard,
    Github,
    Keyboard,
    LifeBuoy,
    LogOut,
    Mail,
    MessageSquare,
    Plus,
    PlusCircle,
    Settings,
    User,
    UserPlus,
    Users,
} from "lucide-react"
import { 
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "../ui/tabs";
import { Button } from "@/components/ui/button"
import Link from "next/link";
import { usePathname  } from "next/navigation";


function NavBar() {
    
    const navigation = usePathname();

    const isButtonActive = (path: string) => navigation === path;

    return (
        <nav className="flex flex-col items-center justify-center bg-[#E26E44] w-full fixed top-0 left-0 shadow-xl">
            <div className="flex items-center justify-between p-5 ph w-full">
                
                <div className="flex items-center justify-center">
                    <Image
                        src={imgs.logoComunishare}
                        alt="comunishare's logo"
                        width={50}
                        height={50}
                    >
                    </Image>
                    <Image
                        className="ml-3"
                        src={imgs.logoNome}
                        alt="comunishare"
                        width={200}
                        height={200}
                    >
                    </Image>
                </div>
                
                <div className="flex items-center justify-center">
                    <Button
                        size="lg"
                        className={`m-2 bg-transparent text-[#FADF67] text-base ${
                            isButtonActive('/') ? 'bg-[#FADF67] text-[#E26E44]' : 'hover:bg-[#FADF67] hover:text-[#E26E44]'
                        }`}
                    >
                    <Link href="/">Home</Link>
                    </Button>
                    <div className="h-10 w-[1px] bg-[#E8FF0B] m-1"></div>
                    <Button
                        size="lg"
                        className={`m-2 bg-transparent text-[#FADF67] text-base ${
                            isButtonActive('/Services') ? 'bg-[#FADF67] text-[#E26E44]' : 'hover:bg-[#FADF67] hover:text-[#E26E44]'
                        }`}
                    >
                    <Link href="/Services">Serviços</Link>
                    </Button>
                    <div className="h-10 w-[1px] bg-[#E8FF0B] m-1"></div>
                    <Button
                        size="lg"
                        className={`m-2 bg-transparent text-[#FADF67] text-base ${
                            isButtonActive('/Objects') ? 'bg-[#FADF67] text-[#E26E44]' : 'hover:bg-[#FADF67] hover:text-[#E26E44]'
                        }`}
                    >
                    <Link href="/Objects">Objetos</Link>
                    </Button>
                    <div className="h-10 w-[1px] bg-[#E8FF0B] m-1"></div>
                    <Button
                        size="lg"
                        className={`m-2 bg-transparent text-[#FADF67] text-base ${
                            isButtonActive('/OMS') ? 'bg-[#FADF67] text-[#E26E44]' : 'hover:bg-[#FADF67] hover:text-[#E26E44]'
                        }`}
                    >
                    <Link href="/OMS">OMS</Link>
                    </Button>
                </div>

                <div>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Avatar>
                                <AvatarFallback>PM</AvatarFallback>
                                <AvatarImage src="https://github.com/pedromotta462.png" />
                            </Avatar>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56 mr-1">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuGroup>
                                <DropdownMenuItem>
                                    <User className="mr-2 h-4 w-4" />
                                    <span>Profile</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <CreditCard className="mr-2 h-4 w-4" />
                                    <span>Billing</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Settings className="mr-2 h-4 w-4" />
                                    <span>Settings</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <LifeBuoy className="mr-2 h-4 w-4" />
                                    <span>Support</span>
                                </DropdownMenuItem>
                            </DropdownMenuGroup>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <LogOut className="mr-2 h-4 w-4" />
                                <span>Log out</span>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>

            </div>
        </nav>
    );
}

export default NavBar;
