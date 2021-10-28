<template>
	<Disclosure
		as="nav"
		class="
			w-screen
			fixed
			z-50
			bg-gradient-to-b
			from-gray-100
			dark:from-gray-900
		"
		v-slot="{ open }"
	>
		<div class="px-2 sm:px-6 lg:px-8">
			<div class="relative flex items-center justify-between h-16">
				<div
					class="
						absolute
						inset-y-0
						left-0
						flex
						items-center
						sm:hidden
					"
				>
					<!-- Mobile menu button-->
					<DisclosureButton
						class="
							inline-flex
							items-center
							justify-center
							p-2
							rounded-md
							text-gray-400
							hover:text-white hover:bg-gray-700
							focus:outline-none
							focus:ring-2
							focus:ring-inset
							focus:ring-white
						"
					>
						<span class="sr-only">Open main menu</span>
						<MenuIcon
							v-if="!open"
							class="block h-6 w-6"
							aria-hidden="true"
						/>
						<XIcon
							v-else
							class="block h-6 w-6"
							aria-hidden="true"
						/>
					</DisclosureButton>
				</div>
				<div
					class="
						flex-1 flex
						items-center
						justify-center
						sm:items-stretch sm:justify-start
					"
				>
					<router-link class="flex-shrink-0 flex items-center" to="/">
						<BenjamiinLogo class="w-8 h-8 text-black dark:text-white" />
					</router-link>
					<div class="hidden sm:block sm:ml-6">
						<div class="flex space-x-4">
							<router-link
								v-for="item in navigation"
								:key="item.name"
								:to="item.href"
								:class="[
									item.current
										? 'bg-gray-900 text-white'
										: 'text-gray-300 hover:bg-gray-700 hover:text-white',
									'px-3 py-2 rounded-md text-sm font-medium',
								]"
								:aria-current="
									item.current ? 'page' : undefined
								"
							>
								{{ item.name }}
							</router-link>
						</div>
					</div>
				</div>
				<div
					class="
						absolute
						inset-y-0
						right-0
						flex
						items-center
						pr-2
						sm:static sm:inset-auto sm:ml-6 sm:pr-0
					"
				>
					<button
						type="button"
						class="
							bg-gray-800
							p-1
							rounded-full
							text-gray-400
							hover:text-white
							focus:outline-none
							focus:ring-2
							focus:ring-offset-2
							focus:ring-offset-gray-800
							focus:ring-white
						"
					>
						<span class="sr-only">View notifications</span>
						<BellIcon class="h-6 w-6" aria-hidden="true" />
					</button>
				</div>
			</div>
		</div>

		<DisclosurePanel class="sm:hidden">
			<div class="px-2 pt-2 pb-3 space-y-1">
				<DisclosureButton
					v-for="item in navigation"
					:key="item.name"
					class="block w-full"
				>
					<router-link
						:to="item.href"
						:class="[
							item.current
								? 'bg-gray-900 text-white'
								: 'text-gray-300 hover:bg-gray-700 hover:text-white',
							'block px-3 py-2 rounded-md text-base font-medium',
						]"
						:aria-current="item.current ? 'page' : undefined"
					>
						{{ item.name }}
					</router-link>
				</DisclosureButton>
			</div>
		</DisclosurePanel>
	</Disclosure>
</template>

<script lang="ts">
import {
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
	Menu,
	MenuButton,
	MenuItem,
	MenuItems,
} from '@headlessui/vue';
import { BellIcon, MenuIcon, XIcon } from '@heroicons/vue/outline';
import BenjamiinLogo from './logos/Benjamiin.vue';

const navigation = [
	{ name: 'Work', href: '/work', current: true },
	{ name: 'Fun', href: '/fun', current: false },
	{ name: 'Contact', href: '/contact', current: false },
];

export default {
	components: {
		Disclosure,
		DisclosureButton,
		DisclosurePanel,
		Menu,
		MenuButton,
		MenuItem,
		MenuItems,
		BellIcon,
		MenuIcon,
		XIcon,
		BenjamiinLogo,
	},
	setup() {
		return {
			navigation,
		};
	},
};
</script>
