import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const initialPosts = [
	{
		title: 'Getting Started with React: Building Dynamic User Interfaces',
		body: "React is a powerful JavaScript library for building dynamic user interfaces. With its component-based architecture and virtual DOM, React enables frontend developers to create reusable UI components and efficiently manage state. Whether you're building single-page applications or complex web interfaces, React provides the tools and flexibility to bring your ideas to life.",
	},
	{
		title: 'Angular Essentials: Building Modern Web Applications',
		body: "Angular is a comprehensive frontend framework for building modern web applications. With features like two-way data binding, dependency injection, and a robust CLI, Angular simplifies the development process and promotes code consistency. Whether you're a beginner or an experienced developer, mastering Angular empowers you to create scalable, maintainable applications that meet the demands of today's users.",
	},
	{
		title: 'Vue.js: The Progressive JavaScript Framework',
		body: 'Vue.js is a progressive JavaScript framework for building user interfaces. Known for its simplicity and flexibility, Vue.js allows developers to incrementally adopt its features and scale from simple prototypes to full-fledged applications. With a gentle learning curve and a vibrant ecosystem, Vue.js empowers developers to create elegant, reactive interfaces that delight users.',
	},
	{
		title: 'Svelte: The Radical New Approach to Building Web Applications',
		body: 'Svelte is a radical new approach to building web applications. Unlike traditional frontend frameworks, Svelte shifts the work of building interfaces from the browser to the build step, resulting in smaller bundle sizes and faster runtime performance. With its intuitive syntax and compiler-based approach, Svelte streamlines development and enables developers to focus on building great user experiences.',
	},
	{
		title: 'Choosing the Right Framework: A Guide for Frontend Developers',
		body: "With a plethora of frontend frameworks available, choosing the right one for your project can be daunting. Factors like project requirements, team expertise, and community support all play a role in the decision-making process. In this guide, we'll explore the strengths and weaknesses of popular frontend frameworks like React, Angular, Vue.js, and Svelte, helping you make an informed choice for your next project.",
	},
	{
		title: 'State Management in React: Choosing the Right Approach',
		body: "Effective state management is essential for building robust React applications. With options like React's built-in state management, Context API, and external libraries like Redux and MobX, developers have several choices for managing application state. In this post, we'll explore the strengths and weaknesses of different state management approaches and provide guidance on choosing the right one for your project.",
	},
	{
		title: 'Angular Routing: Navigating Through Single-Page Applications',
		body: "Routing is a crucial aspect of building single-page applications with Angular. Angular's built-in router provides powerful features for defining routes, handling navigation, and managing application state. Whether you're implementing lazy loading, route guards, or nested routes, mastering Angular routing empowers you to create seamless navigation experiences for your users.",
	},
	{
		title: 'Vue.js Components: Reusable Building Blocks for Web Development',
		body: "Components are the building blocks of Vue.js applications, allowing developers to encapsulate UI functionality and reuse it across the application. With Vue.js single-file components, developers can define templates, logic, and styles in a single file, making development efficient and organized. In this post, we'll explore best practices for creating Vue.js components and maximizing reusability in your projects.",
	},
	{
		title: 'Svelte Stores: Managing Application State with Ease',
		body: "Svelte stores are a powerful tool for managing application state in Svelte applications. By encapsulating reactive values and providing a simple API for updating state, Svelte stores make state management straightforward and intuitive. Whether you're handling global state, local component state, or asynchronous data fetching, Svelte stores provide a flexible solution for managing state in your applications.",
	},
	{
		title:
			'Frontend Frameworks Performance Comparison: React vs. Angular vs. Vue.js vs. Svelte',
		body: "Performance is a critical consideration when choosing a frontend framework for your project. In this post, we'll compare the performance characteristics of popular frontend frameworks like React, Angular, Vue.js, and Svelte. By analyzing metrics such as bundle size, runtime performance, and rendering speed, we'll provide insights into the strengths and weaknesses of each framework to help you make an informed decision.",
	},
];

const seed = async () => {
	await prisma.post.deleteMany();

	for (const post of initialPosts) {
		await prisma.post.create({ data: post });
	}
};

seed();
