export default defineEventHandler(() => {
	// Mock job listing data - simulating database fetch
	return [
		{
			id: 1,
			title: 'Senior Frontend Developer',
			company: 'Tech Solutions Inc.',
			location: 'Phnom Penh, Cambodia',
			type: 'Full-time',
			salary: '$3,000 - $5,000',
			description:
				'We are looking for an experienced frontend developer with strong skills in Vue.js and Nuxt.js',
			requirements: [
				'5+ years experience',
				'Vue.js/Nuxt.js',
				'Tailwind CSS',
				'TypeScript',
			],
			postedDate: '2025-10-20',
			applicants: 24,
			status: 'active',
		},
		{
			id: 2,
			title: 'Backend Engineer',
			company: 'Digital Innovations',
			location: 'Remote',
			type: 'Full-time',
			salary: '$4,000 - $6,000',
			description:
				'Join our team to build scalable backend systems using Node.js and PostgreSQL',
			requirements: [
				'3+ years experience',
				'Node.js',
				'PostgreSQL',
				'REST APIs',
			],
			postedDate: '2025-10-18',
			applicants: 18,
			status: 'active',
		},
		{
			id: 3,
			title: 'UI/UX Designer',
			company: 'Creative Studio',
			location: 'Phnom Penh, Cambodia',
			type: 'Contract',
			salary: '$2,500 - $4,000',
			description:
				'Create beautiful and intuitive user interfaces for web and mobile applications',
			requirements: [
				'Figma/Adobe XD',
				'Portfolio required',
				'User research',
				'Prototyping',
			],
			postedDate: '2025-10-22',
			applicants: 31,
			status: 'active',
		},
		{
			id: 4,
			title: 'DevOps Engineer',
			company: 'Cloud Systems Ltd.',
			location: 'Hybrid',
			type: 'Full-time',
			salary: '$3,500 - $5,500',
			description:
				'Manage cloud infrastructure and CI/CD pipelines for enterprise applications',
			requirements: ['AWS/Azure', 'Docker/Kubernetes', 'CI/CD', 'Linux'],
			postedDate: '2025-10-15',
			applicants: 12,
			status: 'active',
		},
		{
			id: 5,
			title: 'Mobile App Developer',
			company: 'AppWorks Studio',
			location: 'Phnom Penh, Cambodia',
			type: 'Full-time',
			salary: '$2,800 - $4,500',
			description:
				'Build cross-platform mobile applications using React Native or Flutter',
			requirements: [
				'React Native or Flutter',
				'iOS/Android',
				'RESTful APIs',
				'Git',
			],
			postedDate: '2025-10-19',
			applicants: 22,
			status: 'active',
		},
		{
			id: 6,
			title: 'Project Manager',
			company: 'Enterprise Solutions',
			location: 'Phnom Penh, Cambodia',
			type: 'Full-time',
			salary: '$3,200 - $5,000',
			description:
				'Lead software development projects and coordinate cross-functional teams',
			requirements: [
				'PMP/Scrum certified',
				'Agile methodology',
				'5+ years PM experience',
				'Technical background',
			],
			postedDate: '2025-10-21',
			applicants: 15,
			status: 'active',
		},
	];
});
