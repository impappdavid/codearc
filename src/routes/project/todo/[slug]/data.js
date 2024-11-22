import { writable } from "svelte/store";

export const datas = writable([
		{
			id: "c1",
			name: "Brainstorm",
			items: [
				{id: 1, name: "Landing page", description:"The todo page gonna contain a pricing section an about section and a contact section", createdBy:"David", endDate:"2024.12.10", important:"high", fordev:"frontend"},
				{id: 2, name: "Database planner page", description:"I want to imlement a code generator which if you done with the database you just copy and paste the code", createdBy:"Adi", endDate:"2024.12.10", important:"medium", fordev:"frontend"},
				{id: 3, name: "Code quality checker", description:"I will use AI to check specified files via GitHub", createdBy:"David", endDate:"2024.12.10", important:"low" , fordev:"backend"},
				{id: 4, name: "Documentation generator", description:"I will use AI to check specified files via api test and the features that the site is giving", createdBy:"David", endDate:"2024.12.10", important:"low", fordev:"backend"},
				{id: 5, name: "Api test", description:"You have to give a link to generate a small documentation for you backend and you can test you api :)", createdBy:"Adi", endDate:"2024.12.10", important:"low", fordev:"frontend"},
				
			]
		},
		{
			id: "c2",
			name: "Todo",
			
			items: [
				
				{id: 6, name: "Team setting", description:"You can change teamName, teamLinks and teamMembers", createdBy:"Adi", endDate:"2024.12.10", important:"medium", fordev:"backend"},
				
			]
		},
		{
			id: "c3",
			name: "Doing",
			items: [
				{id: 7, name: "Todo page", description:"In the todo page i will create 5 option: brainstorm, todo, doing, done and review. The cards will be simplified design", createdBy:"David", endDate:"2024.12.10",important:"high", fordev:"frontend"},
				
			]
		},
        {
			id: "c4",
			name: "Done",
			items: [
				{id: 8, name: "User page", description:"Here you and other user can get information about you and your work", createdBy:"Adi", endDate:"2024.12.10", important:"low", fordev:"frontend"},
				
			]
		},
		{
			id: "c5",
			name: "Review",
			items: [
				{id: 9, name: "Home page", description:"", createdBy:"Adi", endDate:"2024.12.10", important:"medium", fordev:"backend"},
				
			]
		}
	]
);