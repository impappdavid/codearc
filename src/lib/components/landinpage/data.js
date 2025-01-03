import { writable } from "svelte/store";

export const datas = writable([
		
		{
			id: "c1",
			name: "Todo",
			
			items: [
				{id: 5, name: "Api test", description:"You have to give a link to generate a small documentation for you backend and you can test you api :)", createdBy:"Adi", endDate:"2024.12.10", important:"low", fordev:"frontend"},
				
				{id: 6, name: "Team setting", description:"You can change teamName, teamLinks and teamMembers", createdBy:"Adi", endDate:"2024.12.10", important:"medium", fordev:"backend"},
				
			]
		},
		{
			id: "c2",
			name: "Doing",
			items: [
				{id: 7, name: "Todo page", description:"In the todo page i will create 5 option: brainstorm, todo, doing, done and review. The cards will be simplified design", createdBy:"David", endDate:"2024.12.10",important:"high", fordev:"frontend"},
				
			]
		},
        {
			id: "c3",
			name: "Done",
			items: [
				{id: 8, name: "User page", description:"Here you and other user can get information about you and your work", createdBy:"Adi", endDate:"2024.12.10", important:"low", fordev:"frontend"},
				{id: 9, name: "Home page", description:"", createdBy:"Adi", endDate:"2024.12.10", important:"medium", fordev:"backend"},
			]
		}
	]
);