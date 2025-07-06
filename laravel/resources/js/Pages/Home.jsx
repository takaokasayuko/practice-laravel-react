import react from 'react';
import {Box, Heading, VStack, HStack, Image, Text} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import MainLayout from "@/Layouts/MainLayout";

const Home = (props) => {
	return (
		<>

			<Box p={4}>
				<Heading fontSize={{ base: "24px", md: "40px" }} m={2} bg={"blue.100"}>ホーム</Heading>
				ショップ一覧
				<VStack spacing={4} align="stretch">
				{props.shops.map((shop) => (
					<Box key={shop.id} p={4} borderWidth={"1px"} borderRadius={"lg"} boxShadow={"hidden"}>
						<HStack spacing={4}>
							<Image boxSize="100ppx" objectFit="cover" src="https://placehold.co/100x100" alt={shop.name} />
							<VStack align={"start"}>
								<Heading as="h3" size="md">{shop.name}</Heading>
								<Text>{ shop.description}</Text>
							</VStack>
						</HStack>
						</Box>
				))}
				</VStack>


			<Heading as="h2" fontSize={{ base: "24px", md: "40px" }} m={2} bg={"blue.100"}>新着レビュー</Heading>
			<VStack spacing={4} align="stretch">
				{props.newReviews.map((review) => (
					<Box key={review.id} p={4} borderWidth={"1px"} borderRadius={"lg"} boxShadow={"hidden"}>
						<VStack align={"start"}>
							<Text>{review.user.name}</Text>
							<Text>{review.comment}</Text>
							<HStack spacing={1}>{Array(5).fill("").map((_, i) => (
								<StarIcon key={i} color={i < review.rating ? "yellow.500":"gray.300"}></StarIcon>
							))}</HStack>
						</VStack>
						</Box>
				))}
				</VStack>
			</Box>

			

		</>
	)
}
Home.layout = (page) => <MainLayout children={page} title="ホームの画面" />
export default Home;