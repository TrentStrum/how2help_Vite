import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import {
	alpha,
	Avatar,
	Box,
	Button,
	Card,
	CardHeader,
	Divider,
	Grid,
	Typography,
} from '@mui/material';

const Feed = () => {
	const feed = [
		{
			name: 'Munroe Dacks',
			jobTitle: 'Senior Cost Accountant',
			company: 'Trudoo',
			avatar: '/avatars/1.png',
		},
		{
			name: 'Gunilla Canario',
			jobTitle: 'Associate Professor',
			company: 'Buzzdog',
			avatar: '/avatars/2.png',
		},
		{
			name: 'Rowena Geistmann',
			jobTitle: 'Pharmacist',
			company: 'Yozio',
			avatar: '/avatars/3.png',
		},
		{
			name: 'Ede Stoving',
			jobTitle: 'VP Product Management',
			company: 'Cogibox',
			avatar: '/avatars/4.png',
		},
		{
			name: 'Crissy Spere',
			jobTitle: 'Social Worker',
			company: 'Babbleblab',
			avatar: '/avatars/5.png',
		},
		{
			name: 'Michel Greatbanks',
			jobTitle: 'Research Assistant III',
			company: 'Aimbu',
			avatar: '/avatars/1.png',
		},
	];

	return (
		<Card>
			<CardHeader
				sx={{
					backgroundColor: (theme) =>
						theme.palette.mode === 'dark'
							? alpha('black', 0.02)
							: 'neutral.25',
				}}
				title='Followers Feed'
			/>
			<Divider />
			<Box p={2}>
				<Grid container>
					{feed.map((_feed) => (
						<Grid
							key={_feed.name}
							xs={12}
							sm={6}
							lg={4}
						>
							<Box
								p={{ xs: 2, sm: 3 }}
								display='flex'
								alignItems='flex-start'
							>
								<Avatar src={_feed.avatar} />
								<Box
									pl={2}
									overflow='hidden'
									flex={1}
								>
									<Typography
										noWrap
										gutterBottom
										variant='subtitle1'
										color='text.secondary'
									>
										{_feed.company}
									</Typography>
									<Typography
										noWrap
										variant='h5'
										fontWeight={500}
									>
										{_feed.name}
									</Typography>
									<Typography
										noWrap
										color='text.primary'
										sx={{
											pb: 2,
										}}
									>
										{_feed.jobTitle}
									</Typography>
									<Button
										variant='outlined'
										size='small'
										startIcon={<AddTwoToneIcon />}
									>
										Follow
									</Button>
								</Box>
							</Box>
						</Grid>
					))}
				</Grid>
			</Box>
		</Card>
	);
};

export { Feed };
