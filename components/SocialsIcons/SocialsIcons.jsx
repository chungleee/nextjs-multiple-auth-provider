import { Icon, IconButton } from "@chakra-ui/react";
import {
	RiGoogleFill,
	RiFacebookBoxFill,
	RiTwitterFill,
	RiGithubFill,
} from "react-icons/ri";

const GoogleIcon = () => {
	return <Icon as={RiGoogleFill} />;
};

const FacebookIcon = () => {
	return <Icon as={RiFacebookBoxFill} />;
};

const TwitterIcon = () => {
	return <Icon as={RiTwitterFill} />;
};

const GithubIcon = () => {
	return <Icon as={RiGithubFill} />;
};

const SocialsIcons = ({ variant }) => {
	if (variant === "google")
		return (
			<IconButton
				backgroundColor='white'
				border='1px'
				borderColor='gray.300'
				borderRadius='full'
				aria-label='google icon'
				icon={<GoogleIcon />}
			/>
		);

	if (variant === "facebook")
		return (
			<IconButton
				backgroundColor='white'
				border='1px'
				borderColor='gray.300'
				borderRadius='full'
				aria-label='facebook icon'
				icon={<FacebookIcon />}
			/>
		);

	if (variant === "twitter")
		return (
			<IconButton
				backgroundColor='white'
				border='1px'
				borderColor='gray.300'
				borderRadius='full'
				aria-label='twitter icon'
				icon={<TwitterIcon />}
			/>
		);

	if (variant === "github")
		return (
			<IconButton
				backgroundColor='white'
				border='1px'
				borderColor='gray.300'
				borderRadius='full'
				aria-label='github icon'
				icon={<GithubIcon />}
			/>
		);
};

export default SocialsIcons;
