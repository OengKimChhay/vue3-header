<template>
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
		<!-- Page Header -->
		<div class="mb-10">
			<h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
				Available Job Listings
			</h1>
			<p class="text-lg text-gray-600">
				Browse through our latest job opportunities and find your perfect match
			</p>
		</div>

		<!-- Loading State -->
		<div
			v-if="pending"
			class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
		>
			<div
				v-for="n in 6"
				:key="n"
				class="bg-white rounded-2xl p-6 shadow-md animate-pulse"
			>
				<div class="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
				<div class="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
				<div class="h-4 bg-gray-200 rounded w-2/3"></div>
			</div>
		</div>

		<!-- Error State -->
		<div
			v-else-if="error"
			class="bg-red-50 border-2 border-red-200 rounded-2xl p-8 text-center"
		>
			<p class="text-red-600 font-semibold text-lg">
				Failed to load jobs. Please try again later.
			</p>
		</div>

		<!-- Jobs Grid -->
		<div
			v-else-if="jobs"
			class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
		>
			<div
				v-for="job in jobs"
				:key="job.id"
				class="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200 group"
			>
				<div class="p-6">
					<!-- Job Header -->
					<div class="flex items-start justify-between mb-4">
						<div class="flex-1">
							<h3
								class="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors"
							>
								{{ job.title }}
							</h3>
							<p class="text-sm font-medium text-gray-600">{{ job.company }}</p>
						</div>
						<span
							class="px-3 py-1 text-xs font-semibold rounded-full"
							:class="{
								'bg-green-100 text-green-700': job.type === 'Full-time',
								'bg-purple-100 text-purple-700': job.type === 'Contract',
								'bg-blue-100 text-blue-700': job.type === 'Part-time',
							}"
						>
							{{ job.type }}
						</span>
					</div>

					<!-- Job Details -->
					<div class="space-y-2 mb-4">
						<div class="flex items-center text-sm text-gray-600">
							<svg
								class="w-4 h-4 mr-2"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
								/>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
								/>
							</svg>
							{{ job.location }}
						</div>
						<div class="flex items-center text-sm text-gray-600">
							<svg
								class="w-4 h-4 mr-2"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
							{{ job.salary }}
						</div>
					</div>

					<!-- Description -->
					<p class="text-sm text-gray-600 mb-4 line-clamp-2">
						{{ job.description }}
					</p>

					<!-- Requirements Tags -->
					<div class="flex flex-wrap gap-2 mb-4">
						<span
							v-for="req in job.requirements.slice(0, 3)"
							:key="req"
							class="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-lg"
						>
							{{ req }}
						</span>
						<span
							v-if="job.requirements.length > 3"
							class="px-2 py-1 bg-gray-100 text-gray-500 text-xs font-medium rounded-lg"
						>
							+{{ job.requirements.length - 3 }}
						</span>
					</div>

					<!-- Footer -->
					<div
						class="flex items-center justify-between pt-4 border-t border-gray-100"
					>
						<div class="text-sm text-gray-500">
							<span class="font-semibold text-gray-700">{{
								job.applicants
							}}</span>
							applicants
						</div>
						<button
							class="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors"
						>
							Apply Now
						</button>
					</div>
				</div>
			</div>
		</div>

		<!-- Empty State -->
		<div v-else class="bg-white rounded-2xl p-12 text-center shadow-md">
			<p class="text-gray-500 text-lg">No jobs available at the moment.</p>
		</div>
	</div>
</template>

<script setup lang="ts">
	definePageMeta({
		layout: 'sample',
	});
	interface Job {
		id: number;
		title: string;
		company: string;
		location: string;
		type: string;
		salary: string;
		description: string;
		requirements: string[];
		postedDate: string;
		applicants: number;
		status: string;
	}

	// Fetch jobs with ISR - data will be cached and revalidated every 60 seconds
	const {
		data: jobs,
		pending,
		error,
	} = await useFetch<Job[]>('/api/jobs', {
		key: 'job-listings',
		getCachedData(key) {
			const nuxtApp = useNuxtApp();
			return nuxtApp.payload.data[key] || nuxtApp.static.data[key];
		},
	});
</script>
