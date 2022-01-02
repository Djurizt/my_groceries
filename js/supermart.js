
let products ={
    "1" : {"productName" : "Dettol soap","price" : 500,},

    "2": {"productName": "Juice","price" : 800,},

    "3" : {"productName" : "Body cream","price" : 2000,},

    "4" : {"productName" : "Plantain chips","price" : 2500,},

    "5" : {"productName" : "Chicken","price" : 8000,},

    "6" : {"productName" : "Chocolate","price" : 500,},

    "7" : {"productName" : "Plantain","price" : 400,},
}
let cart = {}

while(true){

	let usersInput = prompt ('Good Day, \n Welcome to MY Groceries. \n Kindly select your preffered items of purchase,press 0 to display invoice. \n 1.Dettol soap \n 2.Juice \n 3.Body cream \n 4.Plantain chips \n 5.Crispy chicken \n 6.Chocolate \n 7.Plantain \n 0.Exit.')


	if (usersInput == 0){
		let price = Object.values(cart)
		// console.log(price)
		let grandtotal = eval(price.join("+"))
		
		console.log(`Thank you for shopping with us. Below is your invoice \n
         ${grandtotal}`)
		
	    break
	}
	else{

		if (usersInput < 0 || usersInput > 7 || isNaN(usersInput)){
			console.log(alert("Sorry, that is a wrong selection. Please choose a number between 0 and 7"))
			// break
		}
	else{
	switch (usersInput){ 
		case usersInput:
			console.log(`You have added ${products[usersInput].productName} to your cart `)
			let numOfproduct = prompt(`How many ${products[usersInput].productName} do you want to buy?`)
			let totalPrice = products[usersInput].price * numOfproduct
            console.log(totalPrice)
			cart[products[usersInput].productName] = totalPrice

			break

		


	}
}
	}
}

console.log(cart)