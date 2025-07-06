import React from "react";
import { Head } from "@inertiajs/react";
import {
	Box, Heading, HStack, Text,IconButton,MenuButton,Menu,MenuList,MenuItem,Link
} from "@chakra-ui/react";
import { HamburgerIcon, SettingsIcon } from "@chakra-ui/icons";

const MainLayout = ({ children, title }) => {
	<Head></Head>
	return (
		<>
			<header>
			<Box bg={"gray,200"}>
				<HStack>
			{/* base:スマホとPCでサイズ変更
				import.meta.env.でenvファイルの値を表示 */}
				<Heading as="h1" size={{base:"xs", md:"md"}}>
					{import.meta.env.VITE_APP_NAME}
					</Heading>

					{/* pc表示 */}
					<HStack display={{base:"none",md:"flex"}}>
						<Link href="#">マイページ</Link>
						<Link href="#">店舗の登録</Link>
					</HStack>

					{/* sp表示 */}
					<Box display={{ base: "block", md: "none" }} px={{ base: "1", md: "none" }} py={{base:"2",md:"none"}}>
				<Menu>
					<MenuButton as={IconButton} aria-label="Options" icon={<HamburgerIcon />} variant="outline" />
					<MenuList>
						<MenuItem icon={<SettingsIcon />}>マイページ</MenuItem>
						<MenuItem>店舗の登録</MenuItem>
					</MenuList>
						</Menu>
						</Box>
					</HStack>
			</Box>
			</header>
			<div>{children}</div>

			<Box bg={"blue.100"} fontWeight={"bold"} textAlign={"center"} py={{base:2,md:3}}>
				<Text>&copy; 2025{ import.meta.env.VITE_APP_NAME}</Text>
			</Box>
		</>
	);
}
export default MainLayout;