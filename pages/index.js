import {
	Box,
	Button,
	Center,
	Flex,
	Input,
	InputGroup,
	InputLeftElement,
	Heading,
	Text,
} from "@chakra-ui/react";
import { EmailIcon, LockIcon } from "@chakra-ui/icons";
import SocialsIcons from "../components/SocialsIcons/SocialsIcons";

const Home = () => {
	return (
		<Box width='90%' marginLeft='auto' marginRight='auto' marginTop={4}>
			<Box mb={8}>
				<Heading as='h1' size='sm'>
					Next.js Auth App
				</Heading>
			</Box>

			<Box mb='8'>
				<Heading as='h2' size='sm' mb='2'>
					Join us so you can create a profile
				</Heading>
				<Text size='sm'>
					Register and make a profile! Have fun logging in and out afterwards
				</Text>
			</Box>

			<Flex direction='column' gap={3} mb='8'>
				<InputGroup>
					<InputLeftElement children={<EmailIcon color='gray.300' />} />
					<Input placeholder='Email' />
				</InputGroup>

				<InputGroup>
					<InputLeftElement children={<LockIcon color='gray.300' />} />
					<Input placeholder='Password' />
				</InputGroup>

				<Button colorScheme='blue'>Join</Button>
			</Flex>

			<Box>
				<Center mb='8'>
					<Text size='xs'>or continue with these social profiles</Text>
				</Center>
				<Flex justifyContent='space-evenly'>
					<SocialsIcons variant='google' />
					<SocialsIcons variant='facebook' />
					<SocialsIcons variant='twitter' />
					<SocialsIcons variant='github' />
				</Flex>
			</Box>
		</Box>
	);
};

export default Home;
