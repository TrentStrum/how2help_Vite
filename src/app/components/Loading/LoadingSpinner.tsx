import { Box, CircularProgress } from '@mui/material';

export const LoadingSpinner = () => {
	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				p: 4,
			}}
		>
			<CircularProgress />
		</Box>
	);
};
