#! /usr/bin/env node

console.log("\n\t\Welcome to Meezan Bank ATM\n");

import inquirer from "inquirer";

let myBalance = 10000;
let myPincode = 2002;

let pinAns = await inquirer.prompt(
    {
        name:"pin",
        message:"Please Enter your Pincode",
        type:"number"
    }
)


if (pinAns.pin === myPincode){
    
    console.log("\nPincode is correct!!!\n");

    let operationAns = await inquirer.prompt
    (
        {
            name:"operation",
            message:"\nChoose a operation to perform",
            type:"list",
            choices:["Withdraw", "Check balance","Add Money", "Fast Cash"]

        
        }
    )

    if (operationAns.operation === "Withdraw")
        {
            let amountAns = await inquirer.prompt
            (
                {
                    name:"amount",
                    message:"\nEnter your amount",
                    type:"number"
                }
            ) 
            if  (amountAns.amount > myBalance){
                console.log("\nInsufficient balance\n");
            }
            else if (amountAns.amount <= 0)
                {
                    console.log("\nEnter a valid amount");
                }
            else {
                myBalance -= amountAns.amount;
                console.log(`\n${amountAns.amount} is withdraw successfully!!!\n`);
                console.log("After withdraw the remaining amount is: " + myBalance );
            }
        }else if (operationAns.operation === "Check balance")
            {
                console.log("Your Balance is: " + myBalance);
            }
        else if (operationAns.operation === "Add Money")
                {
                    let amountAns = await inquirer.prompt
            (
                {
                    name:"amount",
                    message:"\nEnter your amount",
                    type:"number"
                }
            ) 
            
            if (amountAns.amount <= 0)
                {
                    console.log("\nEnter a valid amount");

                }
            else if (myBalance += amountAns.amount)
                {
                    console.log(`\n${amountAns.amount} is Added to your account successfully!!!\n`);
                    console.log("After Adding amount: " + myBalance );
                }
            }
        else if (operationAns.operation === "Fast Cash")
            {
                let cashAns = await inquirer.prompt(
                    {
                        name:"cash",
                        message:"\nSelect any option",
                        type:"list",
                        choices:["500", "1000", "2000", "5000", "10000", "Enter specific amount"]
                    }
                )
                if (cashAns.cash === "500")
                    {
                        myBalance -= cashAns.cash;
                        console.log(`\n${cashAns.cash} Withdrawn Successfully!!!\n`);
                        console.log("After withdraw the remaining amount is: " + myBalance ); 
                    }
                else if (cashAns.cash === "1000")
                    {
                        myBalance -= cashAns.cash;
                        console.log(`\n${cashAns.cash} Withdrawn Successfully!!!\n`);
                        console.log("After withdraw the remaining amount is: " + myBalance );
                    }
                    else if (cashAns.cash === "2000")
                        {
                            myBalance -= cashAns.cash;
                            console.log(`\n${cashAns.cash} Withdrawn Successfully!!!\n`);
                            console.log("After withdraw the remaining amount is: " + myBalance );
                        }
                        else if (cashAns.cash === "5000")
                            {
                                myBalance -= cashAns.cash;
                                console.log(`\n${cashAns.cash} Withdrawn Successfully!!!\n`);
                                console.log("After withdraw the remaining amount is: " + myBalance );
                            }
                            else if (cashAns.cash === "10000")
                                {
                                    myBalance -= cashAns.cash;
                                    console.log(`\n${cashAns.cash} Withdrawn Successfully!!!\n`);
                                    console.log("After withdraw the remaining amount is: " + myBalance );
                                }
                                else if (cashAns.cash === "Enter specific amount")
                                    {
                                        let specAns = await inquirer.prompt(
                                            {
                                                name:"specific",
                                                message:"\nEnter your specific amount",
                                                type:"number"
                                        
                                            }
                                        )
                                        if  (specAns.specific > myBalance){
                                            console.log("\nInsufficient balance\n");
                                        }
                                        else if (specAns.specific <= 0)
                                            {
                                                console.log("\nEnter a valid amount");
                                            }
                                        else {
                                            myBalance -= specAns.specific;
                                            console.log(`\n${specAns.specific} Withdraw Successfully!!!\n`);
                                            console.log("After withdraw the remaining amount is: " + myBalance );
                                        }



                                    }
                    
                    
                    
                    }
             
            
    
    

    
} else{
    console.log("\nInvalid PinCode!!!!\nPlease try again");
}